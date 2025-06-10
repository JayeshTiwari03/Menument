# Menument Backend

> This README provides a detailed overview of the `backend` folder of the [Menument](https://github.com/JayeshTiwari03/Menument) project.  
> For more files and updates, explore the [backend directory on GitHub](https://github.com/JayeshTiwari03/Menument/tree/main/backend).

---

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [API Routes](#api-routes)
- [Dependencies](#dependencies)
- [Development Notes](#development-notes)
- [Additional Resources](#additional-resources)

---

## Overview

This folder contains the backend server code for Menument, a menu and beverage management application.  
The backend is built using Node.js with Express.js and MongoDB, and exposes RESTful APIs for menu items, categories, and beverages.  
File uploads (such as images) are supported via Multer and are served statically.

---

## Project Structure

```
backend/
├── .env               # Environment variable definitions (NOT for production use)
├── .vscode/           # VSCode workspace settings (optional)
├── images/            # (Likely) static or uploaded images
├── models/            # Mongoose database models (schemas)
├── package.json       # NPM dependencies and scripts
├── package-lock.json  # NPM lockfile
├── README.md          # This documentation
├── routes/            # Express API route handlers
├── server.js          # Main server entry point
├── uploads/           # Directory for uploaded files (images, etc.)
```

> **Note:**  
> This list may be incomplete, as GitHub API responses are limited to 10 results.  
> See the [full backend folder](https://github.com/JayeshTiwari03/Menument/tree/main/backend) for all files and updates.

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm
- MongoDB instance

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JayeshTiwari03/Menument.git
   cd Menument/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (see [.env](./.env) for template).

4. Start the server:
   ```bash
   node server.js
   # or, for development with auto-reload:
   npx nodemon server.js
   ```

The server runs on the port specified in `.env` (`PORT`, default: 5000).

---

## Environment Variables

Create a `.env` file in the backend directory. Example variables:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/your-db-name
```

- `PORT`: The port on which the server runs.
- `MONGO_URI`: MongoDB connection string.

**_Never commit confidential secrets to version control!_**

---

## Available Scripts

From `package.json`:

- `npm start` — Start the server.
- `npm run dev` — Start the server with nodemon (auto-reload).
- `npm test` — Placeholder (no tests defined yet).

---

## API Routes

The main API entrypoints (see `server.js`):

- `POST/GET /api/menu` — Menu item management (see `routes/menu.js`)
- `POST/GET /api/categories` — Category management (see `routes/categories.js`)
- `POST/GET /api/beverages` — Beverage management (see `routes/beverages.js`)
- `GET /uploads/:file` — Access uploaded files

All routes accept and return JSON.

---

## Dependencies

From [`package.json`](./package.json):

- express
- mongoose
- cors
- body-parser
- dotenv
- multer
- nodemon (dev)
- debug
- path

Install them via `npm install`.

---

## Development Notes

Typical steps to add new data models or APIs (from the original README):

1. Create a Schema instance in `models/`
2. Create router specs for APIs (`get`, `post`, etc.) in `routes/`
3. Add the new route in `server.js`

---

## Additional Resources

- [backend directory on GitHub](https://github.com/JayeshTiwari03/Menument/tree/main/backend)
- [server.js source](https://github.com/JayeshTiwari03/Menument/blob/main/backend/server.js)
- [package.json source](https://github.com/JayeshTiwari03/Menument/blob/main/backend/package.json)
