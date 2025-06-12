import React, { useEffect, useRef, useState } from 'react';
import './confirmDeleteDialog.scss';

const ConfirmDeleteDialog = ({ onClose }: { onClose: (action: string) => void }) => {
 const dialogRef = useRef<HTMLDialogElement>(null);
 const [isOpen, setIsOpen] = useState(true);
 const [getRole, setGetRole] = useState('');
 useEffect(() => {
  setGetRole(localStorage.getItem('role'));
 }, [getRole]);

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
 const closeOnClickOutside = (event: React.MouseEvent<HTMLDialogElement>) => {
  if (event.target === dialogRef.current) {
   closeDialog();
  }
 };

 return (
  <div className="input-width-100">
   <dialog ref={dialogRef} className="show-hide-dialog change-width-snackbar dialog-content flex-vertical-container align-content-center align-items-center text-align-center padding-15" onClick={closeOnClickOutside} style={{ display: isOpen ? 'block' : 'none' }}>
    {getRole !== 'super_admin' ? (
     <div>
      <h6>⚠️ Нямате права!</h6>
      <p>Нямате достатъчно права, за да изпълните тази операция.</p>
     </div>
    ) : (
     <div>
      <h6>⚠️ Сигурни ли сте?</h6>
      <p>Тази операция ще изтрие статията завинаги.</p>
     </div>
    )}
    <div className="flex-horizontal-container-raw  gap-25">
     <button className="access-denied-btn input-width-100" onClick={deleteDialog}>
      Да, сигурен съм
     </button>
     <button className="access-denied-btn input-width-100" onClick={closeDialog}>
      Затвори
     </button>
    </div>
   </dialog>
  </div>
 );
};

export default ConfirmDeleteDialog;
