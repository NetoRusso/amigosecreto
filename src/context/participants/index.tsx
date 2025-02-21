'use client';
import { ParticipantsProps } from "@/types/tipos";
import { createContext, useState } from "react";

interface ParticipantsContextType {
  participants: ParticipantsProps[];
  addParticipant: (participant: ParticipantsProps) => void;
  editParticipant: (index: number, updatedParticipant: ParticipantsProps) => void;
  deleteParticipant: (index: number) => void;
  setParticipants: React.Dispatch<React.SetStateAction<ParticipantsProps[]>>;
  editingParticipant: ParticipantsProps | null;
  setEditingParticipant: React.Dispatch<React.SetStateAction<ParticipantsProps | null>>;
  amigoSecreto: { nome: string; mail?: string, amigo: string }[];
  sortearAmigoSecreto: () => void;
  resetarSorteio: () => void;
}

const ParticipantsContext = createContext<ParticipantsContextType | undefined>(undefined);

const ParticipantsProvider = ({ children }: { children: React.ReactNode }) => {
  const [participants, setParticipants] = useState<ParticipantsProps[]>([]);
  const [editingParticipant, setEditingParticipant] = useState<ParticipantsProps | null>(null);
  const [amigoSecreto, setAmigoSecreto] = useState<{ nome: string; amigo: string }[]>([]);

  const addParticipant = (participant: ParticipantsProps) => {
    if (editingParticipant) {
      setParticipants((prev) => prev.map((p) => (p.name === editingParticipant.name ? participant : p)));
    } else {
      setParticipants((prev) => [...prev, participant]);
    }
  };

  const editParticipant = (index: number, updatedParticipant: ParticipantsProps) => {
    setParticipants((prev) =>
      prev.map((p, i) => (i === index ? updatedParticipant : p))
    );
  };

  const deleteParticipant = (index: number) => {
    setParticipants((prev) => prev.filter((_, i) => i !== index));
  };

  function embaralharArray<T>(array: T[]): T[] {
    return array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  function formatarNome(nome: string): string {
    return nome.split(" ").slice(0, 2).join(" "); 
  }

  const sortearAmigoSecreto = () => {
    if (participants.length < 2) {
      console.error("É necessário pelo menos 2 participantes para o sorteio.");
      return;
    }

    let sorteados: ParticipantsProps[];
    let tentativa = 0;
    const maxTentativas = 100; 

    do {
      sorteados = embaralharArray(participants);
      tentativa++;
      console.log("tentativa",tentativa);
    } while (sorteados.some((p, i) => p.name === participants[i].name) && tentativa < maxTentativas);

    if (tentativa === maxTentativas) {
      console.error("Não foi possível gerar um sorteio válido após várias tentativas.");
      return;
    }

    const resultado = participants.map((participante, i) => ({
      nome: formatarNome(participante.name),
      mail: participante.mail,
      amigo: formatarNome(sorteados[i].name) 
    }));

    setAmigoSecreto(resultado);
  };

  const resetarSorteio = () => {
    setAmigoSecreto([]);
  };

  return (
    <ParticipantsContext.Provider
      value={{
        participants,
        addParticipant,
        editParticipant,
        deleteParticipant,
        setParticipants,
        editingParticipant,
        setEditingParticipant,
        amigoSecreto,
        sortearAmigoSecreto,
        resetarSorteio,
      }}
    >
      {children}
    </ParticipantsContext.Provider>
  );
};

export { ParticipantsContext, ParticipantsProvider };
