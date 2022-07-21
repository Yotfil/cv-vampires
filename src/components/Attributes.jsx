import PropertiesBox from './PropertiesBox'
import { attributesData } from '../data/propertiesList'

const Attributes = () => {
  return (
    <>
      {attributesData.map(attribute => {
        return <PropertiesBox key={attribute.id} columnProperties={attribute} />
      })}
    </>
  )
}

export default Attributes
