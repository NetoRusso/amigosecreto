'use client';

import React from 'react';

import styled from 'styled-components';

const BoxFooter = styled.footer`
  width: 100%;
  height: 250px;
  background-color: var(--color-purple);
  /* position: absolute; */
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  gap: 16px;
  flex-flow: row wrap;
  align-items: flex-end;
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }


  clip-path: polygon(100% 100%, 0% 100% , 0.00% 48.57%, 2.00% 48.44%, 4.00% 48.05%, 6.00% 47.41%, 8.00% 46.54%, 10.00% 45.46%, 12.00% 44.22%, 14.00% 42.85%, 16.00% 41.39%, 18.00% 39.89%, 20.00% 38.39%, 22.00% 36.95%, 24.00% 35.59%, 26.00% 34.37%, 28.00% 33.33%, 30.00% 32.49%, 32.00% 31.88%, 34.00% 31.53%, 36.00% 31.43%, 38.00% 31.60%, 40.00% 32.03%, 42.00% 32.71%, 44.00% 33.61%, 46.00% 34.70%, 48.00% 35.97%, 50.00% 37.35%, 52.00% 38.82%, 54.00% 40.32%, 56.00% 41.82%, 58.00% 43.26%, 60.00% 44.59%, 62.00% 45.79%, 64.00% 46.81%, 66.00% 47.61%, 68.00% 48.18%, 70.00% 48.50%, 72.00% 48.56%, 74.00% 48.35%, 76.00% 47.89%, 78.00% 47.18%, 80.00% 46.25%, 82.00% 45.12%, 84.00% 43.84%, 86.00% 42.44%, 88.00% 40.97%, 90.00% 39.46%, 92.00% 37.97%, 94.00% 36.55%, 96.00% 35.23%, 98.00% 34.05%, 100.00% 33.07%);

  p, span{
    font-family: var(--font-text);
    font-size: clamp(0.875rem, 0.8333rem + 0.1852vw, 1rem);
    color: white;
    margin: 8px 0;
    text-align: center;
  }

  span {
    a {
      text-decoration: none;
      color: white;
      transition: all 0.3s ease-in-out;
      font-weight: 600;
      letter-spacing: 1.5px;

      &:hover { 
        color: var(--color-yellow);
        margin-top: -20px;
        transition: all 0.3s ease-in-out;
      }
    }
  }


`;

const Footer = () => {

  return (
    <BoxFooter>
      <p>Amigo Secreto Online © 2025</p>
      <span>Pensado e Desenvolvido por 
        <a
        href="https://netorusso.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
        >
      🤓 Neto Russo 🔗 </a>
    </span>
    </BoxFooter >
  )
};

export default Footer;