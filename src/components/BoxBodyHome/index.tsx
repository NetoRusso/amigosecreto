
import styled from 'styled-components';

const BoxBody = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2em auto;
  padding: 1em;
`

export default function BoxBodyHome( { children } : { children: React.ReactNode } ) { 

  return (
    <BoxBody>
      { children }
    </BoxBody>
  )
}