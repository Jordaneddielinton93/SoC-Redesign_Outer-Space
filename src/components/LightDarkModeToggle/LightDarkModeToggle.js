import { useContext } from 'react';
import { BsFillSunFill,BsMoonStars } from 'react-icons/bs';
import { appContext } from '../../App';
import { ACTION } from '../Hooks/useReducer';
const LightDarkModeToggle = () => {

  let ToggleStyle={
    position:"fixed",
    width:"50px",
    height:"150px",
    border:"solid thin #FFDFA5",
    left:0,
    top:"10%",
    zIndex:2,
    background:"black",
    display:"flex",
    justifyContent:"space-evenly",
    alignItems:"center",
    fontSize:"2rem",
    flexDirection:"column",
    borderTopRightRadius:"10px",
    borderBottomRightRadius:"10px",
  }

  let {state,dispatch}=useContext(appContext)

  return ( 
    <div style={ToggleStyle}>
      <BsFillSunFill cursor={"pointer"} color='#FFDFA5' 
      onClick={()=>dispatch({type:ACTION.DARKMODE})}/>
      
      <BsMoonStars cursor={"pointer"}  color='#FFDFA5'
       onClick={()=>dispatch({type:ACTION.DARKMODE})}/>
    </div>
   );
}
 
export default LightDarkModeToggle;