import PropertiesBox from './PropertiesBox'
import { advantagesData } from '../data/propertiesList'

const Advantages = () => {
  return (
    <>
      {advantagesData.map(advantage => {
        return <PropertiesBox key={advantage.id} columnProperties={advantage} />
      })}
    </>
  )
}

export default Advantages
