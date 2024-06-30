from flask import Flask, request, jsonify # type: ignore
from flask_cors import CORS # type: ignore
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)  

# Load the model
with open('model_1.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    features = np.array(data['features']).reshape(1, -1)
    prediction = model.predict(features)
    print(f'Prediction: {prediction[0]}')
    return jsonify({'prediction': int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)
