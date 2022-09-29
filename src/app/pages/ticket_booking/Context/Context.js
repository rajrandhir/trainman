
import React, { createContext, useState } from 'react';

const AppContext = createContext();

const Context = ({ children }) => {
    const [val, setVal] = useState();
    const [value, setValue] = useState();
    const [searStation, setSearchStation] = useState();
    const [seatAvailability, setSeatAvailability] = useState();
    return (
        <>
            <AppContext.Provider value={{ val, setVal, value, setValue, searStation, setSearchStation, seatAvailability, setSeatAvailability }}>
                {children}
            </AppContext.Provider>
        </>
    )
}

export default Context
export { AppContext }
