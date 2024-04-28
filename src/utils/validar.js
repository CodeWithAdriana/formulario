export const validatePassword = (password) => {
  
    if (password.length < 8) {
      return 'La contraseña debe tener al menos 8 caracteres.';
    }
  
    if (!/[0-9]/.test(password)) {
        return 'La contraseña debe contener al menos un número.';
    }
  
    if (!/[A-Za-z]/.test(password)) {
        return 'La contraseña debe contener al menos una letra.';
    }
  
    return '';
  };
  