import React, {useContext, useEffect} from 'react';
import {Context} from "../utils/reducer";
import ValueTable from "./valueTable";
import {A, dif, dop, ipe, ire, MLZO, R, r, vpe, vre} from "../utils/funcs";
import ABarChart from "./LineChart";



export default function ProperTable() {


    const [state,dispatch] = useContext(Context)

    let sum={
        R:0,
        A:0,
        MLZO:0
    };

    useEffect(()=>{
        const arr = state.values
         ire(arr)
        ipe(arr)
        vre(arr)
        vpe(arr)
        dif(arr)
        r(arr)
        dop(arr)
        R(arr)
        A(arr)
        MLZO(arr)
        state.values.map(item=>(
            item.R!==undefined?sum.R+=item.R:null,
                item.A!==undefined?sum.A+=item.A:null,
                item.MLZO!==undefined?sum.MLZO+=item.MLZO:null
                ))
        dispatch({
            type:'UPD_SUM',
            payload:sum
        })
    },[state.values])


    return (
            <>
            <ValueTable data={state.values} sum={state.sum}/>
            <ABarChart data={state.values}/>
            </>
    );
}