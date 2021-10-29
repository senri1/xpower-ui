import express from 'express';
export const router = express.Router();

/** GET home page. */
router.get('/', (req, res) => {
  res.render('home/home.pug');
});
export default router;
