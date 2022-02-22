
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import React, { useEffect, useReducer } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
import { initistialState, reducer } from './components/Hooks/useReducer';
export let appContext = React.createContext()

function App() {
  
  useEffect(()=>{
    Aos.init({duration:1500});
  },[])

  let [state,dispatch]=useReducer(reducer,initistialState)

  console.log(state)

  return (
    <div className="App">
      <appContext.Provider value={{state,dispatch}}>

        <LandingPage/>
      </appContext.Provider>
    </div>
  );
}

export default App;
