import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeToast } from '../store/toast/toastSlice';
import './Toast.scss';

const Toast = () => {
 const dispatch = useDispatch();
 const toasts = useSelector((state) => state.toast.toasts);

 useEffect(() => {
  if (toasts.length > 0) {
   const timer = setTimeout(() => {
    dispatch(removeToast(toasts[0].id));
   }, 5000);
   return () => clearTimeout(timer);
  }
 }, [toasts, dispatch]);

 if (toasts.length === 0) return null;

 return (
  <div className="toast-container">
   {toasts.map((toast) => (
    <div key={toast.id} className={`toast toast--${toast.type}`}>
     <span className="toast__message">{toast.message}</span>
     <button className="toast__close" onClick={() => dispatch(removeToast(toast.id))}>
      &times;
     </button>
    </div>
   ))}
  </div>
 );
};

export default Toast;
