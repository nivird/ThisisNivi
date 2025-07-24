// backend/routes/api.js
import { Router } from 'express';

const router = Router();

// ➤ Contact form API route
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  console.log('📨 New contact form submission:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  res.status(200).json({ message: 'Message received!' });
});

export default router;
