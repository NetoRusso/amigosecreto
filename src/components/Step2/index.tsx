import { useContext } from "react";
import FormParticipants from "../FormParticipants";
import SubTitleCTA from "../SubTitleCTA";
import { GroupContext } from "@/context/group";
import TableParticipants from "../TableParticipants";
import { ParticipantsContext } from "@/context/participants";
import { StepContext } from "@/context/step";
import styled from "styled-components";
import { ButtonStyled } from "../ButtonStyled";


const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;


export default function Step2() {

  const { groupName } = useContext(GroupContext);
  const { setStep } = useContext(StepContext);
  const participantsContext = useContext(ParticipantsContext);

  if (!participantsContext) {
    throw new Error("ParticipantsContext deve estar dentro de um ParticipantsProvider");
  }

  const { participants, amigoSecreto, sortearAmigoSecreto } = participantsContext;
  
  return (
    <>
      <SubTitleCTA text={`Bem vindo ao seu grupo ${groupName}`} />
      <FormParticipants />
      <TableParticipants />
      <ButtonGroup>
        <ButtonStyled
          onClick={() => {
            setStep(1);
          }}
        >
          voltar
        </ButtonStyled>
        <ButtonStyled
          disabled={(participants.length <= 1 || amigoSecreto.length !== 0) ? true : false}
          onClick={() => {
            sortearAmigoSecreto()
            setStep(3);
          }}
        >
          Sortear
        </ButtonStyled>
      </ButtonGroup>
    </>
  )
};