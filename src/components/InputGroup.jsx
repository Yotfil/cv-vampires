import styled from 'styled-components'

const InputGroup = ({ input }) => {
  return (
    <InputDiv>
      <Label htmlFor={input.labelName}>{input.labelName}</Label>
      <Input
        type={input.type}
        name={input.labelName}
        id={input.labelName}
        placeholder={input.placeholder}
      />
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
  font-size: 16px;
  color: #d1d1d1;
`

const Input = styled.input`
  font-size: 16px;
  color: #d1d1d1;
  border: none;
  outline: none;
  width: 100%;
  background-color: transparent;
  border-bottom: 1px solid gray;
  padding: 15px 10px;
  &::placeholder {
    font-size: 12px;
    color: gray;
  }
`

export default InputGroup
