import { Router } from  'express';
import Order from '../models/Order.js';


const router = Router();


// Create Order route
router.post("/", async (request, response) => {
    try {
      const newOrder = new Order(request.body);

      const data = await newOrder.save();

      response.json(data);
    } catch(error) {
      // Output error to the console incase it fails to send in response
      console.log(error);

      if ('name' in error && error.name === 'ValidationError')
        return response.status(400).json(error.errors);

      return response.status(500).json(error.errors);
    }
  });
  // Get all Order route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}
    console.log(query);

    const data = await Order.findById(query);

    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

  export default router;
