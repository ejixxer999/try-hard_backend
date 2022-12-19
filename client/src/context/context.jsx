import { React, createContext, useContext, useState } from 'react'

export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext)

export const UIProvider = ({ children }) => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [cart, setCart] = useState([])
    const [showCart, setShowCart] = useState(false)
    const [currentUser, setCurrentUserState] = useState(JSON.parse(localStorage.getItem('user')));
    const [userToken, setUserTokenState] = useState(localStorage.getItem('token'));
    

    const setCurrentUser = (user) => {
        setCurrentUserState(user)
        localStorage.setItem('user', JSON.stringify(user))
    }

    const setUserToken = (token) => {
        setUserTokenState(token)
        localStorage.setItem('token', token)
    }
    const value = {
        drawerOpen,
        setDrawerOpen,
        setCart,
        cart,
        setShowCart,
        showCart,
        userToken,
        setUserToken,
        currentUser,
        setCurrentUser
    }

    return <UIContext.Provider value={value} >{children}</UIContext.Provider>
}