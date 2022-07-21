import styled from 'styled-components'
import InputCheck from './InputCheck'

const PropertiesBox = ({ columnProperties }) => {
  const propertiesList = columnProperties.properties
  return (
    <div>
      <TitleColumn>{columnProperties.titleColumn}</TitleColumn>
      {propertiesList.map(property => {
        return <InputCheck key={property.id} propertyItem={property} />
      })}
    </div>
  )
}

const TitleColumn = styled.h3`
  color: #ffdab8;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
  font-weight: 100;
`

export default PropertiesBox
