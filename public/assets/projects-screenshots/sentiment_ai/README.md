# Reddit Sentiment Analysis

A full-stack application that analyzes sentiment of Reddit post comments using FastAPI backend and React frontend.

## Features

- **Reddit Comment Analysis**: Fetch and analyze comments from any Reddit post
- **Sentiment Classification**: Uses DistilBERT model for accurate sentiment analysis
- **Modern UI**: Beautiful, responsive React frontend
- **Fast API**: High-performance FastAPI backend
- **Real-time Results**: Get instant sentiment analysis with confidence scores

## Tech Stack

### Backend
- **FastAPI** - Modern Python web framework
- **PRAW** - Python Reddit API Wrapper
- **Transformers** - Hugging Face transformers library
- **DistilBERT** - Pre-trained sentiment analysis model

### Frontend
- **React** - Modern JavaScript library
- **Vite** - Fast build tool and dev server
- **CSS3** - Modern styling with gradients and animations

## Getting Started

### Prerequisites
- Python 3.8+
- Node.js 16+
- Reddit API credentials

### Backend Setup

1. Navigate to the project root directory
2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Create a `.env` file in the `backend` directory:
   ```env
   REDDIT_CLIENT_ID=your_client_id_here
   REDDIT_CLIENT_SECRET=your_client_secret_here
   REDDIT_USER_AGENT=reddit-sentiment-analyzer
   ```

4. Start the FastAPI server:
   ```bash
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

### Frontend Setup

1. Install Node.js dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Enter a Reddit post URL in the input field
2. Click "Analyze Comments" to fetch and analyze the comments
3. View the sentiment analysis results with confidence scores
4. See statistics about positive, negative, and neutral comments

## API Endpoints

- `GET /` - Health check
- `POST /posturl` - Store a Reddit post URL
- `GET /latestpost` - Get the latest stored post URL
- `GET /latestpost/comments` - Get analyzed comments for the latest post

## Project Structure

```
reddit_sentiment_analysis/
├── main.py                 # FastAPI application
├── model.py               # Sentiment analysis model
├── reddit_client.py       # Reddit API client
├── requirements.txt       # Python dependencies
├── index.html            # Frontend HTML template
├── package.json          # Node.js dependencies
├── vite.config.js        # Vite configuration
├── README.md             # This file
├── backend/
│   ├── .env              # Environment variables
│   └── .gitignore        # Git ignore rules
└── frontend/
    └── src/
        ├── App.jsx       # Main React component
        ├── App.css       # Styles
        ├── main.jsx      # React entry point
        └── api.js        # API configuration
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
