import users from "../data/users.data";
import usersData from "../data/users.data";
import userService from "../../services/user.service";
import * as constants from "node:constants";

const insert = (details) => {
    const newUser = {...details, id: users.length + 1}; //copy all attributes, add or overwrite one attribute
    users.push(newUser);
    return newUser;
};

const get = (userId) =>  users.find((user) => user.id === userId);


const remove = (userId) => {
    const index = users.findIndex(user => user.id === userId);
    if (index === -1) {
        return false;
    }
    users.splice(index, 1);
    return true;
}

const update = (userId, newDetails) => {
    let existingUser = null;
    let userIndex;
    //wrong code, find(user => user.id === userId) or foreach
    users.map((user, index)=> {
        if (user.id === userId) {
            existingUser = user;
            userIndex = index;
        }
    })
    if (!existingUser) {
        return false;
    }
    //add (for non existing key) or update (for existing key in json) attribute
    const updatedUser = {...existingUser, ...newDetails};
    users.splice(userIndex, 1, updatedUser);
    return updatedUser;
}

const getAll = () => {
    return users;
}
export default {
    insert,
    get,
    remove,
    update,
    getAll
}