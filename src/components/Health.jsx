import { useState } from 'react'
import styled from 'styled-components'
import { healthStates } from '../data/propertiesList'
import HealthState from './HealthState'

const Health = () => {
  const [itemsHealthState, setItemsHealthState] = useState(healthStates)

  return (
    <Container>
      {itemsHealthState.map(state => {
        return (
          <HealthState
            key={state.id}
            state={state}
            itemsHealthState={itemsHealthState}
            setItemsHealthState={setItemsHealthState}
          />
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default Health
