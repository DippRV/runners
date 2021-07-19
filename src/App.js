import UserTable from "./UserTable/UserTable";
import React, {useState, useEffect} from "react";
import axios from "axios";
import UserTablePagination from './UserTablePagination/UserTablePagination';
import FilterForm from './FilterForm/FilterForm';
import AddUserFormikContainer from "./components/AddUserFormikContainer";



const apiUrl = 'http://localhost:3000/users';

function App() {
    const [Users, setUsers] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 5;
    const pagesVisited = pageNumber*usersPerPage;
    const pageCount = Math.ceil(Users.length / usersPerPage);
    const displayUsers = Users.slice(pagesVisited, pagesVisited + usersPerPage);

    useEffect(() => {
        axios.get(apiUrl).then((resp) => {
            setUsers(() => [...resp.data]);
        });
    }, []);



    const AddUser = (values) => {
        const result = axios.post(apiUrl, values).then(resp => {
           setUsers(prev => [...prev, resp.data]);
           return true;
        }).catch(error=>{
            return false;
        });
        return result;
    }

    const FilterData = (values) => {
        return 0;
    }

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    return (
        <div className="container">
            <AddUserFormikContainer AddUser={AddUser} />
            <FilterForm FilterData={FilterData}/>
            <UserTable Users={displayUsers} />
            <UserTablePagination changePage={changePage} pageCount={pageCount}/>
        </div>
    );
}

export default App;

