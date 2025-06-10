# Menument Client

This folder contains the **frontend client** of the Menument application. It is a modern React-based web application, bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and extended with a custom Webpack configuration for more granular control over the build process.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Development Setup](#development-setup)
- [Environment Variables](#environment-variables)
- [Dependencies](#dependencies)
- [Customization](#customization)
- [Accessibility & TODOs](#accessibility--todos)
- [Learn More](#learn-more)

---

## Project Structure

```
client/
│
├── .babelrc              # Babel configuration for ES6+ and React
├── .env                  # Environment variables for the client
├── .gitignore            # Git ignore rules for node_modules, build, etc.
├── README.md             # This documentation file
├── package.json          # Project metadata, scripts, and dependencies
├── package-lock.json     # Exact dependency versions
├── public/               # Static assets (favicon, index.html, etc.)
├── src/                  # Main React application source code
└── webpack.config.js     # Custom Webpack configuration
```

---

## Available Scripts

In the `client` directory, you can run:

- **`npm start`**  
  Starts the app in development mode using Webpack Dev Server.  
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- **`npm test`**  
  Runs the test suite in interactive watch mode.

- **`npm run build`**  
  Builds the app for production to the `build/` folder, minifying files and optimizing performance.

- **`npm run eject`**  
  Exposes the Create React App configuration. **This is irreversible!**

- **`npm run clean`**  
  Removes the `dist/` directory (useful for cleaning up build artifacts).

---

## Development Setup

1. **Install dependencies:**
   ```bash
   cd client
   npm install
   ```

2. **Create a `.env` file:**
   - Copy `.env.example` if available, or create a new `.env` file for environment-specific values (API endpoints, feature flags, etc).

3. **Start the development server:**
   ```bash
   npm start
   ```
   The client will proxy API requests to `http://localhost:5000` (configured in `package.json`).

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## Environment Variables

- Add your custom environment variables in the `.env` file.
- Typical variables include API URLs, feature flags, analytics keys, etc.
- **Note:** Never commit sensitive secrets to this file.

---

## Dependencies

- **Core:**  
  `react`, `react-dom`, `react-router-dom`, `redux`, `@reduxjs/toolkit`, `axios`
- **Dev tools:**  
  `webpack`, `babel`, `sass`, `eslint`, `style-loader`, `css-loader`
- **Testing:**  
  Integrated via Create React App (`react-scripts test`).

See [`package.json`](./package.json) for the full list.

---

## Customization

- **Webpack:**  
  The project uses a custom `webpack.config.js` for advanced bundling, code splitting, and asset management.

- **Babel:**  
  Configured via `.babelrc` to support the latest JavaScript and React features.

- **Linting:**  
  ESLint is set up with React and Jest presets.

---

## Accessibility & TODOs

This project is actively developed. Notable TODOs and enhancement ideas:

- Add a custom React hook
- Improve keyboard navigation for autocomplete options (accessibility)
- Explore use of Higher Order Components (HOCs)
- Complete the "Edit Category" feature (toggle input/prompt for editing, connect to API)

---

## Learn More

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
- [Webpack Documentation](https://webpack.js.org/concepts/)
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)

---

## License

This project is licensed under the ISC License.

---

## Author

[JayeshTiwari03](https://github.com/JayeshTiwari03)
