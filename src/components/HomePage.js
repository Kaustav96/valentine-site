import React, { useEffect } from 'react';
import './HomePage.css';

function HomePage({ onOpenClick }) {
  useEffect(() => {
    // Create floating hearts
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.innerHTML = '❤️';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
      heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
      document.querySelector('.hearts-container').appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    };

    const interval = setInterval(createHeart, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <div className="hearts-container"></div>
      <div className="content">
        <h1 className="title">💕 Something Special 💕</h1>
        <p className="message">
          Hey beautiful! 🌹<br />
          I have something special to ask you...<br />
          Are you ready to see what's inside my heart?
        </p>
        <button className="open-button" onClick={onOpenClick}>
          Open My Heart 💖
        </button>
      </div>
    </div>
  );
}

export default HomePage;
