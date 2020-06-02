import { Router } from 'express';

import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController';

const route = Router();

//index, show, create, update, delete
route.get('/items', ItemsController.index);

route.get('/points', PointsController.index)
route.get('/points/:id', PointsController.show)
route.post('/points', PointsController.create);

export default route;