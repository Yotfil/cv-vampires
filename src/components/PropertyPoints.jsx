import { useState } from 'react'
import styled, { css } from 'styled-components'
import setArrayPoints from '../data/setArrayPoints'

const PropertyPoints = ({ amountPoints = 5, blood = false, borderRadius }) => {
  const setArrayAmountPoints = setArrayPoints(amountPoints)
  const [inputsProperties, setInputsProperties] = useState(setArrayAmountPoints)
  const [confirmedProperty, setConfirmedProperty] = useState(false)

  const checkedPoint = e => {
    let indexItem = inputsProperties.findIndex(property => {
      return e.target.id === property.id
    })
    if (!confirmedProperty) {
      const newArray = inputsProperties.map((property, index) => {
        if (index <= indexItem) {
          return {
            ...property,
            bgColor: blood ? '#2b0000' : '#fba74c',
          }
        }
        return property
      })
      setInputsProperties(newArray)
    }
  }

  const uncheckedPoint = _ => {
    if (!confirmedProperty) {
      const newArray = inputsProperties.map(property => {
        return {
          ...property,
          bgColor: '#808080',
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
            bgColor: blood ? '#2b0000' : '#fba74c',
          }
        }
        return {
          ...property,
          bgColor: '#808080',
        }
      })
      setInputsProperties(newArray)
      setConfirmedProperty(true)
    }
    setConfirmedProperty(true)
  }

  const clearPoints = () => {
    const newArray = inputsProperties.map(property => {
      return {
        ...property,
        bgColor: '#808080',
      }
    })
    setInputsProperties(newArray)
    setConfirmedProperty(false)
  }

  return (
    <ContainerPoints blood={blood}>
      {inputsProperties.map(item => {
        return (
          <SpanPoint
            key={item.id}
            id={item.id}
            onMouseEnter={checkedPoint}
            onMouseLeave={uncheckedPoint}
            onClick={confirmPoint}
            onDoubleClick={clearPoints}
            borderRadius={borderRadius}
            color={item.bgColor}></SpanPoint>
        )
      })}
    </ContainerPoints>
  )
}

const SpanPoint = styled.span`
  border-radius: ${props => props.borderRadius || '50%'};
  background-color: ${props => props.color};
  width: 13px;
  height: 13px;
  margin: 3px;
  display: block;
  cursor: pointer;
`

const ContainerPoints = styled.div`
  ${({ blood }) =>
    blood
      ? css`
          flex-wrap: wrap;
        `
      : css`
          flex-wrap: nowrap;
        `}
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 190px;
`

export default PropertyPoints
