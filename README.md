# Landing Page Project

This project is a technical test for a job interview. It is a responsive landing page with register/login functionality built using modern tools and frameworks such as Vue.js, Vue Router, Pinia, Axios, and Vitest for unit testing. The project is configured to run in a Docker container but can also run locally with Node.js 23 if Docker is not available.

---

## Features

- **Responsive Design:** Built with Tailwind CSS for efficient and customizable styling.
- **Authentication:** Includes login and registration using the [Reqres API](https://reqres.in).
- **State Management:** Pinia is used for reactive and centralized state management.
- **Testing:** Unit tests written with Vitest to ensure code quality and reliability.
- **JWT Token Handling:** Axios is used for API calls and managing authentication tokens.

---

## Endpoints Used

### Reqres API Endpoints

1. **Register Endpoint**  
   - URL: `https://reqres.in/api/register`  
   - Method: `POST`  
   - Request Payload:  
     ```json
     {
       "email": "user@example.com",
       "password": "password123"
     }
     ```
   - Response:
     ```json
     {
       "id": 4,
       "token": "QpwL5tke4Pnpja7X"
     }
     ```

2. **Login Endpoint**  
   - URL: `https://reqres.in/api/login`  
   - Method: `POST`  
   - Request Payload:  
     ```json
     {
       "email": "user@example.com",
       "password": "password123"
     }
     ```
   - Response:
     ```json
     {
       "token": "QpwL5tke4Pnpja7X"
     }
     ```

---

## Technologies Used

1. **Vue 3:** A progressive JavaScript framework for building user interfaces.
2. **Vue Router:** Handles navigation between pages (e.g., Login, Register, Home).
3. **Pinia:** The recommended state management library for Vue 3, enabling easy and reactive state management.
4. **Axios:** A promise-based HTTP client used for API requests and handling JWT tokens efficiently.
5. **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
6. **Vitest:** A fast and lightweight testing framework designed for modern JavaScript applications.
7. **Docker:** Used to containerize the application for easy deployment and consistent environment setup.

---

## Setup Instructions

### Using Docker (Recommended)

1. Clone the repository, and enter to the project folder.
2. Start container: `docker compose up -d`.
3. Access container's terminal: `docker exec -it practice sh`.
4. Install dependencies and start dev server: `npm install` and `npm run dev`.


### Without Docker (Using Node.js 23)
1. Clone the repository, and enter to the project folder.
2. Install dependencies and start dev server: `npm install` and `npm run dev`.

The application should be visible in: `http://localhost:5173`

## Testing

`npm run test`