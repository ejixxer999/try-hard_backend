import { React, createContext, useContext, useState } from 'react'

export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext)

export const UIProvider = ({ children }) => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [cart, setCart] = useState([])
    const [showCart, setShowCart] = useState(false)

    const value = {
        drawerOpen,
        setDrawerOpen,
        setCart,
        cart,
        setShowCart,
        showCart
    }

    return <UIContext.Provider value={value} >{children}</UIContext.Provider>
}