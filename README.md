Here's a comprehensive `README.md` file that you can use for the GitHub repository. It provides instructions for all three projects.

---

# Project: Responsive Webpage, Django Chat Application, and AWS Lambda Functions

## Overview
This repository contains three separate mini-projects:

1. **Responsive Webpage**: A front-end project demonstrating responsive design principles with a collapsible menu, fixed navbar, and dynamic scaling.
2. **Django Chat Application**: A real-time chat application with user authentication, message storage, and WebSocket functionality.
3. **AWS Lambda Functions**: Two AWS Lambda functions for adding numbers and uploading documents to an S3 bucket.

---

## Repository Structure
```plaintext
.
├── frontend/                   # Frontend responsive webpage project
│   ├── index.html              # HTML file
│   ├── assets/                 # Assets directory
│   │   ├── style.css           # Styling for the webpage
│   │   └── script.js           # JavaScript functionality
├── django_chat_app/                # Django real-time chat application
│   ├── chat/                   # Django application folder
│   ├── db.sqlite3              # SQLite database file
│   ├── manage.py               # Django management script
│   ├── requirements.txt        # Python dependencies
│   ├── static/                 # Static files for the Django app
│   ├── templates/              # HTML templates for the Django app
├── AWS_Lambda/                 # Directory for AWS Lambda functions
│   ├── Add_Two_Numbers/        # Directory for the Lambda function that adds two numbers
│   │   └── lambda_function.py  # Script for the Lambda function
│   ├── Upload_TO_S3/           # Directory for the Lambda function that uploads a document to an S3 bucket
│   │   └── lambdafunction.py   # Script for the Lambda function
└── README.md                   # Main repository instructions
```

---

## Frontend Responsive Webpage
### Features
- Fixed navbar that remains static during scrolling.
- Three sections:
  - Collapsible left menu.
  - Main content area.
  - Right-side panel.
- Responsive design with scaling:
  - Adjusts the page size based on screen width.

---

## Django Chat Application
### Features
- User sign-up and login.
- Collapsible left menu displaying all registered users.
- Real-time chat using WebSockets.
- Old messages are stored and retrieved from the database.
- User-friendly chat interface.
---

## AWS Lambda Functions
### Features
1. **Add Numbers**:
   - An AWS Lambda function designed to accept two numerical inputs and return their sum.

2. **Upload Document to S3**:
   - An AWS Lambda function that facilitates the uploading of documents or PDFs to an S3 bucket.

