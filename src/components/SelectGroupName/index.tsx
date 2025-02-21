'use client';
import { GroupContext } from '@/context/group';
import { StepContext } from '@/context/step';
import { DetailedHTMLProps, FormEvent, FormHTMLAttributes, useContext } from 'react';
import styled from 'styled-components';

const FormGroupName = styled.form<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, HTMLFormElement>`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  gap: 1rem;
  margin-top: 2em;
  padding: 1em;
  font-family: var(--font-text);
  font-size: 1.2rem;

    input {
      width: 280px;
      height: 30px;
      padding: 2px 5px;
      border-radius: 10px;
      font-family: var(--font-text);
      font-weight: 500;
      outline: none;
      border: 5px solid var(--color-velvet);
      box-shadow: -5px -5px var(--color-velvet);

      &::placeholder { 
        color: var(--color-black);
        font-family: var(--font-text);
        font-weight: 500;
      }

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
      font-family: var(--font-text);
      font-weight: 800;
      letter-spacing: 1.2px;
      cursor: pointer;

      &:hover { 
        scale: 0.9;
        background-color: var(--color-purple);
        color: var(--color-yellow);
        transition: all 200ms ease-in-out;
      }
      
    }
`;


export default function SelectGroupName( ) {
  
  const { setGroupName } = useContext(GroupContext);
  const { setStep } = useContext(StepContext);

  return (
    <>
      <FormGroupName
        onSubmit={(e : FormEvent<HTMLFormElement>) => { 
          e.preventDefault();
          setGroupName((e.currentTarget.elements[0] as HTMLInputElement).value);
          setStep(2);
        }}
      >
        <label htmlFor="groupName" />
        <input
          type="text"
          id="groupName"
          placeholder="Digite o nome do seu grupo"
          required
        />

        <button type="submit"
        >
          Confirmar
        </button>
      </FormGroupName>
    </>
  )
};