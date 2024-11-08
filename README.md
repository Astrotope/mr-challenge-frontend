# Getting Started with Create React App - Typescript Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Development Steps:

(1) npx create-react-app email-registration-app

(2) cd email-registration-app

(3) modify src/App.js and save [src/App.js](https://github.com/Astrotope/mr-challenge-frontend/blob/main/src/App.js)
  * set-up state variables for email, and message using the hook useState, and initialise them to "". The update value functions for email, and message will be setEmail, and setMessage.
  * the App component will re-render on changes to the state.
  * add handleSubscribe funciton
    * use try catch
    * POST JSON payload with 'email' address to backend /api/register endpoint
      * https://mr-challenge-backend.onrender.com/api/register
    * await response, and collect data from response
    * set the message to data.message using setMessage. This should trigger the App component to re-render.
    * if error occurs, setMessage to "An error occurred. Please try again."
  * return the JSX to be rendered.
    * the subscribe button has an onClick handler which triggers the handleSubscribe function call.
    * the unicorn image is statically served/displayed from the from the ../public directory
    * the message div is conditionally rendered, if message is not empty.
      * the div's contents will be the message returned by the back-end API, or an error message.

(4) npm start

TODO: follow this guide to deploy to GitHub Pages [Publish React to GitHub](https://create-react-app.dev/docs/deployment/#github-pages)

