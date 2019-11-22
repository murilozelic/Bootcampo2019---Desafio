import { Router } from 'express';

// import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import GymPlanController from './app/controllers/GymPlanController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// Aplicacao nao ira possuir user controller
// routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/students', StudentController.store);
routes.put('/students', StudentController.update);
routes.get('/students', StudentController.index);
routes.delete('/students', StudentController.delete);
// routes.put('/users', UserController.update);

routes.get('/gymplans', GymPlanController.index);
routes.post('/gymplans', GymPlanController.store);

export default routes;
