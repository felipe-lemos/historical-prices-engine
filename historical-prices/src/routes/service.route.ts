import { Router } from 'express';
import { logger } from '../utils/logger.utils';
//import { post } from '../controllers/service.controller';
import { apiSuccess } from '../api/success.api';

const serviceRouter = Router();

serviceRouter.post('/', (req, res) => {
  logger.info('Service post message received');
  logger.info('Request body: ' + JSON.stringify(req.body));
  apiSuccess(
    200,
    [
      {
        action: 'setFirstName',
        firstName: 'Dummy',
      },
    ],
    res
  );

  /**
  try {
    post(req, res);
  } catch (error) {
    next(error); 
  }
     */
});

export default serviceRouter;
