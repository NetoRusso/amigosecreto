
import { StepContext } from '@/context/step';
import { useContext } from 'react';
import styled from 'styled-components';

const Start = styled.button`
  width: clamp(8rem, 5.3333rem + 11.8519vw, 16rem);
  height: clamp(8rem, 5.3333rem + 11.8519vw, 16rem);
  border-radius: 50%;
  background-color: var(--color-velvet);
  color: var(--color-yellow);
  font-size: clamp(1.5rem, 0.6667rem + 3.7037vw, 4rem);
  font-family: var(--font-title);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-weight: 600;
  letter-spacing: 2px;
  border: none;
  margin-top: clamp(4rem, 4.8333rem + -3.7037vw, 1.5rem);

  &:hover { 
    background-color: var(--color-purple);
    scale: 0.9;
    transition: all 0.3s ease-in-out;

  }
`

interface StartButtonProps {
  children: React.ReactNode;
}

export default function StartButton({ children }: StartButtonProps) {

  const { setStep } = useContext(StepContext);

  return (
    <Start
      onClick={() => setStep(1)}
    >
      {children}
    </Start>
  )
}