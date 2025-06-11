import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './confirmDeleteDialog.scss';

const ConfirmDeleteDialog = ({ onClose }) => {
 const dialogRef = useRef(null);
 const [isOpen, setIsOpen] = useState(true);
 useEffect(() => {
  console.log('pesho', onClose);
 }, []);

 // Функция за затваряне на диалога
 const closeDialog = () => {
  setIsOpen(false);
  if (dialogRef.current) {
   dialogRef.current.close();
  }
  onClose('dont'); // Извиква родителската функция за затваряне
 };

 const deleteDialog = () => {
  onClose('delete'); // Извиква родителската функция за затваряне
 };
 // Затваряне при клик извън съдържанието на <dialog>
 const closeOnClickOutside = (event) => {
  if (event.target === dialogRef.current) {
   closeDialog();
  }
 };

 return (
  <div className="input-width-100">
   <dialog ref={dialogRef} className="show-hide-dialog dialog-content flex-vertical-container align-content-center align-items-center text-align-center padding-15" onClick={closeOnClickOutside} style={{ display: isOpen ? 'block' : 'none' }}>
    <h6>⚠️ Нямате прав12312312а!</h6>
    <p>Нямате достатъчно права, за да изпълните тази операция.</p>
    <div>
     <button className="access-denied-btn" onClick={deleteDialog}>
      Да, сигурен съм
     </button>
     <button className="access-denied-btn" onClick={closeDialog}>
      Затвори
     </button>
    </div>
   </dialog>
  </div>
 );
};

// Добави PropTypes валидация
ConfirmDeleteDialog.propTypes = {
 onClose: PropTypes.func, // onClose трябва да бъде function
};

export default ConfirmDeleteDialog;
