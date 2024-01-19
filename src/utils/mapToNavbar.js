import React , {createContext , useState} from 'react';

const Store = createContext();

const StoreProvider = ({children}) => {
    const   [obj, setObj] =     useState(null);

    const setVar = (newValue) => {
        setObj(newValue);
    };

    return(
        <Store.Provider value={{obj, setVar}}>
            {children}
        </Store.Provider>
    )
};

export {Store, StoreProvider}