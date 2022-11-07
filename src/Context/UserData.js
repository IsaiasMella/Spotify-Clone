import React, { createContext, useContext, useReducer } from 'react'

const UserDataContext = createContext()

const UserData = ({ initialState, reducer, children }) => {
    return (
        <UserDataContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </UserDataContext.Provider>
    )
}

export const useUserDataValue = () => useContext(UserDataContext);

export default UserData