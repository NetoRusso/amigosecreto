import { MensageProps } from "@/hooks/useMensages";

interface EmailProps {
  mail: string;
  groupName: string;
  nome: string;
  dataEvento: string;
  minValue: number;
  maxValue: number;
  amigo: string;
  addMensage: (msg: MensageProps) => void;
}


export async function handleSendEmail({
  mail, 
  groupName, 
  nome, 
  dataEvento, 
  minValue, 
  maxValue, 
  amigo,
  addMensage,
}: EmailProps) {
  try {
    const response = await fetch("api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: mail,
        subject: `Seu Amigo Secreto do grupo ${groupName} 🎁`,
        text:  `
                Olá, ${nome}!
                O sorteio do amigo secreto foi realizado! 🎉
                📅 Data: ${dataEvento}
                💰 Valor mínimo: ${minValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                💰 Valor máximo: ${maxValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                🤫 Seu amigo secreto é: ${amigo}
                Boas compras e divirta-se! 🎄
              `,
      }),
    });

    console.log("Resposta da API:", response); 
    let data;
    try {
      data = await response.json();
      console.log("Dados da resposta JSON:", data); 
    } catch (jsonError) {
      console.error("Erro ao parsear JSON:", jsonError);
      throw new Error("Resposta inválida do servidor.");
    }

    if (!response.ok) {
      console.error(`Erro no envio do e-mail para ${mail}:`, data?.error || "Erro desconhecido");
      addMensage({ name: nome, mail, mensage: `Erro ao enviar e-mail: ${data?.error || "Erro desconhecido"}`, status: "falhou" });
      return;
    }

    console.log(`E-mail enviado com sucesso para ${mail}`);
    addMensage({ name: nome, mail, mensage: "E-mail enviado com sucesso!", status: "enviado" });

  } catch (error) {
    console.error(`Erro ao enviar e-mail para ${mail}:`, error);
    addMensage({ name: nome, mail, mensage: "Erro ao enviar e-mail.", status: "falhou" });
  }
}