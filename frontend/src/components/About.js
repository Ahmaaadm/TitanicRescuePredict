// src/components/About.js
import React from 'react';
import backgroundImage from '../assets/background.jpg';

const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '20px',
  color: '#fff',
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
};

const contentStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  padding: '30px',
  borderRadius: '8px',
  maxWidth: '600px',
  width: '100%',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const headingStyle = {
  fontSize: '32px',
  marginBottom: '20px',
};

const textStyle = {
  fontSize: '18px',
};

function About() {
  return (
    <div style={backgroundStyle}>
      <div style={contentStyle}>
        <h2 style={headingStyle}>About This Project</h2>
        <p style={textStyle}>
          This project aims to predict the survival of Titanic passengers using machine learning.
          Users can input age, passenger class, and gender to receive a prediction based on a trained model.
          The application uses a Flask backend for prediction and a React frontend for user interaction.
        </p>
        <p style={textStyle}>
          Built with passion and powered by technology, this project showcases the integration of data science
          and web development to create a predictive application with practical insights into historical events.
        </p>
      </div>
    </div>
  );
}

export default About;
