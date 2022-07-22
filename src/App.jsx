import Container from './components/Container'
import WebFont from 'webfontloader'
import Title from './components/Title'
import styled from 'styled-components'
import Header from './components/Header'
import Attributes from './components/Attributes'
import Abilities from './components/Abilities'
import Advantages from './components/Advantages'
import DownloadButton from './components/DownloadButton'

WebFont.load({
  google: {
    families: ['Signika Negative:300,400,600', 'sans-serif'],
  },
})
function App() {
  return (
    <>
      <Title />
      <DownloadButton />
      <Main>
        <Container>
          <Header />
        </Container>
        <Container subtitle={'Attributes'}>
          <Attributes />
        </Container>
        <Container subtitle={'Abilities'}>
          <Abilities />
        </Container>
        <Container subtitle={'Advantages'}>
          <Advantages />
        </Container>
      </Main>
    </>
  )
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  background-color: #292929;
  box-shadow: 0 0 8px #151515;
  margin-top: 40px;
`
export default App
