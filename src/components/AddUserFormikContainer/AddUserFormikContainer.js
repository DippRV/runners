import React from 'react';
import AddUserFormik from "./AddUserFormik/AddUserFormik";
import DAL from "../../DAL/Users";

const AddUserFormikContainer = ({handleNewUser}) => {
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