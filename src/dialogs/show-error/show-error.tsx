import React, { useEffect, useRef } from 'react';
import './Snackbar.scss';

const Snackbar = ({ message, open, onClose }) => {
 const progressRef = useRef();

 useEffect(() => {
  if (open) {
   progressRef.current.style.width = '0%';
   setTimeout(() => {
    progressRef.current.style.transition = 'width 3s linear';
    progressRef.current.style.width = '100%';
   }, 10);
   const timer = setTimeout(onClose, 3000);
   return () => {
    clearTimeout(timer);
    progressRef.current.style.transition = '';
    progressRef.current.style.width = '0%';
   };
  }
 }, [open, onClose]);

 return (
  <div className={`snackbar${open ? ' show' : ''}`}>
   <span>{message}</span>
   <button onClick={onClose}>OK</button>
   <div className="snackbar-progress" ref={progressRef}></div>
  </div>
 );
};

export default Snackbar;
