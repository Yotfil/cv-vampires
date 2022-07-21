import styled from 'styled-components'

const Title = () => {
  return (
    <>
      <MainTitle>
        Vampires
        <Subtitle>The Masquerade</Subtitle>
      </MainTitle>
    </>
  )
}

const MainTitle = styled.h1`
  color: #f1f1f1;
  font-size: 54px;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Subtitle = styled.span`
  margin-top: 10px;
  color: #f1f1f1;
  font-size: 24px;
  font-weight: 100;
  text-align: center;
`

export default Title
