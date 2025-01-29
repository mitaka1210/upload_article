import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './access-denied.scss';

const AccessDeniedDialog = ({ onClose }) => {
 const dialogRef = useRef(null);
 const [isOpen, setIsOpen] = useState(true);

 // Функция за затваряне на диалога
 const closeDialog = () => {
  setIsOpen(false);
  if (dialogRef.current) {
   dialogRef.current.close();
  }
  onClose(); // Извиква родителската функция за затваряне
 };

 // Затваряне при клик извън съдържанието на <dialog>
 const closeOnClickOutside = (event) => {
  if (event.target === dialogRef.current) {
   closeDialog();
  }
 };

 return (
  <div>
   <dialog ref={dialogRef} className="show-hide-dialog" onClick={closeOnClickOutside} style={{ display: isOpen ? 'block' : 'none' }}>
    <div style={{ padding: '20px', background: 'white', borderRadius: '8px' }}>
     <h2>⚠️ Нямате права!</h2>
     <p>Нямате достатъчно права, за да изпълните тази операция.</p>
     <button onClick={closeDialog}>Затвори</button>
    </div>
   </dialog>
  </div>
 );
};

// Добави PropTypes валидация
AccessDeniedDialog.propTypes = {
 onClose: PropTypes.func, // onClose трябва да бъде function
};

export default AccessDeniedDialog;
