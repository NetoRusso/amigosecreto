'use client';
import { ParticipantsContext } from "@/context/participants";
import { useContext } from "react";
import styled from "styled-components";
import Image from "next/image";
import editBtn from "./assets/editar.svg";
import deleteBtn from "./assets/deletar.svg";

const BoxTable = styled.div`
  width: 80%;
  max-width: 900px;
  margin: 2em auto;
  padding: 2em;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 30px rgba(227, 228, 237, 0.37);
  border: 2px solid rgba(255, 255, 255, 0.18);
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: rgba(255, 255, 255, 0.1);
  color: white;

  th, td {
    height: 48px;
    padding: 12px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    text-align: left;
    vertical-align: middle;
    font-family: var(--font-text);
  }

  thead {
    background-color: var(--color-velvet);
    font-family: var(--font-text);
    font-weight: 600;
    color: white;
  }

  tbody tr {
    &:nth-child(even) {
      background-color: rgba(255, 255, 255, 0.15);
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }

  td.actions {
    display: flex;
    justify-content: space-around;
    gap: 12px;
  }

  img {
    cursor: pointer;
    transition: transform 200ms ease-in-out;
    align-self: center;
    cursor: pointer;

    &:hover {
      transform: scale(0.9);
    }
  }
`;

export default function TableParticipants() {
  const participantsContext = useContext(ParticipantsContext);

  if (!participantsContext) {
    throw new Error("ParticipantsContext not found, o contexto não foi carregado corretamente dentro do Provider");
  }

  const { participants, deleteParticipant, setEditingParticipant } = participantsContext;

  const existParticipant = (participants.length > 0);

  return (
    existParticipant && 
      (
      <BoxTable>
        <StyledTable>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>E-mail</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>

            {participants.map((participant, index) => (
              <tr key={index}>
                <td>{participant.name}</td>
                <td>{participant.phone}</td>
                <td>{participant.mail}</td>
                <td className="actions">
                  <Image
                    src={editBtn}
                    alt="editar"
                    width={32}
                    height={32}
                    onClick={() => setEditingParticipant(participant)}
                  />
                  <Image src={deleteBtn}
                    alt="deletar"
                    width={32}
                    height={32}
                    onClick={() => deleteParticipant(index)}
                  />
                </td>
              </tr>
            ))}

          </tbody>
        </StyledTable>
      </BoxTable>
    )
  )
};
