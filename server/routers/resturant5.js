import { Router } from  'express';
import Order from '../models/Order.js';
import MenuItem from '../models/MenuItem.js';

const router = Router();


  // Get all Order route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await MenuItem.find(query);

    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

  export default router;
