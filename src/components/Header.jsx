import inputsCharacter from '../data/inputsCharacter'
import InputGroup from './InputGroup'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
      {inputsCharacter.map(input => {
        return <InputGroup key={input.idInput} input={input} />
      })}
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  width: 1200px;
  padding: 20px;
`

export default Header
