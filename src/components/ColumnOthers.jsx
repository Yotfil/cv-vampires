import styled from 'styled-components'

const ColumnOthers = ({ children, title }) => {
  return (
    <Div>
      <TitleColumn>{title}</TitleColumn>
      {children}
    </Div>
  )
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

const TitleColumn = styled.h4`
  width: 100%;
  color: #ffdab8;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
  font-weight: 100;
  position: relative;
  &::before {
    content: '';
    height: 2px;
    width: 90%;
    margin: auto;
    background: rgb(255, 218, 184);
    background: linear-gradient(
      90deg,
      rgba(255, 218, 184, 0.5998600123643207) 20%,
      rgba(255, 218, 184, 0) 20%,
      rgba(255, 218, 184, 0) 50%,
      rgba(255, 218, 184, 0) 80%,
      rgba(255, 218, 184, 0.6026611328125) 80%
    );
    position: absolute;
    top: calc(50% - 2px);
    left: 5%;
    border-radius: 10px;
  }
`

export default ColumnOthers
