import { useContext } from "react";
import { appContext } from "../../../../App";
import { Plan4Jobs } from "../../../../components/Images/Plan4Jobs";
import { spaceShip } from "../../../../components/Images/SpaceShip";
import CardAndText from "./components/CardAndText";
import { HowItWorksStyled } from "./HowItWorks.style";

const HowItWorks = () => {
  let {state}=useContext(appContext)

  return ( 
    <HowItWorksStyled data-aos="zoom-in-up">
      {state.darkmode==="black"&&<>
        <div class="stars"></div>
        <div class="twinkling"></div>
      </>
      }
      <h3 className="HowItWorks_top">
          How it works!. 
          <span className="HowItWorks_top-Underline"></span>
      </h3>

      <div className="HowItWorks_bottom">
        <CardAndText cardTextImg={Plan4Jobs}/>
        <CardAndText cardTextImg={spaceShip}/>
        <CardAndText/>

      </div>
    </HowItWorksStyled>
   );
}
 
export default HowItWorks;