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

}

export default Registro








    