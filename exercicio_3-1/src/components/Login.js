import React from "react"
import pare from "../assets/pare.jpg"


const Login = (  {Logon}  ) => {

  return (
    <div>
      <br/>
        <>
          <img src={pare} alt="pare" />
          <br/>
          <button className="button" onClick={
              () => Logon()}>Entrar</button>
        </>
    </div>
  )
}

export default Login
