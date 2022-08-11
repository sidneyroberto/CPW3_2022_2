import React from 'react'
import ReactDOM from 'react-dom/client'
import MyDiv from './components/MyDiv'

const root = document.getElementById('root') as HTMLElement
const appRoot = ReactDOM.createRoot(root)

/*
const n1 = 5
const n2 = 7
const name = 'Sidney Sousa'
const colors = ['Vermelho', 'Azul', 'Verde']

const myDiv = (
  <>
    <p>Resultado: {n1 + n2}</p>
    <p>Olá, {name.toUpperCase()}!</p>
    {colors.length > 0 && (
      <ul>
        {colors.map((c, index) => (
          <li key={index}>Eu gosto da cor {c}</li>
        ))}
      </ul>
    )}

    {colors.length == 0 && <p>Nenhuma cor para exibir</p>}
  </>
)

appRoot.render(myDiv)
*/

appRoot.render(<MyDiv />)
