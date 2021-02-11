import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
    //make the context
    const Context = React.createContext();

    //make the provider
    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        let boundActions = {};

        for (let key in actions){
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        )
    }

    return { Context, Provider}
}