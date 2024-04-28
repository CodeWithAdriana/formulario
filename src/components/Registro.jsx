import { useState } from "react";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";

function Registro() {
  const [alert, setAlert] = useState({ mensaje: "", color: "" });

  return (
    <>
      <h3>Completa el Formulario</h3>
      <Formulario setAlert={setAlert} />
      {alert.mensaje && <h1 style={{ color: alert.color }}>{alert.mensaje}</h1>}
    </>
  );
}

export default Registro;
