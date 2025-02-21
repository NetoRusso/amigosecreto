import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { setCors } from "@/app/api/cors";
import { isValidDomain } from "@/util/validDomain";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200, ...setCors() });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.to || !data.subject || !data.text) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    const isDomainValid = await isValidDomain(data.to);
    if (!isDomainValid) {
      return NextResponse.json(
        { error: "O domínio do e-mail não é válido." },
        { status: 400 }
      );
    }

    const resp = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.to,
      subject: data.subject,
      text: data.text,
    });

    console.log("Resposta do Nodemailer:", resp);

    if (resp.rejected.length > 0) {
      console.error("E-mail rejeitado:", resp.rejected);
      return NextResponse.json(
        { error: "Erro ao enviar o e-mail.", details: resp.rejected },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "E-mail enviado com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json(
      { error: "Erro ao enviar os e-mails.", details: error },
      { status: 500 }
    );
  }
}
