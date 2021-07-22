import UserTable from "./components/UserTable/UserTable";
import React from "react";
import UserTablePagination from './components/UserTablePagination/UserTablePagination';
import AddUserFormikContainer from "./components/AddUserFormikContainer/AddUserFormikContainer";
import FilterUserFormikContainer from "./components/FilterUserFormikContainer/FilterUserFormikContainer";
import {UsersContextProvider} from "./components/UsersContextProvider";
import {UserTableContextProvider} from './components/UsersTableContextProvider'

function App() {

    return (
        <div className="container">
            <UsersContextProvider>
                <UserTableContextProvider>
                    <AddUserFormikContainer/>
                    <FilterUserFormikContainer/>
                    <UserTable/>
                    <UserTablePagination/>
                </UserTableContextProvider>
            </UsersContextProvider>
        </div>
    );
}

export default App;

