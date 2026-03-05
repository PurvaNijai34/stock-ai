Installation & Setup

Clone the repository:

git clone https://github.com/yourusername/stock-ai-project.git

Move into the project directory:

cd stock-ai-project


🧩 Backend Setup (Flask AI API)

Go to the AI model folder:

cd ai-model

Create virtual environment:

python -m venv venv

Activate virtual environment (Windows):

.\venv\Scripts\activate

Install dependencies:

pip install flask flask-cors pandas numpy scikit-learn joblib

Run the Flask server:

python api.py

The AI API will run on:

http://localhost:5000
🔗 Node Backend Setup

Open a new terminal and go to backend folder:

cd backend

Install dependencies:

npm install

Start Node server:

node app.js

Server runs on:

http://localhost:4000
🎨 Frontend Setup (React)

Open another terminal and go to frontend folder:

cd frontend

Install dependencies:

npm install

Start React app:

npm start

Frontend runs on:

http://localhost:3000
📊 Dashboard Output

After running the project:

Select a company from the dropdown

Click Analyze

The system displays:

Prediction → Future stock trend
Sentiment → Social media opinion
Confidence → Prediction strength

Charts displayed:

📈 Line Chart → Historical stock price

🥧 Pie Chart → Social media sentiment distribution

🧪 Example Output
Stock: Amazon

Prediction: UP
Sentiment: Positive
Confidence: 0.82