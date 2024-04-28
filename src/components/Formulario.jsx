import { useState } from "react"
import { limpiar } from "../utils/limpiar";


function Formulario({ setAlert }) {

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function enviarFormulario(e) {
        e.preventDefault()
        if (user === "" || email === "" || password === "" || confirmPassword === "") {
            setAlert({ mensaje: "Debes completar todos los Campos", color: "red" })
            limpiar(setUser, setEmail, setPassword, setConfirmPassword)
            return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setAlert({ mensaje: "El formato de email es incorrecto", color: "red" })
            limpiar(setUser, setEmail, setPassword, setConfirmPassword)
            return
        }

        if (password !== confirmPassword) {
            setAlert({ mensaje: "Los Password deben coincidir", color: "red" })
            limpiar(setUser, setEmail, setPassword, setConfirmPassword)
            return
        }
        else {
            setAlert({ mensaje: "Bienvenido", color: "green" })
            limpiar(setUser, setEmail, setPassword, setConfirmPassword)
        }
        console.log({ user, email, password, confirmPassword })
    };

    return (
        <>
            <form onSubmit={enviarFormulario}>
                <input onChange={(e) => setUser(e.target.value)} placeholder="Nombre" type="text" value={user} />
                <input onChange={(e) => setEmail(e.target.value)} placeholder="tuemail@ejemplo.com" type="text" value={email} />
                <input onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" type="password" value={password} />
                <input onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirma tu Contraseña" type="password" value={confirmPassword} />
                <button type="submit">Registrarse</button>

            </form>
        </>
    )
}
export default Formulario