import { bloodPool } from '../data/propertiesList.js'
import styled from 'styled-components'
import PropertyPoints from './PropertyPoints.jsx'

const BloodPool = () => {
  return (
    <Container>
      <PropertyPoints
        amountPoints={bloodPool.amountSquarePoints}
        pointType='square'
        blood={bloodPool.blood}
      />
      <InputDiv>
        <Label htmlFor='bearing'>{bloodPool.label}:</Label>
        <Input type='text' placeholder={bloodPool.placeholder} />
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
  font-size: 12px;
  color: #d1d1d1;
  border: none;
  outline: none;
  width: auto;
  background-color: transparent;
  border-bottom: 1px solid gray;
  padding: 5px;
  margin-bottom: 10px;
  &::placeholder {
    font-size: 12px;
    color: gray;
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

export default BloodPool
