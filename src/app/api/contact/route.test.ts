import type { NextRequest } from "next/server";
import { beforeEach, describe, expect, it, vi } from "vitest";

// Mock Resend send function with vi.hoisted to ensure it's available during module loading
const { mockResendSend, resetResendMocks, mockResendError } = vi.hoisted(() => {
  const mockSendFn = vi.fn().mockResolvedValue({
    id: "test-email-id",
    from: "test@tecnojr.com",
    to: "contact@tecnojr.com",
    created_at: new Date().toISOString(),
  });

  return {
    mockResendSend: mockSendFn,
    resetResendMocks: () => {
      mockSendFn.mockClear();
      mockSendFn.mockResolvedValue({
        id: "test-email-id",
        from: "test@tecnojr.com",
        to: "contact@tecnojr.com",
        created_at: new Date().toISOString(),
      });
    },
    mockResendError: (error: Error) => {
      mockSendFn.mockRejectedValueOnce(error);
    },
  };
});

// Mock Resend module
vi.mock("resend", () => ({
  Resend: vi.fn().mockImplementation(() => ({
    emails: {
      send: mockResendSend,
    },
  })),
}));

// Now import after mocks are set up
import { OPTIONS, POST } from "./route";

// Mock environment variables
process.env.RESEND_API_KEY = "test-api-key";
process.env.RESEND_FROM_EMAIL = "test@tecnojr.com";
process.env.CONTACT_EMAIL = "contact@tecnojr.com";

// Type for contact form data
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

// Helper to create mock NextRequest (with proper typing instead of 'any')
function createMockRequest(
  body: ContactFormData | Record<string, unknown>,
): NextRequest {
  return {
    json: async () => body,
    headers: new Headers(),
    method: "POST",
  } as NextRequest;
}

