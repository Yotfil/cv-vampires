import styled from 'styled-components'

const Container = ({ children }) => {
  return <Main>{children}</Main>
}

const Main = styled.main`
  max-width: 1200px;
  height: 100px;
  background-color: #292929;
  box-shadow: 0 0 8px #151515;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`

export default Container
