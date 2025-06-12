import React, { useRef, useState } from 'react';
import './access-denied.scss';

const AccessDeniedDialog = ({ onClose }: { onClose: () => void }) => {
 const dialogRef = useRef<HTMLDialogElement>(null);
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
 const closeOnClickOutside = (event: React.MouseEvent<HTMLDialogElement>) => {
  if (event.target === dialogRef.current) {
   closeDialog();
  }
 };

 return (
  <div className="input-width-100">
   <dialog ref={dialogRef} className="show-hide-dialog dialog-content flex-vertical-container align-content-center align-items-center text-align-center padding-15" onClick={closeOnClickOutside} style={{ display: isOpen ? 'block' : 'none' }}>
    <h6>⚠️ Нямате права!</h6>
    <p>Нямате достатъчно права, за да изпълните тази операция.</p>
    <div>
     <button className="access-denied-btn" onClick={closeDialog}>
      Затвори
     </button>
    </div>
   </dialog>
  </div>
 );
};
export default AccessDeniedDialog;
