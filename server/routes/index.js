import express from 'express';
import { renderPage } from '../middleware';

const router = express.Router();

router.get('/', renderPage, (req, res) => {
  const { content, preloadedState } = res.locals;
  //res.render('index', { content, preloadedState });
  res.render('error');
});

export default router;
