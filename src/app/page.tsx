'use client';
import BoxBodyHome from '@/components/BoxBodyHome';
import HeaderHome from '@/components/HeaderHome';
import Step0 from '@/components/Step0';
import Step1 from '@/components/Step1';
import Step2 from '@/components/Step2';
import Step3 from '@/components/Step3';
import TitleAnimate from '@/components/TitleAnimate';
import { StepContext } from '@/context/step';
import { useContext } from 'react';
import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {

  const { step } = useContext(StepContext);

  return (
    <>
      <HeaderHome>
        <TitleAnimate
          text="Gerador de Amigo Secreto"
        />
      </HeaderHome>
      <MainContainer>
        <BoxBodyHome>
          { step === 0 && (
            <Step0 />
          )}
          { step === 1 && (
            <Step1 />
          )}
          { step === 2 && (
            <Step2 />
          )}
          { step === 3 && (
            <Step3 />
          )}

        </BoxBodyHome >
      </MainContainer>
    </>
  );
}