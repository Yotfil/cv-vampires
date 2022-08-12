import html2pdf from 'html2pdf.js'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'

const DownloadButton = () => {
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
    <ButtonDownload onClick={download}>
      <FontAwesomeIcon icon={faFileArrowDown} />
      <Span>Download</Span>
    </ButtonDownload>
  )
}

const ButtonDownload = styled.button`
  position: absolute;
  top: -60px;
  right: 20px;
  font-size: 30px;
  border: none;
  background-color: transparent;
  color: #1c1c1c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const Span = styled.span`
  font-size: 12px;
  font-weight: 700;
`

export default DownloadButton
