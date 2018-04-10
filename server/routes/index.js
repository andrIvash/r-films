import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../../src/js/components/App';
import pug from 'pug';

const router  = express.Router();

router.get('/', (req, res) => {
  const body = renderToString(<App/>);
  res.render('index', { body })
});

export default router;
