'use client';

import { GroupContext } from "@/context/group";
import { useContext, useState } from "react";
import SubTitleCTA from "../SubTitleCTA";
import RangeSlide from "../RangeSlide";
import styled from "styled-components";
import CardParticipant from "../CardParticipant";
import { ParticipantsContext } from "@/context/participants";
import { StepContext } from "@/context/step";
import DatePickerComponent from "../DatePickerComponent";
import { RangeValueContext } from "@/context/rangeValue";
import { useDate } from "@/context/date";
import { handleSendEmail } from "@/util/handleSendEmail";
import { formatDate } from "@/util/formataData";
import { ButtonStyled } from "../ButtonStyled";
import { useMensages } from "@/hooks/useMensages";
import ModalResp from "../ModalResp";
import { ModalOpenContext } from "@/context/modal";


const BoxCards = styled.div`
  width: 80%;
  min-width: 300px;
  margin: 2em auto;
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`
const BoxCardsMold = styled.div`
  width: 160px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxButton = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2em auto;
`;

const TextStyled = styled.h3`
  
    font-family: var(--font-text);
    font-size: clamp(1rem, 0.8571rem + 0.7143vw, 1.5rem);
    color: white;
  
`


export default function Step3() {
  const [show, setShow] = useState(false);
  const { groupName, setGroupName } = useContext(GroupContext);
  const { setStep } = useContext(StepContext);
  const { minValue, setMinValue, maxValue, setMaxValue } = useContext(RangeValueContext);
  const selectDate = useDate();
  
  const day = selectDate.selectDate?.getDate();
  const month = selectDate.selectDate?.getMonth();
  const year = selectDate.selectDate?.getFullYear();
  const { setIsOpen, isOpen } = useContext(ModalOpenContext);

  const participantsContext = useContext(ParticipantsContext);
  if (!participantsContext) {
    throw new Error("ParticipantsContext deve estar dentro de um ParticipantsProvider");
  }
  const {  setParticipants, amigoSecreto, resetarSorteio } = participantsContext;
  const { addMensage, clearMensages } = useMensages();
  const [ isSending, setIsSending ] = useState(false);
  return (
    <>
      {
        isOpen && <ModalResp />
      }
      <SubTitleCTA text={`Aqui está o Amigo Secreto para o grupo ${groupName}`} />
      <TextStyled>Qual a data da troca dos presentes?</TextStyled>
      <DatePickerComponent />
      <RangeSlide />
      <SubTitleCTA text={`Amigos já foram sorteados!`} />
      {show && (
        <BoxCards>
          {amigoSecreto.map((participante, index) => (
            <BoxCardsMold key={index}>
              <CardParticipant
                name={participante.nome}
                friend={participante.amigo}
              />
            </BoxCardsMold>
          ))}
        </BoxCards>
      )}
      <BoxButton>
        <ButtonStyled 
          onClick={() => { 
            resetarSorteio();
            setStep(0);
            setParticipants([]);
            setGroupName("");
            setMinValue(0);
            setMaxValue(500);
          }}
        >
          Recomeçar
        </ButtonStyled>
        <ButtonStyled
          onClick={() => {
            setStep(2);
            resetarSorteio();
          }}
        >
          Voltar
        </ButtonStyled>
        <ButtonStyled
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "Esconder" : "exibir"}
        </ButtonStyled>
        <ButtonStyled
          disabled={isSending}
          onClick={() => {
            setIsSending(true);
            clearMensages();
            {amigoSecreto.forEach((p) => {
              if(!p.mail){
                return alert("Por favor, preencha o e-mail do participante.");
              } else{
                handleSendEmail({
                  mail: p.mail,
                  groupName,
                  nome: p.nome,
                  dataEvento: formatDate({ day, month, year }),
                  minValue,
                  maxValue,
                  amigo: p.amigo,
                  addMensage
                });
              }
            })}
            setTimeout(() => {
              setIsOpen(true);
              setIsSending(false);
            }, 5000);
          }}
        >
          {isSending ? "Enviando..." : "Enviar"}
        </ButtonStyled>
      </BoxButton>
    </>
  )
};