'use client';

import styled from 'styled-components';
import SubTitleCTA from '../SubTitleCTA';
import { StyledTable } from '../TableParticipants';
import { useMensages } from '@/hooks/useMensages';
import { ButtonStyled } from '../ButtonStyled';
import { useContext, useEffect } from 'react';
import { StepContext } from '@/context/step';
import { BoxButton } from '../Step3';
import { ModalOpenContext } from '@/context/modal';
import { ParticipantsContext } from '@/context/participants';
import { RangeValueContext } from '@/context/rangeValue';

const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContainerStyled = styled.div`
  width: 80%;
  min-width: 300px;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-vscode);
  z-index: 110;
  border-radius: 30px;
  border: 5px solid var(--color-yellow);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  scroll-margin-block-start: 10px;
  scroll-margin-block-end: -10px;
`;

export default function ModalResp() {
  const { mensages, clearMensages } = useMensages();
  const { setStep } = useContext(StepContext);
  const { setIsOpen } = useContext(ModalOpenContext);
  const participantsContext = useContext(ParticipantsContext);
  const { setMinValue, setMaxValue } = useContext(RangeValueContext);

  if (!participantsContext) {
    throw new Error('ParticipantsContext deve estar dentro de um ParticipantsProvider');
  }

  const { setParticipants, resetarSorteio } = participantsContext;

  useEffect(() => {
    console.log('Mensagens carregadas:', mensages);
  }, [mensages]);

  const handleClose = () => {
    clearMensages();
    setTimeout(() => {
      clearMensages();
      setStep(3);
      setIsOpen(false);
    }, 100);
  };

  const handleFinish = () => {
    clearMensages();
    setTimeout(() => {
      clearMensages();
      setStep(0);
      setIsOpen(false);
      resetarSorteio();
      setParticipants([]);
      setMaxValue(500);
      setMinValue(0);
    }, 100);
  };

  return (
    <>
      <OverlayStyled />
      <ModalContainerStyled>
        <SubTitleCTA text="Resultado dos envios :" />
        <StyledTable>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Mensagem</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {mensages.length > 0 ? (
              mensages.map((m, index) => (
                <tr key={index}>
                  <td>{m.name}</td>
                  <td>{m.mail}</td>
                  <td>{m.mensage}</td>
                  <td>{m.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} style={{ textAlign: 'center', padding: '1rem' }}>
                  Carregando, porfavor aguarde...
                </td>
              </tr>
            )}
          </tbody>
        </StyledTable>
        <BoxButton>
          <ButtonStyled onClick={handleClose}>Voltar</ButtonStyled>
          <ButtonStyled onClick={handleFinish}>Finalizar</ButtonStyled>
        </BoxButton>
      </ModalContainerStyled>
    </>
  );
}
