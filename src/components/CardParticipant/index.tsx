'use client';

import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 500ms ease-in-out;
`;

const CardContainer = styled.div<{ $open: boolean }>`
  position: relative;
  width: 120px;
  height: ${({ $open }) => ($open ? '128px' : '64px')};
  /* background-color: ${({ $open }) => ($open ? '#fff' : '#fff')}; */
  background-color: #B83B5E;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1rem;
  transition: 
    background 400ms ease-in-out,
    height 400ms ease-in-out,
    transform 400ms ease-in-out;
  cursor: pointer;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
  transform: ${({ $open }) => ($open ? 'none' : 'rotate(-12deg) skewX(0) translate(0, 0)')};

  &:hover {
    transform: ${({ $open }) => ($open ? 'none' : 'rotate(0deg) skewX(1deg) translate(6px, 12px)')};
  }

  &::before {
    content: "";
    position: absolute;
    right: 0.45rem;
    top: 0;
    width: 120px;
    height: ${({ $open }) => ($open ? '0' : '60px')};
    background-color: #fff;
    border-radius: 1rem;
    transform: ${({ $open }) => ($open ? 'rotate(-90deg)' : 'skewX(-12deg)')};
    z-index: -3;
    opacity: ${({ $open }) => ($open ? '0' : '1')};
    transition: opacity 300ms ease-in-out, background 300ms ease-in-out;
  }
`;

const TextCard = styled.span<{ $visible: boolean }>`
  font-family: var(--font-text);
  color: var(--color-vscode);
  font-size: 16px;
  font-weight: 500;
  vertical-align: middle;
  text-align: center;
  opacity: ${({ $visible }) => ($visible ? '1' : '0')}; 
  transition: opacity 300ms ease-in-out;
  margin-top: -10px;
`;

const SecondText = styled.span<{ $visible: boolean }>`
  font-family: var(--font-text);
  color: var(--color-yellow);
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  opacity: ${({ $visible }) => ($visible ? '1' : '0')}; 
  transition: opacity 300ms ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: -60px;
`;

interface CardParticipantProps { 
  name: string;
  friend: string;
}

export default function CardParticipant({ name, friend } : CardParticipantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <CardWrapper>
      <CardContainer ref={cardRef} $open={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <TextCard $visible={!isOpen}>{name}</TextCard>
        <SecondText $visible={isOpen}>{friend}<span>🤫</span></SecondText>
      </CardContainer>
    </CardWrapper>
  );
}