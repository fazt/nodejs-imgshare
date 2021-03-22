import app from "./app";

// database
import "./config/mongoose";

// Starting the server
app.listen(app.get("port"));
console.log("Server on port", app.get("port"));
