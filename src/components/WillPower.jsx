import styled from 'styled-components'
import { willPower } from '../data/propertiesList.js'
import PropertyPoints from './PropertyPoints'

const WillPower = () => {
  return (
    <Container>
      <PropertyPoints amountPoints={willPower.amountRoundPoints} />
      <PropertyPoints
        amountPoints={willPower.amountSquarePoints}
        pointType='square'
      />
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default WillPower
