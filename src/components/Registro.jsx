
import { useState } from "react";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";

function Registro() {
  const [alert, setAlert] = useState({ mensaje: "", color: "" });

import { useState } from "react"
import Formulario from "./Formulario"
import { Alert } from "./Alert"

function Registro(){
    const [alert, setAlert]= useState({mensaje:"", color:""})

    return(
        <>
        <h3>Crea una Cuenta</h3>

        <Formulario setAlert={setAlert} />

        <Alert mensaje={alert.mensaje} color={alert.color}/>
        </>
    )


  return (
    <>
      <h3>Completa el Formulario</h3>
      <Formulario setAlert={setAlert} />
      {alert.mensaje && <h1 style={{ color: alert.color }}>{alert.mensaje}</h1>}
    </>
  );
}

const SocialICons = () => {

    const FacebookClick = () => {

    };

    const TwitterClick = () => {

    };

    const LinkedInClick = () => {

    };

    return (
        <div className="social-login"></div>
    )
}

export default Registro;
