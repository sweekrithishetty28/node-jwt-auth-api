# node-jwt-auth-api

A minimal **Node.js + Express** backend demonstrating JWT authentication with MongoDB. Built as a clean reference for cookie-based token auth in REST APIs.

## Features

- User registration with email uniqueness check
- JWT token generation (24h expiry)
- Token stored in HTTP cookie
- Protected route via JWT middleware
- MongoDB via Mongoose

## Tech Stack

| Layer | Tech |
|-------|------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB + Mongoose |
| Auth | JSON Web Tokens (jsonwebtoken) |
| Cookie Parsing | cookie-parser |
| Config | dotenv |

## Project Structure

```
├── server.js
└── src/
    ├── app.js
    ├── db/
    │   └── db.js
    ├── models/
    │   └── user.model.js
    ├── routes/
    │   ├── auth.routes.js
    │   └── post.route.js
    └── controllers/
        └── auth.controller.js
```

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)

### Installation

```bash
git clone https://github.com/your-username/node-jwt-auth-api.git
cd node-jwt-auth-api
npm install
```

### Environment Variables

Create a `.env` file in the root:

```env
MONGO_URI=mongodb://localhost:27017/your-db-name
JWT_SECRET=your_super_secret_key
```

### Run

```bash
node server.js
# Server running on http://localhost:3000
```

## API Reference

### Register User

```http
POST /api/auth/register
Content-Type: application/json

{
  "userName": "john",
  "email": "john@example.com",
  "password": "secret123"
}
```

**Response `201`**
```json
{
  "message": "User registered successfully",
  "user": { ... },
  "token": "<jwt_token>"
}
```

### Create Post *(Protected)*

```http
POST /api/posts/create
```

> Requires a valid `token` cookie (set automatically after registration).

**Response `200`**
```
Post created Successfully
```

**Response `401`** — token missing or invalid.

## Security Notes

- Passwords are stored in plain text — add `bcrypt` before production use
- Add `httpOnly: true, secure: true` to `res.cookie()` in production
- Extract JWT check into reusable middleware as routes grow

## License

MIT
