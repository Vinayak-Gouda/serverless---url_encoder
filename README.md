# serverless---url_encoder

# URL Encoder Service

A serverless URL shortening and redirection service built using AWS Lambda, Node.js, Sequelize ORM, and Neon PostgreSQL.

## Features

* Create short URLs from long URLs
* Redirect users to the original URL using the generated short code
* Serverless architecture using AWS Lambda
* PostgreSQL database hosted on Neon
* Sequelize ORM for database operations
* RESTful API endpoints
* Easy deployment using Serverless Framework

## Tech Stack

* Node.js
* AWS Lambda
* Serverless Framework
* PostgreSQL
* Neon Database
* Sequelize ORM

## Project Structure

```
├── handlers/
│   ├── createUrl.js
│   └── redirectUrl.js
├── models/
├── migrations/
├── services/
├── repositories/
├── config/
├── serverless.yml
├── package.json
└── README.md
```

## API Endpoints

### Create Short URL

**Endpoint**

```
POST /urls
```

**Request Body**

```json
{
  "data":{
    "originalUrl": "https://www.example.com"
  }
}
```

**Response**

```json
{
  "shortCode": "abc123"
}
```

### Redirect URL

**Endpoint**

```
GET /{shortCode}
```

**Example**

```
GET /abc123
```

The service looks up the short code in the database and redirects the user to the original URL.

## Database

This project uses Neon PostgreSQL as the primary database.

### URL Table

| Column       | Type      | Description       |
| ------------ | --------- | ----------------- |
| id           | UUID      | Primary Key       |
| original_url | TEXT      | Original URL      |
| short_code   | VARCHAR   | Unique Short Code |
| created_at   | TIMESTAMP | Creation Time     |
| updated_at   | TIMESTAMP | Update Time       |

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd url-encoder
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
DB_HOST=
DB_PORT=
DB_NAME=
DB_USERNAME=
DB_PASSWORD=
DATABASE_URL=
```

### Run Database Migrations

```bash
npx sequelize-cli db:migrate or make migrate
```

### Run Locally

```bash
npx serverless offline
```

The API will be available locally after the server starts.

## Deployment

Deploy to AWS Lambda using Serverless Framework:

```bash
serverless deploy
```

After deployment, Serverless Framework will provide the API Gateway endpoint.

## Architecture

```
Client
   │
   ▼
API Gateway
   │
   ▼
AWS Lambda
   │
   ▼
Service Layer
   │
   ▼
Repository Layer
   │
   ▼
Neon PostgreSQL
```

## Future Enhancements

* User authentication and authorization
* URL analytics and click tracking
* Custom short URLs
* URL expiration support
* Rate limiting
* QR code generation

## Author

Vinayak Gouda
