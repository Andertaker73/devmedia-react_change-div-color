import "./App.css"

import { useState } from "react"

export default function App() {
  const corDeFundoVermelho = "bg-vermelho"
  const corDeFundoAzul = "bg-azul"

  const [estiloAtualizado, setEstiloAtualizado] = useState(true)

  const alterarCor = () => {
    setEstiloAtualizado(!estiloAtualizado)
  }

  return (
    <div className="display">
      <div className="container">
        <h1>Alterar cor de fundo:</h1>
        <div
          className={estiloAtualizado ? corDeFundoVermelho : corDeFundoAzul}
        ></div>
        <p>Clique no botão abaixo para alterar a cor da caixa.</p>
        <button onClick={alterarCor}>Mudar Cor</button>
      </div>
    </div>
  )
}
