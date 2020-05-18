import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const Modal = props => {
  return  ReactDOM.createPortal(
    <div className="backdrop">
      <div className="modal-wrapper">{props.children}</div>
    </div>,
    document.querySelector('#modal'),
  );
};

export default Modal;
