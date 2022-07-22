import styled from 'styled-components'

const InputGroup = ({ input }) => {
  return (
    <InputDiv className={input.labelName ? '' : 'withoutLabel'}>
      {input.labelName ? (
        <>
          <Label htmlFor={input.labelName}>{input.labelName}</Label>
          <Input
            type={input.type}
            name={input.labelName}
            id={input.id}
            placeholder={input.placeholder}
          />
        </>
      ) : (
        <Input
          type={input.type}
          id={input.id}
          placeholder={input.placeholder}
          className={'withoutLabel'}
        />
      )}
    </InputDiv>
  )
}

const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  margin: 10px 0;
  &.withoutLabel {
    margin: 5px 0px;
  }
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
  &.withoutLabel {
    padding: 8px 4px;
  }
`

export default InputGroup
