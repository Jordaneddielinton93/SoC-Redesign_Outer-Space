import LaptopKeyboard from "../../components/02-LaptopKeyboard/LaptopKeyboard";
import LaptopScreen from "../../components/01-LaptopScreen/LaptopScreen";
import { LandingPageStyled } from "./LandingPage.style";

const LandingPage = () => {
  return ( 
    <LandingPageStyled>
      <LaptopScreen/>
      <LaptopKeyboard/>
    </LandingPageStyled>
   );
}
 
export default LandingPage;