import os
from app import create_app
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Create Flask application
app = create_app()

if __name__ == "__main__":
    # Run the Flask development server
    app.run(
        host=os.getenv('FLASK_RUN_HOST', '0.0.0.0'),  # Change this to 0.0.0.0
        port=int(os.getenv('FLASK_RUN_PORT', 5000)),
        debug=os.getenv('FLASK_DEBUG', 'false').lower() == 'true'
    )
