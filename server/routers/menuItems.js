import { Router } from  'express';
import MenuItem from '../models/MenuItem.js';

const router = Router();

// Create Order route
router.post("/", async (request, response) => {
  try {
    const menuItem = new MenuItem(request.body);

    const data = await menuItem.save();

    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ('name' in error && error.name === 'ValidationError')
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
