import React from 'react';
import AddUserFormik from "./AddUserFormik/AddUserFormik";
import axios from "axios";
import ApiUrls from "../../config/ApiUrls";

const AddUserFormikContainer = ({handleNewUser}) => {
    const AddUser = (values) => {
        const result = axios.post(ApiUrls.API_URL_USERS, values).then(resp => {
            handleNewUser(resp.data);
            return true;
        }).catch(error=>{
            return false;
        });
        return result;
    }

    return (
        <AddUserFormik AddUser={AddUser}/>
    );
};

export default AddUserFormikContainer;