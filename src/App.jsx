import { useState } from 'react'
import './App.css'
import Container from './components/Container'
import WebFont from 'webfontloader'
import Title from './components/Title'
import styled from 'styled-components'
import Header from './components/Header'

WebFont.load({
  google: {
    families: ['Signika Negative:300,400,600', 'sans-serif'],
  },
})
function App() {
  return (
    <Div>
      <Title />
      <Container>
        <h1>Hello World</h1>
        <Header />
      </Container>
    </Div>
  )
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export default App
