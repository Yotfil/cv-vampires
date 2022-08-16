import styled from 'styled-components'

const HealthState = ({ state, setItemsHealthState, itemsHealthState }) => {
  const activeStateHealth = e => {
    const idCurrentTarget = e.target.id
    const newArray = itemsHealthState.map((state, i) => {
      if (state.id === idCurrentTarget) {
        return { ...state, bgColor: state.nameStateHealth }
      } else {
        return { ...state, bgColor: 'inactive' }
      }
    })
    setItemsHealthState(newArray)
  }
  return (
    <Container className={state.bgColor}>
      <P>{state.nameStateHealth}</P>
      <Container className={'small'}>
        {state.penalty !== 0 && <P>{state.penalty}</P>}
        <SpanPoint id={state.id} onClick={activeStateHealth}></SpanPoint>
      </Container>
    </Container>
  )
}

const P = styled.p`
  color: #d1d1d1;
  font-size: 16px;
`

const Container = styled.div.attrs(props => ({ className: props.className }))`
  width: 50%;
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
  &.inactive {
    p {
      color: #808080;
    }
    span {
      background-color: #808080;
    }
  }
  &.Bruised {
    p {
      color: #fff29b;
    }
    span {
      background-color: #fff29b;
    }
  }
  &.Hurt {
    p {
      color: #ffd000;
    }
    span {
      background-color: #ffd000;
    }
  }
  &.Injured {
    p {
      color: #ffc800;
    }
    span {
      background-color: #ffc800;
    }
  }
  &.Wounded {
    p {
      color: #ffa600;
    }
    span {
      background-color: #ffa600;
    }
  }
  &.Mauled {
    p {
      color: #ff8800;
    }
    span {
      background-color: #ff8800;
    }
  }
  &.Crippled {
    p {
      color: #eb695b;
    }
    span {
      background-color: #eb695b;
    }
  }
  &.Incapacitated {
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
