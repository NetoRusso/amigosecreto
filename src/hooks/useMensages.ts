import { useState, useEffect } from "react";

export interface MensageProps {
  name: string;
  mail: string;
  mensage: string;
  status: "enviado" | "falhou";
}

const STORAGE_KEY = "mensages";

export function useMensages() {
  const [mensages, setMensages] = useState<MensageProps[]>([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const carregarMensagens = async () => {
      setIsLoading(true); 

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const storedMensages = localStorage.getItem(STORAGE_KEY);
      if (storedMensages) {
        console.log("Mensagens recuperadas do localStorage:", JSON.parse(storedMensages));
        setMensages(JSON.parse(storedMensages));
      }

      setIsLoading(false);
    };

    carregarMensagens();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mensages));
    }
  }, [mensages, isLoading]);



  function clearMensages() {
    localStorage.removeItem(STORAGE_KEY);
    setMensages([]);
  }

  function addMensage(newMensage: MensageProps) {
    setMensages((prev) => [...prev, newMensage]);
  }

  return { mensages, addMensage, clearMensages, isLoading };
}
