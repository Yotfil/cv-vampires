import styled from 'styled-components'
import Property from './Property'

const SectionMeritsAndFlow = ({ otherData }) => {
  return (
    <Section>
      <Div>
        <P>{otherData.subTitles[0]}</P>
        <P>{otherData.subTitles[1]}</P>
      </Div>
      <div>
        {otherData.properties.map(property => {
          return (
            <Property key={property.id} propertyItem={property}></Property>
          )
        })}
      </div>
    </Section>
  )
}

const P = styled.p`
  color: #d1d1d1;
  font-weight: 100;
`
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 0 10px;
`
const Section = styled.section`
  margin-bottom: 40px;
`

export default SectionMeritsAndFlow
