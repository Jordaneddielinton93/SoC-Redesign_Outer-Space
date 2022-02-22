
import { HeroStyled } from "./HeroStyled";
import { StripedBox } from "../../../../components/Images/stripeBox";
import Navbar from "../../../../components/NavBar/NavBar";
import HeroLeft from "./components/HeroLeft/HeroLeft";
import HeroRight from "./components/HeroRight/HeroRight";
import { useContext } from "react";
import { appContext } from "../../../../App";


const Hero = () => {
  let {state}=useContext(appContext)

  const screenContainer={
    position:"relative",
    justifyContent:"space-between",
    "alignSelf":"center",
    "width":"90%",
    "height":"85%",
    "display":"flex"
  }
  console.log(state)
  return ( 
    <HeroStyled darkmode={state.darkmode} bool={state.darkmodeBool}>
      {state.darkmode==="black"&&<>
        <div class="stars"></div>
        <div class="twinkling"></div>
      </>
      }
        <div className="StripedBox">{StripedBox}</div>
      <Navbar/>
      <div style={screenContainer}>
        <HeroLeft/>
        <HeroRight/>
      </div>
      
    </HeroStyled>
   );
}
 
export default Hero;

