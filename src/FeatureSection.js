import React from 'react';
import './FeatureSection.css'; // Import the CSS file

class Featuresection extends React.Component {
  animateAndRedirect() {
    const box = document.querySelector('.tilt-box-container');
    if (box) {
      box.style.transition = 'transform 0.5s ease-in-out';
      box.style.transform = 'scale(1.1)'; // Scale up animation
      setTimeout(() => {
        window.location.href = 'chatbot.html'; // Redirect after animation
      }, 500);
    }
  }

  render() {
    return (
      <div className="feature-section">
        <div className="tilt-box-container" onClick={() => this.animateAndRedirect()}>
          <div className="box">
            <img src="ai.png" alt="Feature 1" className="feature-image" />
          </div>
          <div className="text-container">
            <h3>Smart AI Farming</h3>
            <p>"Try it now! Chat with our AI Plant Care Assistant."</p>
          </div>
        </div>
        <div className="tilt-box-container" onClick={() => this.animateAndRedirect()}>
          <div className="box">
            <img src="ar.png" alt="Feature 3" className="feature-image" />
          </div>
          <div className="text-container">
            <h3>AR Enhanced Farming</h3>
            <p> "Start planning your garden with AR!"</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Featuresection;
