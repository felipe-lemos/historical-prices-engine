import { Router } from 'express';
import { logger } from '../utils/logger.utils';
import { post } from '../controllers/service.controller';

const serviceRouter = Router();

serviceRouter.post('/', (req, res) => {
  logger.info('Service post message received');
  logger.info('Request body: ' + JSON.stringify(req.body));
   res.status(200).end();
   /**
  try {
    post(req, res);
  } catch (error) {
    next(error); 
  }
     */
});

export default serviceRouter;