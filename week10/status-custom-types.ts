import { Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken';

import { AuthorizedUserRequest } from '../models/authorized-user-request';
import { User } from '../models/user';

type Unauthorized = 401;
type UnauthorizedAndForbidden = 403 | Unauthorized;
type UnauthorizedAndForbiddenAndNotFoundStatusCode = 404 | UnauthorizedAndForbidden;


let statusCodes: 401 | 404;

let unauthorizedStatusCode: Unauthorized;

let unauthorizedAndForbiddenStatusCode: UnauthorizedAndForbidden;
let unauthorizedAndForbiddenAndNotFoundStatusCode: UnauthorizedAndForbiddenAndNotFoundStatusCode;

export function verifyTokenMiddleware(req: AuthorizedUserRequest, res: Response, next: NextFunction)
	: Response<any, Record<string, any>> {

	unauthorizedAndForbiddenStatusCode = 401;
	unauthorizedAndForbiddenStatusCode = 403;
	unauthorizedAndForbiddenAndNotFoundStatusCode = 500; // type error

	const authHeader = req.headers.authorization;
	const token = authHeader && authHeader.split(' ').pop();

	next();
}