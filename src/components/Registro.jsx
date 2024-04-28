<<<<<<< HEAD
import { useState } from "react";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";

function Registro() {
  const [alert, setAlert] = useState({ mensaje: "", color: "" });
=======
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
>>>>>>> 24f06a51f4b21dc0f5b652a0a44c902e5d98fbe7

  return (
    <>
      <h3>Completa el Formulario</h3>
      <Formulario setAlert={setAlert} />
      {alert.mensaje && <h1 style={{ color: alert.color }}>{alert.mensaje}</h1>}
    </>
  );
}

export default Registro;
