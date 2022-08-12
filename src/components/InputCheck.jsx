import { useState } from 'react'
import styled from 'styled-components'
import rawInputsProperties from '../data/rawInputsProperties'
import InputGroup from './InputGroup'

const InputCheck = ({ propertyItem }) => {
  const [inputsProperties, setInputsProperties] = useState(rawInputsProperties)
  const [confirmedProperty, setconfirmedProperty] = useState(false)

  const checkedPoint = e => {
    let indexItem = inputsProperties.findIndex(property => {
      return e.target.id === property.id
    })
    if (!confirmedProperty) {
      const newArray = inputsProperties.map((property, index) => {
        if (index <= indexItem) {
          return {
            ...property,
            bgColor: 'active',
          }
        } else {
          return property
        }
      })
      setInputsProperties(newArray)
    }
  }

  const uncheckedPoint = _ => {
    if (!confirmedProperty) {
      const newArray = inputsProperties.map(property => {
        return {
          ...property,
          bgColor: 'inactive',
        }
      })
      setInputsProperties(newArray)
    }
  }

  const confirmPoint = e => {
    if (confirmedProperty) {
      let indexItem = inputsProperties.findIndex(property => {
        return e.target.id === property.id
      })
      const newArray = inputsProperties.map((property, index) => {
        if (index <= indexItem) {
          return {
            ...property,
            bgColor: 'active',
          }
        } else {
          return {
            ...property,
            bgColor: 'inactive',
          }
        }
      })
      setInputsProperties(newArray)
      setconfirmedProperty(true)
    } else {
      setconfirmedProperty(true)
    }
  }

  const clearPoints = () => {
    const newArray = inputsProperties.map((property, index) => {
      return {
        ...property,
        bgColor: 'inactive',
      }
    })
    setInputsProperties(newArray)
  }

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
      {!propertyItem.line ? (
        <ContainerPoints>
          {inputsProperties.map(item => {
            return (
              <SpanPoint
                key={item.id}
                id={item.id}
                onMouseEnter={checkedPoint}
                onMouseLeave={uncheckedPoint}
                onClick={confirmPoint}
                onDoubleClick={clearPoints}
                className={item.bgColor}></SpanPoint>
            )
          })}
        </ContainerPoints>
      ) : (
        <Input type='number' />
      )}
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

const SpanPoint = styled.div.attrs(props => ({ className: props.className }))`
  border-radius: 50%;
  background-color: gray;
  width: 13px;
  height: 13px;
  margin: 3px;
  &.active {
    background-color: #fba74c;
  }
  &.inactive {
    background-color: #808080;
  }
`
const ContainerPoints = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const PropertyName = styled.div`
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

export default InputCheck
