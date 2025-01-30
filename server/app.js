// 'Import' the Express module instead of http
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import ordersRouter from './routers/orders.js';
import menuItem from './routers/menuItems.js';
import resturant5 from './routers/resturant5.js';
import contact from './routers/contact.js';


// Load environment variables from .env file
dotenv.config();

// get the PORT from the environment variables, OR use 4040 as default
const PORT = process.env.PORT || 4040;
// Initialize the Express application
const app = express();

// Connect to MONGODB
mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${new Date().toLocaleString("en-us")}`);
  next();
};


// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(cors);
app.use(express.json());
app.use(logging);

// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
   // Create the headers for response by default 200
   // Create the response body
   // End and return the response
  response.send(JSON.stringify({ message: "Service healthy" }));
});

app.use("/orders", ordersRouter);
app.use("/resturant5", resturant5);
app.use("/menuItems", menuItem);
app.use("/contact", contact);


// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


