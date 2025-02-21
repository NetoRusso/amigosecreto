'use client';
import { GroupContext } from '@/context/group';
import { ParticipantsContext } from '@/context/participants';
import { maskPhone } from '@/util/mascaras';
import { DetailedHTMLProps, FormEvent, FormHTMLAttributes, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';


const FormParticipantsAdd = styled.form<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, HTMLFormElement>`
  width: 100%;
  height: auto;
  display: flex;
  gap: 1rem;
  margin: 4rem 0;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  input {
      width: 280px;
      height: 30px;
      padding: 2px;
      border-radius: 10px;
      outline: none;
      border: 5px solid var(--color-velvet);
      box-shadow: -5px -5px var(--color-velvet);

      &:focus { 
        border: 3px solid var(--color-purple);
        box-shadow: -3px -3px var(--color-purple);
      }
    }

    button {
      width: 120px;
      height: 40px;
      border-radius: 10px;
      border: none;
      background-color: var(--color-yellow);
      color: var(--color-purple);
      outline: none;
      font-family: var(--font-text);
      font-weight: 800;
      letter-spacing: 2px;
      cursor: pointer;

      &:hover { 
        scale: 0.9;
        background-color: var(--color-purple);
        color: var(--color-yellow);
        transition: all 200ms ease-in-out;
      }
    }
`


export default function FormParticipants( ) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");

  const { groupName } = useContext(GroupContext);  
  const participantsContext = useContext(ParticipantsContext);
  
  if(!participantsContext) {
    throw new Error("ParticipantsContext not found, o contexto não foi carregado corretamente dentro do Provider");
  }

  const { addParticipant, editingParticipant, setEditingParticipant } = participantsContext;

  useEffect(() => {
    if (editingParticipant) {
      setName(editingParticipant.name);
      setPhone(editingParticipant.phone);
      setMail(editingParticipant.mail);
    }
  }, [editingParticipant]);
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addParticipant({ name, phone, mail, group: groupName });

    setName("");
    setPhone("");
    setMail("");
    setEditingParticipant(null);
    (e.currentTarget.elements[0] as HTMLInputElement).focus();
  };

  return (
    <FormParticipantsAdd onSubmit={handleSubmit}>
      <label htmlFor="name" />
      <input
        type="text"
        id="name"
        placeholder="Digite o nome do participante"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="phone" />
      <input
        type="text"
        id="phone"
        placeholder="Digite o telefone do participante"
        value={phone}
        max={15}
        min={11}
        onChange={(e) => {
          setPhone(maskPhone((e.target.value)));
        }}
        required
      />

      <label htmlFor="mail" />
      <input
        type="text"
        id="mail"
        placeholder="Digite o e-mail do participante"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        required
      />

      <button type="submit">
        {editingParticipant ? "Atualizar" : "Adicionar"}
      </button>
    </FormParticipantsAdd>
  )
}