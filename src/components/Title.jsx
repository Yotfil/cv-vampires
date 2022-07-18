import styled from 'styled-components'

const Title = () => {
  return (
    <>
      <TitleHeader>Vampires</TitleHeader>
      <SubtitleHeader>The Masquerade</SubtitleHeader>
    </>
  )
}

const TitleHeader = styled.h1`
  color: #f1f1f1;
  font-size: 54px;
  font-weight: 700;
`
const SubtitleHeader = styled.h1`
  color: #f1f1f1;
  font-size: 24px;
  font-weight: 100;
`

export default Title
