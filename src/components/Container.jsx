import styled from 'styled-components'

const Container = ({ children, subtitle }) => {
  return (
    <Section>
      {subtitle && <SectionTitle>{subtitle}</SectionTitle>}
      <ContainerColumns>{children}</ContainerColumns>
    </Section>
  )
}

const Section = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`

const ContainerColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  margin: auto;
  gap: 20px;
  width: 100%;
  padding: 20px;
`

const SectionTitle = styled.h3`
  color: #ffdab8;
  margin-bottom: 10px;
  font-size: 36px;
  font-weight: 400;
  position: relative;
  width: 100%;
  text-align: center;
  &::before {
    content: '';
    height: 4px;
    width: 90%;
    margin: auto;
    background: rgb(255, 218, 184);
    background: linear-gradient(
      90deg,
      rgba(255, 218, 184, 0.5998600123643207) 40%,
      rgba(255, 218, 184, 0) 40%,
      rgba(255, 218, 184, 0) 50%,
      rgba(255, 218, 184, 0) 60%,
      rgba(255, 218, 184, 0.6026611328125) 60%
    );
    position: absolute;
    top: calc(50% - 2px);
    left: 5%;
    border-radius: 10px;
  }
`

export default Container
