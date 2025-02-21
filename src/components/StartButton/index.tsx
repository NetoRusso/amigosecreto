
import { StepContext } from '@/context/step';
import { useContext } from 'react';
import styled from 'styled-components';

const Start = styled.button`
  width:  clamp(4rem, 3.0769rem + 4.1026vw, 8rem);
  height: clamp(4rem, 3.0769rem + 4.1026vw, 8rem);
  border-radius: 50%;
  background-color: var(--color-velvet);
  color: var(--color-yellow);
  font-size: clamp(0.75rem, 0.5357rem + 1.0714vw, 1.5rem);
  font-family: var(--font-title);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-weight: 600;
  letter-spacing: 2px;
  border: none;

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