import { useState } from "react"
import { limpiar } from "../utils/limpiar";


function Formulario({ setAlert }) {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function enviarFormulario(e) {
        e.preventDefault()
        if (user === "" || password === "" || confirmPassword === "") {
            setAlert({ mensaje: "Debes completar todos los Campos", color: "red" })
            limpiar(setUser, setPassword, setConfirmPassword)

            return
        }
        if(password!==confirmPassword){
            setAlert({ mensaje: "Los Password deben coincidir", color: "red" })
            limpiar(setUser, setPassword, setConfirmPassword)

            return
        }
        else{
            setAlert({ mensaje: "Bienvenido", color: "green" })
           limpiar(setUser, setPassword, setConfirmPassword)

        }
        console.log({ user, password, confirmPassword })
    };



    return (

        <>
            <form onSubmit={enviarFormulario}>
                <input onChange={(e) => setUser(e.target.value)} placeholder="Nombre de Usuario" type="text" value={user} />
                <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" value={password} />
                <input onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirme su Password" type="password" value={confirmPassword} />
                <button type="submit">Iniciar Sesión</button>

            </form>
        </>
    )
}
export default Formulario