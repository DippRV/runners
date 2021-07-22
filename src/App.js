import UserTable from "./components/UserTable/UserTable";
import React, {useState, useEffect} from "react";
import UserTablePagination from './components/UserTablePagination/UserTablePagination';
import AddUserFormikContainer from "./components/AddUserFormikContainer/AddUserFormikContainer";
import FilterUserFormikContainer from "./components/FilterUserFormikContainer/FilterUserFormikContainer";
import DAL from './DAL/Users'

function App() {
    const [Users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 5;
    const pagesVisited = pageNumber*usersPerPage;
    const pageCount = Math.ceil(filteredUsers.length / usersPerPage);
    const displayUsers = filteredUsers.slice(pagesVisited, pagesVisited + usersPerPage);


    useEffect(async () => {
        const baseUsers = await DAL.getUsers();
        if (baseUsers) {
            setUsers(prev => [...baseUsers]);
            setFilteredUsers(prev => [...baseUsers]);
        }
    }, []);


    const getUsers = () => {
        return [...Users];
    }

    const handleNewUser = (newUser) => {
        setUsers(prev => [...prev, newUser]);
        setFilteredUsers(prev => [...prev, newUser]);
    }

    const handleFilteredUsers = (usersArray) => {
        setFilteredUsers(prev => [...usersArray]);
    }

    const ResetFilter = () => {
        setFilteredUsers(prev => [...Users]);
    }

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    return (
        <div className="container">
            <AddUserFormikContainer handleNewUser={handleNewUser} />
            <FilterUserFormikContainer handleFilteredUsers={handleFilteredUsers} getUsers={getUsers} ResetFilter={ResetFilter}/>
            <UserTable Users={displayUsers} />
            <UserTablePagination changePage={changePage} pageCount={pageCount}/>
        </div>
    );
}

export default App;

