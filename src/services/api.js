import axios from "axios";

const api = axios.create({
  baseURL: "https://reqres.in/api/",
  timeout: 5000, // Set the timeout to 5 seconds.
  headers: {
    "Content-Type": "application/json",
  },
});

/*
Endpoints disponibles: Utiliza la API de prueba Reqres:
Registro: POST https://reqres.in/api/register
Login: POST https://reqres.in/api/login 
*/

// Request interceptors


// Response interceptors

export default api;