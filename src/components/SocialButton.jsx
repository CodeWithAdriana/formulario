import React from "react";
export const SocialButton = ({ iconName, onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-outline-secondary">
      <i className={`bi bi-${iconName}`}></i>
    </button>
  );
};

export default SocialButton;
