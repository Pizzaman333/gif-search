# GIF Search App

A React-based web application for searching and displaying GIFs using the Giphy API.

## Project Structure
- `src/App.js`: Main component managing state and API calls.
- `src/components/`: Contains React class components (`GifSearch`, `GifList`, `GifItem`, `Button`, `Loader`, `Modal`).
- `src/styles/`: SCSS files with bold, explosive styling.
- `src/index.js`: Entry point for React rendering.

## Technologies
- **React**: Class-based components with lifecycle methods.
- **SCSS**: For vibrant, animated styling with gradients and hover effects.
- **Giphy API**: For GIF search and retrieval.
- **react-loader-spinner**: For loading animation.

## Usage
- Enter a search term in the search bar and submit.
- Browse GIFs in the list; click a GIF to view it in an animated modal.
- Use the "Load More" button to fetch additional GIFs.
- Close the modal with ESC or by clicking the overlay.