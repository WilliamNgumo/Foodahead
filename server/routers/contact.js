import { Router, urlencoded } from 'express';
import sendGrid from "@sendgrid/mail";
import textEmail from '../template/textEmail.js';


const router = Router();

router.post("/", async (request, response) => {
  try {
    const emailContent = request.body;
    sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
    const adminEmail = process.env.SENDGRID_EMAIL;
    const message = {
      to: adminEmail,
      from: adminEmail,
      subject: `Email from foodAhead from ${emailContent.name}`,
      text: textEmail(request.body)
    }

    sendGrid.send(message)
      .then(() => {
        // console.log(response[0].statusCode)
        // console.log(response[0].headers)
        console.log(response.status);
      })
      .catch((error) => {
        console.log("error with sendGrid send method",error)
      })
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ('name' in error && error.name === 'ValidationError')
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
