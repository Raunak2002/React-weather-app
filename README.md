# Weather App

Welcome to the Weather App! This is a dynamic weather application that allows users to fetch weather data for cities and countries, mark favorite cities, and toggle between dark and light themes. The app also provides temperature conversion functionality between Celsius and Fahrenheit. The data is fetched using Redux for efficient state management.

![Weather App Screenshot](screenshot.png)

## Features

- Dynamic weather data from API: The app fetches real-time weather data from a weather API based on the selected city and country.

- City & Country wise weather data: Users can enter the name of the city and country to fetch the corresponding weather data.

- Sign In/Sign Out: Users can sign in to access additional features like saving favorite cities and syncing preferences across devices.

- Favorites Cities (Requires Sign In): Users can mark cities as favorites only after signing in. Once signed in, the option to mark a city as a favorite will be available. These favorite cities will be displayed on a separate page for quick access.

- Dark Theme: The app supports a dark theme for better visibility during nighttime usage.

- Temperature Converter: Users can switch between Celsius and Fahrenheit to view temperature readings in their preferred units.

## Tech Stack

- React: Front-end user interface is built using the React library.

- Redux: State management for weather data and user preferences.

- Axios: Library for making API requests.

- Firebase (optional): Used for user authentication and saving favorite cities.

## Setup Instructions

1. Clone the repository and navigate to the project folder.

2. Install dependencies using npm or yarn:

```bash
npm install
```

3. Set up your environment variables:

   - Create a `.env` file based on the `.env.example` file provided.
   - Add your weather API key and any other necessary configurations.

4. Start the development server:

```bash
npm start
```

5. Open your browser and go to `http://localhost:3000` to view the app.

## How to Use

1. Home Page:
   - Enter the city name and country code in the input fields.
   - Click the "Fetch Weather" button to get the current weather data.

2. Sign In/Sign Out:
   - Click the "Sign In" button to authenticate and access additional features.
   - After signing in, the "Sign Out" option will be available in the user menu.

3. Favorites Cities:
   - After signing in, click on the "Add to Favorites" button (heart icon) on the weather card to mark a city as a favorite.
   - Go to the "Favorites" page to see all your favorite cities.

4. Theme:
   - Toggle between dark and light themes using the theme switcher in the user menu.

5. Temperature Conversion:
   - Switch between Celsius and Fahrenheit using the temperature unit switcher.

Please note that the "Favorites Cities" feature requires the user to sign in to access. If a user is not signed in, they won't be able to mark cities as favorites. The favorite cities functionality is tied to the user's account and will be saved and retrieved from the database accordingly.

