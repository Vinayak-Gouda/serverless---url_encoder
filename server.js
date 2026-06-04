// src/app.js
import database from "./src/config/database.js";

await database.connect();

console.log("Application started");