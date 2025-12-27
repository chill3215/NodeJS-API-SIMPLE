import * as yup from 'yup'
//obj is a constant but property is mutable
const MINIMUM_LENGTH = {
    name: 2,
    city: 1,
    country: 2
}

const  MAXIMUM_LENGTH = {
    name: 20,
    city: 30,
    country: 30
}

export const addUser = {
    schema: {
        body: {
            yupSchema: yup.object().shape({
                name: yup.string().required().min(MINIMUM_LENGTH.name).max(MAXIMUM_LENGTH.name),
                email: yup.string().email(),
                city: yup.string().min(MINIMUM_LENGTH.city).max(MAXIMUM_LENGTH.city),
                country: yup.string().min(MINIMUM_LENGTH.country).max(MAXIMUM_LENGTH.country)
            })
        }
    }
}
export const updateUser = {
    schema: {
        body: {
            yupSchema: yup.object().shape({
                name: yup.string().required().min(MINIMUM_LENGTH.name).max(MAXIMUM_LENGTH.name),
                email: yup.string().email(),
                city: yup.string().min(MINIMUM_LENGTH.city).max(MAXIMUM_LENGTH.city),
                country: yup.string().min(MINIMUM_LENGTH.country).max(MAXIMUM_LENGTH.country)
            })
        }
    }
}

export const getUser = {
    schema: {
        params: {
            yupSchema: yup.object().shape({
                id: yup.number().required()
            })
        }
    }
}
export const deleteUser = {
    schema: {
        params: {
            yupSchema: yup.object().shape({
                id: yup.number().required()
            })
        }
    }
}

export default {addUser, updateUser};