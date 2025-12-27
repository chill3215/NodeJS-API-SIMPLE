import express from 'express';
import { StatusCodes } from 'http-status-codes';
import userService from './services/user.service';
import {expressYupMiddleware} from 'express-yup-middleware';
import {addUser, updateUser, getUser, deleteUser} from "./user.schema";
import userController from './controllers/user.controller';

const router = express.Router();


//express.json: middleware, allow to read json from the request body
router.use(express.json());

router.get('/all', userController.getAllUsers);

router.get('/:id',
    expressYupMiddleware({ schemaValidator: getUser, expectedStatusCode: StatusCodes.BAD_REQUEST}),
    userController.getUser);

router.post(
    '/',
    expressYupMiddleware({ schemaValidator: addUser, expectedStatusCode: StatusCodes.BAD_REQUEST}),
    userController.createUser
);

router.put(
    '/:id',
    expressYupMiddleware({ schemaValidator: updateUser}),
    userController.updateUser
);

router.delete(
    '/:id',
    expressYupMiddleware({ schemaValidator: deleteUser}),
    userController.deleteUser)

export default router;