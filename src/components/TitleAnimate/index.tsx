'use client';

import React from 'react';
import styled from 'styled-components';

const Char = styled.span`
  display: inline-flex;
  font-size: clamp(2rem, 1.5385rem + 2.0513vw, 4rem);
  font-family: var(--font-title);
  line-height: 1.2;
  user-select: none;
  font-weight: 300;
  cursor: crosshair;
  color: var(--color-yellow);

  .letter { 
    display: inline-flex;
    transition: all 0.3s ease-in-out;
    animation: up 1.5s backwards alternate ease-in-out;

    &:hover { 
      font-weight: 900;
      animation-play-state: paused;
      color: var(--color-orange);
    }

    &:hover + .letter {
      font-weight: 600;
      color: var(--color-velvet);
    }

    &:hover + .letter + .letter {
      font-weight: 400;
    }

    &:has(+ .letter:hover) {
      font-weight: 600;
      color: var(--color-velvet);
    }

    &:has(+ .letter:hover + .letter) {
      font-weight: 400;
    }
  }

  @keyframes up {
    0% {
      transform: translateY(-0.2em);
    }
    100% {
      transform: translateY(0.2em);
    }
  }

  .space { 
    display: inline-block;
    width: 0.4em;
  }
`;

export default function TitleAnimate({ text }: { text: string }) {
  return (
    <Char>
      {text.split("").map((char, index) =>
        char === " " ? (
          <span key={index} className='space'>&nbsp;</span>
        ) : (
          <span 
            className='letter' 
            key={index} 
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {char}
          </span>
        )
      )}
    </Char>
  );
}
