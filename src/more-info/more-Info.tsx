import React, { useEffect, useRef, useState } from 'react';
import './moreInfo.scss';
// @ts-ignore
import info from '../assets/more-info.png';

const InfoDiv = () => {
 const [isOpen, setIsOpen] = useState(false);
 const infoRef = useRef(null);

 const handleClickOutside = (event) => {
  if (infoRef.current && !infoRef.current.contains(event.target)) {
   setIsOpen(false);
  }
 };

 useEffect(() => {
  document.addEventListener('mousedown', handleClickOutside);
  return () => {
   document.removeEventListener('mousedown', handleClickOutside);
  };
 }, []);

 return (
  <div className="flex-horizontal-container-raw justify-content-center">
   <button className="more-info-icon" onClick={() => setIsOpen(!isOpen)}>
    <img src={info} alt="info" />
   </button>
   {isOpen && (
    <div ref={infoRef} className="info-div">
     <h5>Следвайте тези стъпки:</h5>
     <ul>
      <ol>
       <li>Запишете заглавие на статия.</li>
       <li>Запазете заглавието.</li>
       <li>Дайте име на секция.</li>
       <li>Запишете съдържание на секцията.</li>
       <li>Качете снимка.</li>
       <li>Запазете секцията.</li>
      </ol>
     </ul>
    </div>
   )}
  </div>
 );
};

export default InfoDiv;
