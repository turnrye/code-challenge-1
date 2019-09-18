This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Code challenge instructions

This React application is a really, really simple web UI for a product listing on an ecommerce website. We have the following new requirement with some technical implementation notes. Please submit a PR to this repository with the implementation.

As a customer looking for advice on products, I want to be able to see the average rating of a product so that I can better determine if the product is right for my needs.

- Use a 5 star scale for the average rating
- Have a small note indicating how many ratings are in the average
- Don't slow down the page load for this; add it as the data comes in along the way

The backend team has made an API to help with this, which is available with the following swagger API specification here:

```yaml
swagger: "2.0"
info:
  version: "0.0.0"
  title: "Mock Product"
  license:
    name: "UNLICENSED"
host: "mock-products.free.beeceptor.com"
basePath: "/"
schemes:
- "https"
paths:
  /ratings/{sku}:
    get:
      summary: "Get the summary ratings for a given sku"
      description: ""
      operationId: "addPet"
      produces:
      - "application/json"
      parameters:
      - in: "path"
        name: "sku"
        description: "The sku of the product to get ratings for"
        required: true
        type: string
      responses:
        200:
          description: "successful operation"
          schema:
            $ref: "#/definitions/Rating"
definitions:
  Rating:
    type: "object"
    properties:
      averageRating:
        type: "number"
      numberOfRatings:
        type: "integer"
```

Note though that the only product implemented in this API is the one currently hardcoded in App.js with sku "46B24R-AGM".

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
