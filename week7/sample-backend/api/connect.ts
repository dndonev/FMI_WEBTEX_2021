import { Router, Application } from 'express';
import authController from './auth/auth-controller';
import filesController from './files/files-controller';
const router = Router();

export function connect(app: Application, path: string): void { //'/api'
	router.use('/auth', authController);
	router.use('/files', filesController);

	app.use(path, router);
}