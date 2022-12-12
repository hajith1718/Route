import React, {createContext,useState} from 'react';
export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies,setMovies]=useState([
        {
            name:'Thunivu',
            price:'Rs.1',
            id:'001',
        },
        {
            name:'Varisu',
            price:'Rs.1000',
            id:'002',
        },
        {
            name:'VTK',
            price:'Rs.250',
            id:'003',
        }
    ]);
    return(
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
};