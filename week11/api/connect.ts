import { Router, Application } from 'express';
import authController from './auth/auth-controller';
import personsController from './persons/persons-controller';
const router = Router();

export function connect(app: Application, path: string): void { //'/api'
	router.use('/auth', authController);
	router.use('/persons', personsController);

	app.use(path, router);
}