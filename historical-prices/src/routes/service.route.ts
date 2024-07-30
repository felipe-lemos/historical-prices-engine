import { Router } from 'express';
import { logger } from '../utils/logger.utils';
import { post } from '../controllers/service.controller';

const serviceRouter = Router();

serviceRouter.post('/', (req, res, next) => {
  logger.info('Service post message received');
  logger.info('Request body: ' + JSON.stringify(req.body));
  return 200;
  try {
    post(req, res);
  } catch (error) {
    next(error); 
  }
});

export default serviceRouter;