import React, {useReducer} from 'react';
import NavBar from './components/appBar'
import Inputs from "./components/inputs";
import {Context, initialState, reducer} from "./utils/reducer";
import ValueTable from "./components/valueTable";
import ProperTable from "./components/ProperTable";

function App() {

    const [state,dispatch] =useReducer(reducer,initialState)
  return (
      <Context.Provider value={[state,dispatch]}>
    <div>
     <NavBar>
     <Inputs/>
     </NavBar>
        <ProperTable/>
    </div>
      </Context.Provider>
  );
}

export default App;
