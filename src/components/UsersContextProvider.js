import React, {useContext, useEffect, useReducer} from 'react'
import DAL from "../DAL/Users";


const UsersContext = React.createContext()

export const useUserContext = () => {
    return useContext(UsersContext);
}

const HANDLE_NEW_USER = 'HANDLE_NEW_USER';
const HANDLE_FILTERED_USERS = 'HANDLE_FILTERED_USERS';
const RESET_FILTERED_USERS = 'RESET_FILTERED_USERS';
const FETCH_USERS = 'FETCH_USERS';

const userReducer = (state, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {...state, Users: [...action.serverUsers], FilteredUsers: [...action.serverUsers]}
        case HANDLE_NEW_USER:
                return {...state,
                        Users: [...state.Users, action.user],
                        FilteredUsers: [...state.FilteredUsers, action.user]
                        }
        case HANDLE_FILTERED_USERS:
            return {...state, FilteredUsers: [...action.filteredUsers]}
        case RESET_FILTERED_USERS:
            return {...state, FilteredUsers: [...state.Users]}
        default:
            return state;
    }

}

export const UsersContextProvider = ({children}) => {

    const [UsersStore, dispatchUsers] = useReducer(userReducer, {
        Users: [],
        FilteredUsers: []
    });

    const handleNewUser = (newUser) => dispatchUsers({type: HANDLE_NEW_USER, user: newUser})
    const handleFilteredUsers = (filteredUsers) => {
        dispatchUsers({type: HANDLE_FILTERED_USERS, filteredUsers: filteredUsers});
    }

    const ResetFilteredUsers = () => dispatchUsers({type: RESET_FILTERED_USERS})
    const setUsers = (serverUsers) => dispatchUsers({type: FETCH_USERS, serverUsers: serverUsers})

    useEffect(() => {
        (async () => {
            const serverUsers = await DAL.getUsers();
            if (serverUsers) {
                setUsers(serverUsers);
            }
        })();
    }, []);

    return (
        <UsersContext.Provider value={{
            Users: UsersStore.Users,
            FilteredUsers: UsersStore.FilteredUsers,
            handleNewUser,
            handleFilteredUsers,
            ResetFilteredUsers,
            setUsers
        }}>
            {children}
        </UsersContext.Provider>
    )
}