'use client';
import BoxBodyHome from '@/components/BoxBodyHome';
import Footer from '@/components/Footer';
import HeaderHome from '@/components/HeaderHome';
import Step0 from '@/components/Step0';
import Step1 from '@/components/Step1';
import Step2 from '@/components/Step2';
import Step3 from '@/components/Step3';
import TitleAnimate from '@/components/TitleAnimate';
import { StepContext } from '@/context/step';
import { useContext, useEffect } from 'react';
import styled from "styled-components";
import { useMensages } from "@/hooks/useMensages";

const MainContainer = styled.main`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: auto;
  min-height: 70vh;
  /* padding-bottom: 250px; */
`;

export default function Home() {

  const { step } = useContext(StepContext);
  const { clearMensages } = useMensages();

  useEffect(() => {
    clearMensages();
  }, []);

  return (
    <>
      <HeaderHome>
        <TitleAnimate
          text="Gerador de Amigo Secreto"
        />
      </HeaderHome>
      <MainContainer>
        <BoxBodyHome>
          {step === 0 && (
            <Step0 />
          )}
          {step === 1 && (
            <Step1 />
          )}
          {step === 2 && (
            <Step2 />
          )}
          {step === 3 && (
            <Step3 />
          )}

        </BoxBodyHome >
      </MainContainer>
        <Footer />
    </>
  );
}