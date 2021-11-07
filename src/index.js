import app from "./app";
import { PORT } from "./config";

// database
import "./config/mongoose";

// Starting the server
app.listen(PORT);
console.log("Server on port", app.get("port"));
