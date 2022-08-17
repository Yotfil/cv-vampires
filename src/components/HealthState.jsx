import styled, { css } from 'styled-components'

const HealthState = ({ state, setItemsHealthState, itemsHealthState }) => {
  const activeStateHealth = e => {
    const idCurrentTarget = e.target.id
    const newArray = itemsHealthState.map(state => {
      if (state.id === idCurrentTarget) {
        return {
          ...state,
          currentBgColor: state.bgColor,
        }
      } else {
        return { ...state, currentBgColor: '#808080' }
      }
    })
    setItemsHealthState(newArray)
  }

  const removeStateStealth = _ => {
    const newArray = itemsHealthState.map(state => ({
      ...state,
      currentBgColor: '#808080',
    }))
    setItemsHealthState(newArray)
  }

  return (
    <Container small={false}>
      <P colorText={state.currentBgColor || '#d1d1d1'}>
        {state.nameStateHealth}
      </P>
      <Container small={true}>
        {state.penalty !== 0 && (
          <P colorText={state.currentBgColor || '#d1d1d1'}>{state.penalty}</P>
        )}
        <SpanPoint
          id={state.id}
          onClick={activeStateHealth}
          onDoubleClick={removeStateStealth}
          bgColor={state.currentBgColor}></SpanPoint>
      </Container>
    </Container>
  )
}

const P = styled.p`
  color: ${props =>
    props.colorText !== '#808080' ? props.colorText : '#d1d1d1'};
  font-size: 16px;
`

const Container = styled.div`
  ${({ small }) =>
    small
      ? css`
          width: auto;
          justify-content: center;
          & span {
            margin-left: 15px;
          }
        `
      : css`
          width: 50%;
          justify-content: space-between;
        `}
  display: flex;
  align-items: center;
`

const SpanPoint = styled.span`
  background-color: ${props => props.bgColor || '#808080'};
  width: 13px;
  height: 13px;
  margin: 3px;
  display: block;
  cursor: pointer;
  :hover {
    background-color: ${props =>
      props.bgColor !== '#808080' ? props.bgColor : '#505050'};
  }
`

export default HealthState
