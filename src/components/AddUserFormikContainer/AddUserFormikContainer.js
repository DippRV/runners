import React from 'react';
import AddUserFormik from "./AddUserFormik/AddUserFormik";
import DAL from "../../DAL/Users";
import {useUserContext} from "../UsersContextProvider";

const AddUserFormikContainer = () => {
    const {handleNewUser} = useUserContext();
    const AddUser = async (values) => {
        const result = await DAL.addUser(values);
        let status = false;
        if (result) {
            handleNewUser(result);
            status = true;
        }
        return status;
    }

    return (
        <AddUserFormik AddUser={AddUser}/>
    );
};

export default AddUserFormikContainer;