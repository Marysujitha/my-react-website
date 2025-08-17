import React from 'react';
import Header from './Header';
import FeatureSection from './FeatureSection';
import Footer from './Footer';
import './App.css'; // Your CSS file for global styles

function App() {
  // Function to change the button color
  const changeButtonColor = () => {
    const button = document.querySelector('.get-started-btn');
    if (button.style.backgroundColor === '#40dc5c') {
      button.style.backgroundColor = '#B2AC88';
    } else {
      button.style.backgroundColor = '#40dc5c';
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <div className="intro-box">
          <h3>Discover Farming With AI</h3>
          <p>Welcome to our Smart Urban Gardening Hub, where we combine technology and nature to help your plants thrive! Join us in transforming your urban space into a green oasis.
          </p>
          <button 
            className="get-started-btn" 
            style={{ backgroundColor: '#B2AC88' }} // Initial background color
            onClick={changeButtonColor}
          >
            Get Started
          </button>
        </div>
        
        {/* "What Do You Get With Us?" question */}
        <h4>What Do You Get With Us?</h4>

        {/* Circles with quotes */}
          <div className="circles-container">
           <div className="circle">Go Green, Transform Your Space!</div>
           <div className="circle">Personalized Plant Care Guidance</div>
           <div className="circle">Plan Your Garden with AR</div>
           <div className="circle">A Sustainable Future</div>
        </div>
        

        <FeatureSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
