import styled from 'styled-components'

const Title = () => {
  return (
    <>
      <MainTitle>
        <Image src='./logoVampire.png' alt='' />
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
const Image = styled.img`
  width: 55%;
  @media (min-width: 768px) {
    width: 35%;
  }
`

export default Title
