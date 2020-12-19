import { Router } from 'express';

import emojis from './emojis.js';
import faqs from './faqs.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/faqs', faqs);

export default router;
