import React, { useState } from 'react';
import sinkingImage from '../assets/sinking.png';
import rescuedImage from '../assets/rescued.png';
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

const formStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  padding: '30px',
  borderRadius: '8px',
  maxWidth: '400px',
  width: '100%',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const labelStyle = {
  display: 'block',
  marginBottom: '10px',
  color: '#fff',
  fontSize: '18px',
};

const inputStyle = {
  padding: '12px',
  fontSize: '16px',
  width: '100%',
  marginBottom: '20px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#fff',
  boxSizing: 'border-box',
};

const selectStyle = {
  ...inputStyle,
  cursor: 'pointer',
  padding: '12px',
  fontSize: '16px',
  width: '100%',
  marginBottom: '20px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#fff',
  backgroundImage: 'linear-gradient(45deg, #007bff, #007bff)',
  color: '#000', // Adjusted text color for better visibility
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'background-color 0.3s ease',
  appearance: 'none',
};

const checkboxLabelStyle = {
  display: 'inline-block',
  margin: '0 10px 10px 0',
  color: '#fff',
};

const submitButtonStyle = {
  padding: '12px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const predictionContainerStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: '20px',
  borderRadius: '8px',
  marginTop: '20px',
  maxWidth: '400px',
  width: '100%',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const predictionTextStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
};

const imageContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '20px',
};

const imageStyle = {
  width: '100px',
  height: '100px',
  margin: '0 10px',
  objectFit: 'cover',
  borderRadius: '50%',
};

function Home() {
  const [age, setAge] = useState('');
  const [passengerClass, setPassengerClass] = useState('1st');
  const [sexMale, setSexMale] = useState(false);
  const [prediction, setPrediction] = useState(null);

 
  const handleSubmit = async (e) => {
    e.preventDefault();

   
    let class2 = 0;
    let class3 = 0;
    if (passengerClass === '2nd') {
      class2 = 1;
    } else if (passengerClass === '3rd') {
      class3 = 1;
    }

 
    const features = [
      Number(age),
      class2,
      class3,
      sexMale ? 1 : 0,
    ];

    
    console.log('User Input:', {
      Age: Number(age),
      Passenger_Class: passengerClass,
      Sex_male: sexMale ? 1 : 0,
    });

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ features }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setPrediction(data.prediction);
      
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div style={backgroundStyle}>
      <h2>Predict Titanic Survival</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label style={labelStyle}>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Passenger Class:</label>
          <select
            value={passengerClass}
            onChange={(e) => setPassengerClass(e.target.value)}
            style={selectStyle}
          >
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
          </select>
        </div>
        <div>
          <label style={checkboxLabelStyle}>
            <input
              type="checkbox"
              checked={sexMale}
              onChange={(e) => setSexMale(e.target.checked)}
              style={{ marginRight: '10px' }}
            />
            Male
          </label>
        </div>
        <button
          type="submit"
          style={submitButtonStyle}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          Predict
        </button>
      </form>
      {prediction !== null && (
        <div style={predictionContainerStyle}>
          <p
            style={{
              ...predictionTextStyle,
              color: prediction ? '#007bff' : '#ff0000', 
            }}
          >
            Prediction: {prediction ? 'Rescued' : 'Sinking'}
          </p>
          <div style={imageContainerStyle}>
            {prediction ? (
              <img src={rescuedImage} alt="Rescued" style={imageStyle} />
            ) : (
              <img src={sinkingImage} alt="Sinking" style={imageStyle} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
