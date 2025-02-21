
export async function isValidDomain(email: string): Promise<boolean> {

  // const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

  try {
    const response = await fetch(`/api/validateDomain`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    return data.valid;
  } catch (error) {
    console.error("Erro ao validar domínio:", error);
    return false;
  }
}






