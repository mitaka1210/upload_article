import React, { useEffect, useRef } from 'react';
import './show-error.scss';

interface SnackbarProps {
 message: { message: string };
 open: boolean;
 status: string;
 onClose: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({ message, status, open, onClose }) => {
 const progressRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  if (open) {
   if (progressRef.current) {
    progressRef.current.style.width = '0%';
   }
   setTimeout(() => {
    if (progressRef.current) {
     progressRef.current.style.transition = 'width 3s linear';
     progressRef.current.style.width = '100%';
    }
   }, 10);
   const timer = setTimeout(onClose, 3000);
   return () => {
    clearTimeout(timer);
    if (progressRef.current) {
     progressRef.current.style.transition = '';
     progressRef.current.style.width = '0%';
    }
   };
  }
 }, [open, onClose]);

 return (
  {status === 'error' ? (
   <div className={`snackbar${open ? ' show' : ''}`}>
    <span>{message.message}</span>
    <button onClick={onClose}>OK</button>
    <div className="snackbar-progress" ref={progressRef}></div>
   </div>
  ) : (
   <div className={`snackbar${open ? ' show' : ''}`}>
    <span>{message.message}</span>
    <button onClick={onClose}>OK</button>
    <div className="snackbar-progress" ref={progressRef}></div>
   </div>
  )}
 );
};

export default Snackbar;
