import { useState } from "react";
import Formulario from "./Formulario";
import { Alert } from "./Alert";
import { SocialButton } from "./SocialButton";

function Registro() {
  const [alert, setAlert] = useState({ mensaje: "", color: "" });

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com", "_blank");
  };

  const handleTwitterClick = () => {
    window.open("https://twitter.com", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com", "_blank");
  };

  return (
    <div className="registro-container">
      <h3>Crea una Cuenta</h3>

      <div className="social-login">
        <div className="social-buttons">
          <SocialButton iconName="facebook" onClick={handleFacebookClick} />
          <SocialButton iconName="twitter" onClick={handleTwitterClick} />
          <SocialButton iconName="linkedin" onClick={handleLinkedInClick} />
        </div>
        <p>O usa tu email para registrarte</p>
      </div>

      <Formulario setAlert={setAlert} />

      <Alert mensaje={alert.mensaje} color={alert.color} />
    </div>
  );
}

export default Registro;
