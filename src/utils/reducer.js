import {createContext} from "react";

export const initialState = {
    values:[{
        n:0,
        re:0,
        pe:0
    }],
    sum:{
        R:0,
        A:0,
        MLZO:0
    }
}

export const Context = createContext(initialState);

export const reducer = (state,action)=>{
    switch (action.type){

case 'Add_Values':{
    return {
        ...state,
        values:[
            ...state.values,
            action.payload
        ]
    }
}

case "UPD_SUM":{
    return {
        ...state,
        sum:action.payload
    }
}

        default:return state
    }
}