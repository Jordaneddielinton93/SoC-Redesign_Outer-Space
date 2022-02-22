import { Plan4Jobs } from "../../../Images/Plan4Jobs";
import { spaceShip } from "../../../Images/SpaceShip";
import CardAndText from "./components/CardAndText";
import { HowItWorksStyled } from "./HowItWorks.style";

const HowItWorks = () => {
  return ( 
    <HowItWorksStyled data-aos="zoom-in-up">
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