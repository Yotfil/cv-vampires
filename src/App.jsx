import Container from './components/Container'
import WebFont from 'webfontloader'
import Title from './components/Title'
import styled from 'styled-components'
import Header from './components/Header'
import Attributes from './components/Attributes'
import html2pdf from 'html2pdf.js'

WebFont.load({
  google: {
    families: ['Signika Negative:300,400,600', 'sans-serif'],
  },
})
function App() {
  const download = () => {
    const $elementoParaConvertir = document.body // <-- Aquí puedes elegir cualquier elemento del DOM
    html2pdf()
      .set({
        margin: 1,
        filename: 'documento.pdf',
        image: {
          type: 'jpeg',
          quality: 0.98,
        },
        html2canvas: {
          scale: 3, // A mayor escala, mejores gráficos, pero más peso
          letterRendering: true,
        },
        jsPDF: {
          unit: 'in',
          format: 'a2',
          orientation: 'portrait', // landscape o portrait
        },
      })
      .from($elementoParaConvertir)
      .save()
      .catch(err => console.log(err))
  }
  return (
    <>
      <Title />
      <button onClick={download}>Download</button>
      <Main>
        <Container>
          <Header />
        </Container>
        <Container subtitle={'Attributes'}>
          <Attributes />
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
