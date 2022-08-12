import styled from 'styled-components'
import InputCheck from './InputCheck'

const PropertiesBox = ({ columnProperties }) => {
  const propertiesList = columnProperties.properties
  return (
    <Column>
      <TitleColumn>{columnProperties.titleColumn}</TitleColumn>
      {propertiesList.map(property => {
        return <InputCheck key={property.id} propertyItem={property} />
      })}
    </Column>
  )
}

const TitleColumn = styled.h4`
  color: #ffdab8;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
  font-weight: 100;
`

const Column = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`

export default PropertiesBox
