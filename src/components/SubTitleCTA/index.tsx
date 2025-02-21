
import styled from 'styled-components';

const SubTitle = styled.h2`
  font-size: clamp(0.875rem, 0.75rem + 0.625vw, 1.5rem);
  font-family: var(--font-text);
  color: var(--color-yellow);
  text-align: center;
  margin-top: 1em;
  margin-bottom: 1em;
  transition: all 0.3s ease-in-out;
  font-weight: 600;
`;

export default function SubTitleCTA({ text }: { text: string }) { 

  return (
    <SubTitle>
      {text}
    </SubTitle>
  )
}