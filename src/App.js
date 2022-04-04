import React, { createContext, useState } from "react";
import "./App.css";
import ResidentsList from "./Components/ResidentsList";
import Search, { checkValidity } from "./Components/Search";
import Error from "./Components/Error";
import { students } from "./studentList";


export const StudContext = createContext();

function App() {


  const [state, setState] = useState({
   StudList: students,
   ResidentsList:[],
   checkValidity:{}

  })

  const onChange= (e)=>{
    console.log(e.target.value)
  }
  const addList = student => setState({
  
    ...state,
    ResidentsList: state.ResidentsList.find((ResidentsListItem => ResidentsListItem.name===student.name) && (ResidentsListItem => ResidentsListItem.checkValidity===student.validityDate ))
    ? state.ResidentsList.map(ResidentsListItem => ResidentsListItem.name === student.name ? {...ResidentsListItem } : Error)
      : {...state.ResidentsList}
  })

  return (
    <StudContext.Provider value={{state: state, addList, onChange}}>
      <div className="App">
        <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
          <Search addList={addList}/>
          <Error />
          <ResidentsList />
        </div>
      </div>
    </StudContext.Provider>
  );
}

export default App;
