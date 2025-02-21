import { useContext } from "react";
import { ButtonStyled } from "../ButtonStyled";
import SelectGroupName from "../SelectGroupName";
import SubTitleCTA from "../SubTitleCTA";
import { StepContext } from "@/context/step";


export default function Step1() {

  const { setStep } = useContext(StepContext);

  return (
    <>
      <SubTitleCTA text={`Digite o nome do seu grupo`} />
      <SelectGroupName />
      <ButtonStyled 
        onClick={() => {
          setStep(0);
        }}
      >
        voltar
      </ButtonStyled>
    </>
  )
}