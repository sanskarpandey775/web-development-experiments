# MERN capstone application

This folder contains a working MERN-style notes application skeleton with React client code and an Express/Mongoose server.

- `client/`: React UI using Vite
- `server/`: Express routes and Mongoose model
- MongoDB: notes collection with Mongoose
- Authentication: hashed passwords and short-lived JWTs
- Deployment: host the client and API separately, then configure the client API URL with an environment variable

API: `GET/POST /api/notes`, `PUT/DELETE /api/notes/:id`.

Before deployment, configure CORS, validation, rate limiting, HTTPS, secure cookies, and environment variables. Never use the development MongoDB connection in production.
