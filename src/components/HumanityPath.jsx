import styled from 'styled-components'
import { humanityPath } from '../data/propertiesList.js'
import PropertyPoints from './PropertyPoints.jsx'

const HumanityPath = () => {
  return (
    <Container>
      <Input type='text' placeholder={humanityPath.placeholder} />
      <PropertyPoints amountPoints={humanityPath.amountPoints} />
      <InputDiv>
        <Label htmlFor='bearing'>{humanityPath.labelBearing}:</Label>
        <Input
          type='text'
          placeholder={humanityPath.placeholderBearing}
          className='small'
        />
        <Span>( _ )</Span>
      </InputDiv>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  font-size: 16px;
  color: #d1d1d1;
  border: none;
  outline: none;
  width: 100%;
  background-color: transparent;
  border-bottom: 1px solid gray;
  padding: 10px 5px;
  margin-bottom: 10px;
  &::placeholder {
    font-size: 12px;
    color: gray;
  }
  &.small {
    font-size: 12px;
    width: auto;
    padding: 5px;
  }
`
const Label = styled.label`
  font-size: 14px;
  color: #d1d1d1;
`

const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  gap: 5px;
  &.withoutLabel {
    margin: 5px 0px;
  }
`

const Span = styled.span`
  font-size: 12px;
  color: #d1d1d1;
`

export default HumanityPath
