# Dog Adoption API

A Node.js REST API that allows users to register, authenticate, and manage dog adoptions. Built with Express and MongoDB Atlas.

## Setup

1. Clone the repository and install dependencies:

    ```bash
    npm install
    ```

2. Create a `.env` file in the root and add your MongoDB connection string and JWT secret (see `.env` sample).

3. Start the server:

    ```bash
    npm run dev
    ```

The server will run on `http://localhost:3000`.

## Running Tests

```bash
npm test
```

## API Endpoints

- `POST /api/auth/register` – Register a new user.
- `POST /api/auth/login` – Login and receive a JWT.
- `POST /api/dogs` – Register a dog (auth required).
- `POST /api/dogs/:id/adopt` – Adopt a dog (auth required).
- `DELETE /api/dogs/:id` – Remove a dog you own (auth required).
- `GET /api/dogs/my` – List your registered dogs (auth required).
- `GET /api/dogs/adopted` – List dogs you adopted (auth required).