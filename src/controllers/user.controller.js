import userService from "../services/user.service";
import {StatusCodes} from "http-status-codes";
import pino from "pino";

const logger = pino();

const STATUS = {
    success: 'OK',
    failure: 'NO'
};

const getAllUsers = (req, res) => {
    const users = userService.getAllUsers();
    if (users.length) {
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            message: users
        });
    }
    return res.status(StatusCodes.NO_CONTENT).send({
        status: STATUS.failure,
        message: 'No user has been created'
    });

};

const getUser = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const foundUser = userService.getUser(id);

    if (foundUser) {
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            message: foundUser
        });
    }
    return res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: `User ${id} is not found`
    });
}

const createUser = (req, res) =>{
    //const data = [];

    // user = req.body
    const { body : user } = req;

    const addedUser = userService.addUser(user);

    logger.info("User created");

    return res.status(StatusCodes.CREATED).send({
        status: STATUS.success,
        //data,
        message: addedUser
    });
}

const updateUser = (req, res) => {
    //const data = [];
    //take the right, find the property body and store it onto user
    const {body: user} = req;

    const id = parseInt(req.params.id, 10);
    const updatedUser = userService.updateUser(id, user);

    if (updatedUser) {
        logger.info("User updated");
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            //data,
            message: updatedUser
        });
    } else {
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.success,
            //data,
            message: `User ${id} not found `
        });
    }
}

const deleteUser = (req, res) => {
    const { params} = req;
    const id = parseInt(params.id);
    const user = userService.getUser(id);
    let response;

    if (user) {
        userService.removeUser(id);
        response = {
            status: STATUS.success,
            message: `User ${id} has been deleted`
        };
    }else{
        response = {
            status: STATUS.failure,
            message: `User ${id} hasn't been found`
        };
    }
    return res.status(StatusCodes.OK).send(response);
};

export default { getAllUsers, getUser,updateUser, createUser, deleteUser}