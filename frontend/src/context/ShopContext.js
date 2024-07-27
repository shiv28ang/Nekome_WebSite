import React, { createContext } from "react";

export const ShopContext =createContext(null)

const ShopContextProvider= (props) => {
    const contextvalue ={}

    return (
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider