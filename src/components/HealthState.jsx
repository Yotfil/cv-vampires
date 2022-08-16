import styled from 'styled-components'

const HealthState = ({ state, setItemsHealthState, itemsHealthState }) => {
  const activeStateHealth = e => {
    console.log(e.target.id)
  }
  return (
    <Container className={state.incapacitated ? 'incapacitated' : ''}>
      <P>{state.nameStateHealth}</P>
      <Container className='small'>
        {state.penalty !== 0 && <P>{state.penalty}</P>}
        <SpanPoint id={state.id} onClick={activeStateHealth}></SpanPoint>
      </Container>
    </Container>
  )
}

const P = styled.p`
  color: #d1d1d1;
  font-size: 12px;
`

const Container = styled.div.attrs(props => ({ className: props.className }))`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.small {
    width: auto;
    justify-content: center;
    & span {
      margin-left: 15px;
    }
  }
  &.incapacitated {
    p {
      color: #8a5151;
    }
    span {
      background-color: #8a5151;
    }
  }
`

const SpanPoint = styled.span`
  background-color: #808080;
  width: 13px;
  height: 13px;
  margin: 3px;
  display: block;
  cursor: pointer;
  :hover {
    background-color: #5d5d5d;
  }
  &.active {
    background-color: #fba74c;
  }
  &.inactive {
    background-color: #808080;
  }
`

export default HealthState
