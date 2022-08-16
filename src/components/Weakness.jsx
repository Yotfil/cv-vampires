import styled from 'styled-components'
import { weakness } from '../data/propertiesList'

const Weakness = () => {
  return (
    <Container>
      <Input type='text' placeholder={weakness.placeholder} />
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
`

export default Weakness
