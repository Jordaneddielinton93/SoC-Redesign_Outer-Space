
export let ACTION={
  DARKMODE:"DARKMODE"
}

export let initistialState={
  darkmodeBool:false,
  darkmode:"black",//white/black
  darkmode2:"FFDFA5"
}


export function reducer(state,action){
  switch (action.type) {
    case ACTION.DARKMODE:
      
      return{
        ...state,
        darkmodeBool:!state.darkmodeBool,
        darkmode:state.darkmodeBool?"black":"#FFFFFF",
        darkmode2:state.darkmodeBool?"FFDFA5":"2DA8DE"
      }
      
  
    default:
      return{
        ...state
      }
      break;
  }
}