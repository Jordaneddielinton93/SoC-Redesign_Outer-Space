import Hero from "./components/01-Hero/Hero";
import WhatsItAllAbout from "./components/02-WhatsItAllABout/WhatsItAllABout";
import RemoteLearning from "./components/03-RemoteLearning/RemoteLearning";
import HowItWorks from "./components/04-HowItWorks/HowItWorks";

import LightDarkModeToggle from "../../components/LightDarkModeToggle/LightDarkModeToggle";
import { appContext } from "../../App";
import { useContext } from "react";

const LandingPage = () => {

  let {state}=useContext(appContext)


  const LandingStyle={
  "display":"flex",
  "width":"100%",
  "minHeight":"100vh",
  "background":state.darkmodeBool?"#FBF8F4":"#707070",
  "justifyContent":"end",
  "alignItems":"center",
  "position":"relative",
  "flexDirection":"column",
  }

  return ( 
    <div style={LandingStyle}>
      <LightDarkModeToggle/>
      <Hero/>
      <WhatsItAllAbout />
      <RemoteLearning/>
      <HowItWorks/>
    </div>
   );
}
 
export default LandingPage;