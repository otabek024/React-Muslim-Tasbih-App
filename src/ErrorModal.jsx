import React from 'react';
import "./app.css"

const ErrorModal = (props) => {
  return (
    <>
      <div className='backdrop' onClick={props.onConfirm}></div>
      <div className="modal-box">
        <header>
          <h3 className='info'>{props.title}</h3>
        </header>
        <p className='message'>{props.message1}</p>
        <p className='message'>{props.message2}</p>
        <footer>
          <button className='logOut' onClick={props.onConfirm}>Chiqish</button>
        </footer>
      </div>
    </>
  )
};

export default ErrorModal;
