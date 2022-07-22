import Container from './components/Container'
import WebFont from 'webfontloader'
import Title from './components/Title'
import styled from 'styled-components'
import Header from './components/Header'
import Attributes from './components/Attributes'
import Abilities from './components/Abilities'
import Advantages from './components/Advantages'
import DownloadButton from './components/DownloadButton'
import { Helmet } from 'react-helmet'
import favicon from './images/favicon.png'

WebFont.load({
  google: {
    families: ['Signika Negative:300,400,600', 'sans-serif'],
  },
})
function App() {
  return (
    <>
      <Helmet>
        <link rel='shortcut icon' href={favicon} type='image/x-icon' />
        <title>Vampires Masquerade</title>
      </Helmet>
      <Title />
      <Main>
        <DownloadButton />
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
  position: relative;
`
export default App
