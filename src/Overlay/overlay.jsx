import React, { useState } from 'react';

const Overlay = ({ onSignInClick, onSignUpClick }) => {
  console.log('pesho Overlay', onSignInClick, onSignUpClick);
  
  return (
    <div className="overlay-container-login">
      <div className="overlay">
        <div className="overlay-panel overlay-left" onClick={onSignInClick}>
          <h5>Welcome Back</h5>
          <p>To keep connected with us, please login with your personal info</p>
          <button className="ghost" id="signIn">
            Sign In
          </button>
        </div>
        <div className="overlay-panel overlay-right" onClick={onSignUpClick}>
          <h4>Hello, Friend</h4>
          <p>Enter your personal details and start your journey with us!</p>
          <button className="ghost hello-friend-btn" id="signUp">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