describe("Contact API Route", () => {
  beforeEach(() => {
    resetResendMocks();
  });

  describe("POST - Success Cases", () => {
    it("sends email with valid data", async () => {
      const validData = {
        name: "João Silva",
        email: "joao@example.com",
        message: "Esta é uma mensagem de teste com mais de 10 caracteres.",
      };

      const request = createMockRequest(validData);
      const response = await POST(request);
      const json = await response.json();

      expect(response.status).toBe(200);
      expect(json.success).toBe(true);
      expect(json.message).toContain("sucesso");
      expect(mockResendSend).toHaveBeenCalledTimes(1);
    });

    it("sends email with optional phone field", async () => {
      const validData = {
        name: "Maria Santos",
        email: "maria@example.com",
        phone: "(11) 98765-4321",
        message: "Mensagem de teste com telefone incluído.",
      };

      const request = createMockRequest(validData);
      const response = await POST(request);
      const json = await response.json();

      expect(response.status).toBe(200);
      expect(json.success).toBe(true);
      expect(mockResendSend).toHaveBeenCalledWith(
        expect.objectContaining({
          replyTo: validData.email,
          subject: expect.stringContaining(validData.name),
        }),
      );
    });

    it("includes correct email fields", async () => {
      const validData = {
        name: "Test User",
        email: "test@example.com",
        message: "Test message content here.",
      };

      const request = createMockRequest(validData);
      await POST(request);

      expect(mockResendSend).toHaveBeenCalledWith(
        expect.objectContaining({
          from: "test@tecnojr.com",
          to: "contact@tecnojr.com",
          replyTo: "test@example.com",
          subject: "Novo contato de Test User",
        }),
      );
    });

    it("includes user data in HTML email", async () => {
      const validData = {
        name: "João Silva",
        email: "joao@example.com",
        message: "Minha mensagem\nCom quebra de linha",
      };

      const request = createMockRequest(validData);
      await POST(request);

      const callArgs = mockResendSend.mock.calls[0][0];
      expect(callArgs.html).toContain("João Silva");
      expect(callArgs.html).toContain("joao@example.com");
      expect(callArgs.html).toContain("Minha mensagem<br>Com quebra de linha");
    });
  });

  describe("POST - Validation Errors", () => {
    it("rejects empty name", async () => {
      const invalidData = {
        name: "",
        email: "valid@example.com",
        message: "Valid message here",
      };

      const request = createMockRequest(invalidData);
      const response = await POST(request);
      const json = await response.json();

      expect(response.status).toBe(400);
      expect(json.error).toBe("Dados inválidos");
      expect(json.details).toBeDefined();
      expect(mockResendSend).not.toHaveBeenCalled();
    });

    it("rejects short name (less than 2 characters)", async () => {
      const invalidData = {
        name: "J",
        email: "valid@example.com",
        message: "Valid message here",
      };

      const request = createMockRequest(invalidData);
      const response = await POST(request);
      const json = await response.json();

      expect(response.status).toBe(400);
      expect(json.details).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            field: "name",
            message: expect.stringContaining("pelo menos 2 caracteres"),
          }),
        ]),
      );
    });

    it("rejects invalid email format", async () => {
      const invalidData = {
        name: "Valid Name",
        email: "invalid-email",
        message: "Valid message here",
      };

      const request = createMockRequest(invalidData);
      const response = await POST(request);
      const json = await response.json();

      expect(response.status).toBe(400);
      expect(json.details).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            field: "email",
            message: expect.stringContaining("Email inválido"),
          }),
        ]),
      );
    });

    it("rejects short message (less than 10 characters)", async () => {
      const invalidData = {
        name: "Valid Name",
        email: "valid@example.com",
        message: "Short",
      };

      const request = createMockRequest(invalidData);
      const response = await POST(request);
      const json = await response.json();

      expect(response.status).toBe(400);
      expect(json.details).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            field: "message",
            message: expect.stringContaining("pelo menos 10 caracteres"),
          }),
        ]),
      );
    });

    it("rejects missing required fields", async () => {
      const invalidData = {
        name: "Valid Name",
        // missing email and message
      };

      const request = createMockRequest(invalidData);
      const response = await POST(request);
      const json = await response.json();

      expect(response.status).toBe(400);
      expect(json.error).toBe("Dados inválidos");
      expect(json.details.length).toBeGreaterThan(0);
    });

    it("validates multiple fields simultaneously", async () => {
      const invalidData = {
        name: "A",
        email: "not-an-email",
        message: "Short",
      };

      const request = createMockRequest(invalidData);
      const response = await POST(request);
      const json = await response.json();

      expect(response.status).toBe(400);
      expect(json.details).toHaveLength(3);
    });
  });

  describe("POST - Resend Service Errors", () => {
    it("handles Resend API error", async () => {
      mockResendError(new Error("Resend API error"));

      const validData = {
        name: "João Silva",
        email: "joao@example.com",
        message: "Test message content here.",
      };

      const request = createMockRequest(validData);
      const response = await POST(request);
      const json = await response.json();

      expect(response.status).toBe(500);
      // Error thrown during send will result in generic error message
      expect(json.error).toContain("Erro interno");
    });

    it("returns specific error when Resend fails", async () => {
      // Mock Resend to return error in response
      mockResendSend.mockResolvedValueOnce({
        error: { message: "Invalid API key" },
        data: null,
      });

      const validData = {
        name: "Test User",
        email: "test@example.com",
        message: "Test message content.",
      };

      const request = createMockRequest(validData);
      const response = await POST(request);
      const json = await response.json();

      expect(response.status).toBe(500);
      expect(json.error).toBeTruthy();
    });
  });

  describe("POST - Edge Cases", () => {
    it("handles very long name", async () => {
      const validData = {
        name: "A".repeat(200),
        email: "valid@example.com",
        message: "Valid message content here.",
      };

      const request = createMockRequest(validData);
      const response = await POST(request);

      expect(response.status).toBe(200);
    });

    it("handles very long message", async () => {
      const validData = {
        name: "Valid Name",
        email: "valid@example.com",
        message: "A".repeat(2000),
      };

      const request = createMockRequest(validData);
      const response = await POST(request);

      expect(response.status).toBe(200);
    });

    it("handles special characters in message", async () => {
      const validData = {
        name: "João Peças",
        email: "user@example.com",
        message: 'Mensagem com açentos e çaracteres especiáis: <>&"',
      };

      const request = createMockRequest(validData);
      const response = await POST(request);

      expect(response.status).toBe(200);
    });

    it("handles phone as optional field", async () => {
      const dataWithoutPhone = {
        name: "Test User",
        email: "test@example.com",
        message: "Message without phone number.",
      };

      const request = createMockRequest(dataWithoutPhone);
      const response = await POST(request);

      expect(response.status).toBe(200);
    });
  });

  describe("OPTIONS - CORS", () => {
    it("returns 200 with CORS headers", async () => {
      const response = await OPTIONS();
      const json = await response.json();

      expect(response.status).toBe(200);
      expect(json).toEqual({});
    });

    it("includes correct CORS headers", async () => {
      const response = await OPTIONS();

      expect(response.headers.get("Access-Control-Allow-Origin")).toBe("*");
      expect(response.headers.get("Access-Control-Allow-Methods")).toContain(
        "POST",
      );
      expect(response.headers.get("Access-Control-Allow-Headers")).toContain(
        "Content-Type",
      );
    });
  });

  describe("POST - Response Format", () => {
    it("returns success message in Portuguese", async () => {
      const validData = {
        name: "João Silva",
        email: "joao@example.com",
        message: "Test message content.",
      };

      const request = createMockRequest(validData);
      const response = await POST(request);
      const json = await response.json();

      expect(json.message).toContain("sucesso");
      expect(json.message).toContain("contato");
    });

    it("includes email ID in success response", async () => {
      // Reset and mock with specific ID
      resetResendMocks();
      mockResendSend.mockResolvedValueOnce({
        data: {
          id: "email-id-12345",
        },
        error: null,
      });

      const validData = {
        name: "Test User",
        email: "test@example.com",
        message: "Test message.",
      };

      const request = createMockRequest(validData);
      const response = await POST(request);
      const json = await response.json();

      expect(json.success).toBe(true);
      // ID should be in response if available
      expect(json).toHaveProperty("id");
    });
  });
});
