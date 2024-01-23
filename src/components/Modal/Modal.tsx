import React from 'react';
import Backdrop from '../Backdrop/Backdrop';

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: React.ReactNode;
  onClose: React.MouseEventHandler;
}

const Modal: React.FC<Props> = ({ show, title, onClose }) => {
  return (
      <>
        <Backdrop show={show} onClick={onClose} />
        <div className="modal show" style={{ display: show ? 'block' : 'none' }} onClick={onClose}>
          <div className="modal-dialog">
            <div className="modal-content ">
              <div className="modal-header">
                <h4 className="modal-title">{title}</h4>
                <button
                  type="button"
                  className="btn-close"
                  onClick={onClose}
                  aria-label="Close"
                  >
                </button>
              </div>
              <div className="modal-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, praesentium.</p>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Modal;