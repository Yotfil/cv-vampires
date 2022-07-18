import styled from 'styled-components'

const InputGroup = ({ input }) => {
  return (
    <InputDiv>
      <Label htmlFor={input.labelName}>{input.labelName}</Label>
      <Input type={input.type} name={input.labelName} id={input.labelName} />
    </InputDiv>
  )
}

const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  margin: 10px 0;
`

const Label = styled.label`
  font-size: 12px;
  color: #d1d1d1;
`

const Input = styled.input`
  font-size: 12px;
  color: #d1d1d1;
  &::placeholder {
    font-size: 12px;
    color: gray;
  }
`

export default InputGroup
