
import styled from 'styled-components';


interface HeaderHomeProps {
  children: React.ReactNode; 
}

const Header = styled.div`
      width: 90%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 2em auto;
      padding: 1em;  
`


export default function HeaderHome({ children }: HeaderHomeProps) {
  return (
    <Header >
      {children}
    </Header>

  )
}