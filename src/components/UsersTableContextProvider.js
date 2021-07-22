import React, {useContext, useEffect, useState} from 'react'
import {useUserContext} from './UsersContextProvider'

const UserTableContext = React.createContext()

export const useUserTableContext = () => {
    return useContext(UserTableContext);
}

export const UserTableContextProvider = ({children}) => {

    const {FilteredUsers} = useUserContext();
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 5;
    const startPage = 0;
    const pagesVisited = pageNumber*usersPerPage;

    const pageCount = Math.ceil(FilteredUsers.length / usersPerPage);

    const displayUsers = FilteredUsers.slice(pagesVisited, pagesVisited + usersPerPage);


    const changePage = ({selected}) => {
            setPageNumber(selected);
    }

    return (
        <UserTableContext.Provider value={{
            pageNumber: pageNumber,
            setPageNumber,
            changePage,
            pageCount: pageCount,
            startPage: startPage,
            Users: displayUsers
        }}>
            {children}
        </UserTableContext.Provider>
    )
}