import { vi } from "vitest";

// Mock Resend client for API testing
export const mockResendSend = vi.fn().mockResolvedValue({
  id: "test-email-id",
  from: "contato@tecnojr.com",
  to: "test@example.com",
  created_at: new Date().toISOString(),
});

export const mockResend = {
  emails: {
    send: mockResendSend,
  },
};

// Helper to reset resend mocks
export function resetResendMocks() {
  mockResendSend.mockClear();
  mockResendSend.mockResolvedValue({
    id: "test-email-id",
    from: "contato@tecnojr.com",
    to: "test@example.com",
    created_at: new Date().toISOString(),
  });
}

// Helper to mock resend error
export function mockResendError(error: Error) {
  mockResendSend.mockRejectedValueOnce(error);
}
