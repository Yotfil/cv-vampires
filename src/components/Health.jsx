import { useState } from 'react'
import { healthStates } from '../data/propertiesList'
import HealthState from './HealthState'

const Health = () => {
  const [itemsHealthState, setItemsHealthState] = useState(healthStates)

  return (
    <>
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
    </>
  )
}

export default Health
