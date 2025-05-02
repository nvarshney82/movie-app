# Movie Tutorial React App

This project is a movie application built using React and Vite. It allows users to browse movies, view details, and manage a list of their favorite movies. The app is designed to demonstrate the use of React components, context, and routing.

## Features

- **Home Page**: Displays a list of movies fetched from an API.
- **Favorites Page**: Allows users to view and manage their favorite movies.
- **Navigation**: Includes a responsive navigation bar for easy access to different pages.
- **Context API**: Manages global state for the application.
- **CSS Styling**: Custom styles for a polished user interface.

## Project Structure

The project is organized as follows:

```
src/
  App.jsx          # Main application component
  main.jsx         # Entry point of the application
  assets/          # Static assets like images
  components/      # Reusable components (e.g., NavBar, MovieCard)
  contexts/        # Context API for state management
  css/             # CSS files for styling
  pages/           # Page components (e.g., Home, Favorites)
  services/        # API service for fetching movie data
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd movie_tutorial
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Technologies Used

- React
- Vite
- React Router
- Context API
- CSS

## License

This project is licensed under the MIT License. See the LICENSE file for details.
