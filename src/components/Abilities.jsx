import PropertiesBox from './PropertiesBox'
import { abilitiesData } from '../data/propertiesList'

const Abilities = () => {
  return (
    <>
      {abilitiesData.map(ability => {
        return <PropertiesBox key={ability.id} columnProperties={ability} />
      })}
    </>
  )
}

export default Abilities;