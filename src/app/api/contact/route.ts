import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { CONTACT_INFO } from "@/lib/config/contact";

// Lazy initialization - only instantiate Resend when needed (runtime, not build time)
function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY não configurada. Configure a variável de ambiente para enviar emails.",
    );
  }
  return new Resend(apiKey);
}

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Get Resend client (lazy initialization)
    const resend = getResendClient();

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || CONTACT_INFO.email.contact,
      to: process.env.CONTACT_EMAIL || CONTACT_INFO.email.contact,
      replyTo: validatedData.email,
      subject: `Novo contato de ${validatedData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #9155EB 0%, #4275F9 100%);
                color: white;
                padding: 30px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
              }
              .field-label {
                font-weight: bold;
                color: #9155EB;
                margin-bottom: 5px;
              }
              .field-value {
                background: white;
                padding: 12px;
                border-radius: 4px;
                border-left: 3px solid #9155EB;
              }
              .footer {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #ddd;
                font-size: 12px;
                color: #666;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>✉️ Nova Mensagem de Contato</h1>
              <p>TecnoJr - Website</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">👤 Nome:</div>
                <div class="field-value">${validatedData.name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">📧 Email:</div>
                <div class="field-value">${validatedData.email}</div>
              </div>
              
              ${
                validatedData.phone
                  ? `
              <div class="field">
                <div class="field-label">📱 Telefone:</div>
                <div class="field-value">${validatedData.phone}</div>
              </div>
              `
                  : ""
              }
              
              <div class="field">
                <div class="field-label">💬 Mensagem:</div>
                <div class="field-value">${validatedData.message.replace(/\n/g, "<br>")}</div>
              </div>
              
              <div class="footer">
                <p>Esta mensagem foi enviada através do formulário de contato do site TecnoJr.</p>
                <p>Data: ${new Date().toLocaleString("pt-BR", { timeZone: "America/Bahia" })}</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Falha ao enviar email. Tente novamente mais tarde." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        id: data?.id,
      },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: "Dados inválidos",
          details: error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        },
        { status: 400 },
      );
    }

    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor. Tente novamente mais tarde." },
      { status: 500 },
    );
  }
}

// Optional: Handle OPTIONS for CORS if needed
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    },
  );
}
