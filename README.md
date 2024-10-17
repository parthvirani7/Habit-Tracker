# Habit Tracker Backend

This is a backend API for managing user data, habit logs, and habit tracking for a habit management application.

## Features
- User authentication with JWT
- Role-based access (Admin and User)
- CRUD operations for habits, including tracking streaks, daily progress, and frequency settings
- Daily reminder notifications for pending habits

## Getting Started

1. **Clone the repository:**

2. **Install dependencies:**

3. **Set up environment variables:**

4. **Start the server:**
  
5. **API Documentation:**

## Endpoints Overview

- **User Authentication**
  - `POST /api/auth/register`: Register a new user
  - `POST /api/auth/login`: Login a user and receive a JWT

- **Habit Management**
  - `GET /api/habits`: Get all habits
  - `POST /api/habits`: Create a new habit
  - `PUT /api/habits/:id`: Update an existing habit
  - `DELETE /api/habits/:id`: Delete a habit
