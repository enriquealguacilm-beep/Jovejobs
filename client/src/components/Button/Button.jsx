import React from 'react';
import "./button.css"

export const ButtonJJ = ({ children, onClick, variant="primary"  }) => {

  return (
    <button className={`btnjj btnjj-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
