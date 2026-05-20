import React from 'react';

export const ButtonJJ = ({ children, onClick, variant="jj-primary"  }) => {

  return (
    <button className={`btn btn--${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
