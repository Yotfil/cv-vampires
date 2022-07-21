import inputsCharacter from '../data/inputsInfoCharacter'
import InputGroup from './InputGroup'
import styled from 'styled-components'

const Header = () => {
  return (
    <>
      {inputsCharacter.map(input => {
        return <InputGroup key={input.idInput} input={input} />
      })}
    </>
  )
}



export default Header
