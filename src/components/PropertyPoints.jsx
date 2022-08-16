import { useState } from 'react'
import styled from 'styled-components'
import setArrayPoints from '../data/setArrayPoints'

const PropertyPoints = ({
  amountPoints = 5,
  pointType = '',
  blood = false,
}) => {
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
            bgColor: blood ? 'blood' : 'active',
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
            bgColor: blood ? 'blood' : 'active',
          }
        }
        return {
          ...property,
          bgColor: 'inactive',
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
        bgColor: 'inactive',
      }
    })
    setInputsProperties(newArray)
    setConfirmedProperty(false)
  }

  return (
    <ContainerPoints className={`${pointType}`}>
      {inputsProperties.map(item => {
        return (
          <SpanPoint
            key={item.id}
            id={item.id}
            onMouseEnter={checkedPoint}
            onMouseLeave={uncheckedPoint}
            onClick={confirmPoint}
            onDoubleClick={clearPoints}
            className={`${item.bgColor} ${pointType}`}></SpanPoint>
        )
      })}
    </ContainerPoints>
  )
}

const SpanPoint = styled.span.attrs(props => ({ className: props.className }))`
  border-radius: 50%;
  background-color: gray;
  width: 13px;
  height: 13px;
  margin: 3px;
  display: block;
  cursor: pointer;
  &.active {
    background-color: #fba74c;
  }
  &.blood {
    background-color: #2b0000;
  }
  &.inactive {
    background-color: #808080;
  }
  &.square {
    border-radius: unset;
  }
`

const ContainerPoints = styled.div.attrs(props => ({
  className: props.className,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  &.square {
    max-width: 190px;
    flex-wrap: wrap;
  }
`

export default PropertyPoints
