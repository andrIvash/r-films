import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const { content, preloadedState } = res.locals;
  res.render('index', { content, preloadedState });
});

export default router;
