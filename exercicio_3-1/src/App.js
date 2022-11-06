import { useState } from "react"
import Login from "./components/Login"
import saidai from "./assets/saidai.jpg"
import "./App.css"

const App = () => {
  const [login, setLogin] = useState(false)

  const Logon = () => {
    setLogin(!login)
  }

  return (
    <div className="App-log">
      <h1>Bem vindo a Tarfa 3-parte 2</h1>
      { !login && <Login Logon={Logon}/> }
      { login && 
      <>
        <img src={saidai} alt="sai da í" />
        <br />
        <button className="button" onClick={
            () => Logon()}>Sair</button>
      </> }
    </div>
  )
}

export default App