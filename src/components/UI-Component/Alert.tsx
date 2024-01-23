import React from 'react';

interface Props {
  type: 'alert alert-primary' | 'alert alert-secondary';
  onDismiss?: () => void;
}

const Alert: React.FC<Props> = ({type, onDismiss, children}) => {

  const showAlert = {type}

  return (
    <>
      <div className="alert-title">
        <h5 className={showAlert} role="alert">{children}</h5>
        <button className="btn-close" type="button" aria-label="Close" onClick={onDismiss}></button>
      </div>
    </>
  );
};

export default Alert;