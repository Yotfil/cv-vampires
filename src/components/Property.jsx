import styled from 'styled-components'
import InputGroup from './InputGroup'
import PropertyPoints from './PropertyPoints'

const Property = ({ propertyItem }) => {
  return (
    <ContainerProperty>
      {propertyItem.name ? (
        <>
          <PropertyName>{propertyItem.name}</PropertyName>
          <Conector />
        </>
      ) : (
        <InputGroup input={propertyItem} />
      )}
      {!propertyItem.line ? <PropertyPoints /> : <Input type='number' />}
    </ContainerProperty>
  )
}

const Input = styled.input`
  width: 20%;
  font-size: 16px;
  color: #d1d1d1;
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 1px solid gray;
  padding: 8px 4px;
  margin: 5px 0;
  -moz-appearance: textfield;
  &::placeholder {
    font-size: 12px;
    color: gray;
  }
  &.withoutLabel {
    padding: 8px 4px;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

const PropertyName = styled.p`
  font-size: 16px;
  color: #d1d1d1;
`

const ContainerProperty = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 5px;
  width: 90%;
`
const Conector = styled.span`
  border-bottom: 1px solid gray;
  width: 100%;
  margin: 0 5px 5px;
`

export default Property
