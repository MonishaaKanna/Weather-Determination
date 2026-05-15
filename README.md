# Weather-Determination



Step 1 — Project Setup

A project folder named `weather-dashboard` was created. Inside the folder, three files were created:

* `index.html`
* `style.css`
* `script.js`

These files were used for the structure, design, and functionality of the application.

Step 2 — Designing the User Interface

The basic layout of the weather dashboard was created with:

* a heading,
* a search input box,
* a search button,
* and a weather information section.

The weather section was designed to display:

* city name,
* temperature,
* weather condition,
* humidity,
* wind speed,
* and weather icon.

Step 3 — Styling the Application

The application interface was styled using a glassmorphism design. A centered container with blur effects, rounded corners, spacing, shadows, and responsive alignment was added to make the application visually attractive. Background images were set to cover the entire screen for a modern appearance.

Step 4 — Connecting the Weather API

A free API key was generated from:
[OpenWeatherMap](https://openweathermap.org/api?utm_source=chatgpt.com)

The API was connected to the project to fetch live weather information for any city entered by the user.

Step 5 — Implementing Search Functionality

The application was programmed to:

1. Read the city name entered by the user.
2. Send a request to the weather API.
3. Receive weather data from the server.
4. Display the results dynamically on the dashboard.

The search button and Enter key were both enabled for user convenience.

Step 6 — Displaying Weather Information

After receiving the API response, the application displayed:

* current temperature,
* weather description,
* humidity percentage,
* wind speed,
* and the matching weather icon.

The displayed information updated automatically whenever a new city was searched.

 Step 7 — Adding Dynamic Backgrounds

The weather condition received from the API was used to change the website background dynamically. Different backgrounds were added for:

* sunny weather,
* cloudy weather,
* rain,
* thunderstorms,
* snow,
* and fog.

This made the application more interactive and visually engaging.

Step 8 — Error Handling

Validation was added to handle incorrect inputs and invalid city names. Alerts were shown if:

* the city field was empty,
* the city was not found,
* or the API request failed.

This improved the usability and reliability of the project.

Step 9 — Testing the Application

The project was tested using different city names such as:

* Chennai,
* London,
* Tokyo,
* and New York.

The dashboard successfully displayed live weather data and changed backgrounds according to the weather conditions.

 Step 10 — Final Outcome

The completed Weather Dashboard became a fully functional real-time weather application with:

* live weather updates,
* dynamic backgrounds,
* modern UI design,
* responsive layout,
* and interactive user experience.
