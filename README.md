# TitanicRescuePredict

**TitanicRescuePredict** is a web application that predicts the survival chances of Titanic passengers based on age, class, and gender.

## Getting the Code

To get the code, follow these steps:

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/<username>/TitanicRescuePredict.git
    cd TitanicRescuePredict
    ```

2. **Checkout the Main Branch**:

    ```bash
    git checkout main
    ```

## Running the Project

### Backend (Flask Server)

To run the backend server:

1. **Navigate to the `server` Directory**:

    ```bash
    cd server
    ```

2. **Create and Activate a Virtual Environment**:

    ```bash
    python -m venv venv
    # On Windows
    venv\Scripts\activate
    # On macOS/Linux
    source venv/bin/activate
    ```

3. **Install the Required Packages**:

    ```bash
    pip install -r requirements.txt
    ```

4. **Start the Flask Server**:

    ```bash
    python app.py
    ```

    The server should now be running on `http://localhost:5000`.

### Frontend (React App)

To run the frontend server:

1. **Open a New Terminal Window** (keep the backend server running in the previous terminal).

2. **Navigate to the `client` Directory**:

    ```bash
    cd ../client
    ```

3. **Install the Required Packages**:

    ```bash
    npm install
    ```

4. **Start the React App**:

    ```bash
    npm start
    ```

    The React app should now be running on `http://localhost:3000`.

## Summary of Commands

```bash
# Clone the repository
git clone https://github.com/<username>/TitanicRescuePredict.git
cd TitanicRescuePredict

# Checkout the main branch
git checkout main

# Setup and run the backend server
cd server
python -m venv venv
# On Windows
venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate
pip install -r requirements.txt
python app.py

# Setup and run the frontend server
cd ../client
npm install
npm start
