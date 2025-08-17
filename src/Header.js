import React from 'react';
import './Header.css'; // Import your CSS here

function Header() {
  return (
    <header>

      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">AI</a>
        <a href="#">Features</a>
        <a href="#">Contact</a>
      </nav>
      <div className="login">
        <button onClick={() => changeButtonColor()}>Login</button>
      </div>
    </header>
  );
}

function changeButtonColor() {
  const button = document.querySelector('.login button');
  if (button) {
    button.style.backgroundColor = '#16de2a';
  }
}

export default Header;
