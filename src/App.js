import UserTable from "./components/UserTable/UserTable";
import React, {useState, useEffect} from "react";
import axios from "axios";
import UserTablePagination from './components/UserTablePagination/UserTablePagination';
import AddUserFormikContainer from "./components/AddUserFormikContainer/AddUserFormikContainer";
import FilterUserFormikContainer from "./components/FilterUserFormikContainer/FilterUserFormikContainer";

const apiUrl = 'http://localhost:3000/users';

function App() {
    const [Users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 5;
    const pagesVisited = pageNumber*usersPerPage;
    const pageCount = Math.ceil(filteredUsers.length / usersPerPage);
    const displayUsers = filteredUsers.slice(pagesVisited, pagesVisited + usersPerPage);

    const FilterActions = {
        FilterDistance: 'FilterDistance',
        FilterStartPayment: 'FilterStartPayment',
        FilterEndPayment: 'FilterEndPayment',
        FilterStartData: 'FilterStartData',
        FilterEndData: 'FilterEndData'
    };

    useEffect(() => {
        axios.get(apiUrl).then((resp) => {
            setUsers(() => [...resp.data]);
            setFilteredUsers(() => [...resp.data]);
        });
    }, []);



    const AddUser = (values) => {
        const result = axios.post(apiUrl, values).then(resp => {
           setUsers(prev => [...prev, resp.data]);
           setFilteredUsers(prev => [...prev, resp.data]);
           return true;
        }).catch(error=>{
            return false;
        });
        return result;
    }

    const FilterData = (values) => {

        let {startData, endData, startPayment, endPayment, distances} = values;
        startPayment = parseInt(startPayment);
        endPayment = parseInt(endPayment);
        let filterActions = [];

        filterActions.push((distances.length > 0) ? FilterActions.FilterDistance : null);
        filterActions.push(!isNaN(startPayment) ? FilterActions.FilterStartPayment : null);
        filterActions.push(!isNaN(endPayment) ? FilterActions.FilterEndPayment : null);

        setFilteredUsers(prev => [...Users]);

        for (let i=0; i <filterActions.length; i++) {
            switch (filterActions[i]) {
                case FilterActions.FilterDistance:
                    setFilteredUsers(prev => {
                        return prev.filter(user => {
                            return distances.includes(user.distance.toString());
                        })
                    })
                    break;
                case FilterActions.FilterStartPayment:
                    setFilteredUsers(prev => {
                                return prev.filter(user => {
                                    return user.payment >= startPayment;
                                })
                            })
                    break;
                case FilterActions.FilterEndPayment:
                    setFilteredUsers(prev => {
                            return prev.filter(user => {
                                return user.payment <= endPayment;
                        })
                    })
                    break;
                default:
                    break;

            }
        }

        // if (isNaN(startPayment)) {
        //     setFilteredUsers(prev => {
        //         return Users.filter(user => {
        //             console.log(user.distance);
        //             console.log(distances);
        //             return distances.includes(user.distance.toString());
        //         })
        //     })
        // }
        //const  = parseInt(x, base);
        // if (isNaN(parsed)) { return 0; }
        // return parsed * 100;
    }

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    return (
        <div className="container">
            <AddUserFormikContainer AddUser={AddUser} />
            <FilterUserFormikContainer FilterData={FilterData}/>
            <UserTable Users={displayUsers} />
            <UserTablePagination changePage={changePage} pageCount={pageCount}/>
        </div>
    );
}

export default App;

