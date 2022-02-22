import { useContext } from "react";
import { appContext } from "../../../../../../App";
import ApplyNow from "../../../../../../components/ApplyNow/ApplyNow";
import { HeroLeftStyle } from "./HeroLeftStyle";

const HeroLeft = () => {
  let {state}=useContext(appContext)


  return ( 
    <HeroLeftStyle data-aos="zoom-in-up">
      <main className="landingfonts">
        <div>
          <h1 className="landingfonts-TechLaunch"><span className="LaunchAnime">Launch Into Tech</span>_____________________ </h1>
          <h1 className="landingfonts-for_free"style={{color:state.darkmodeBool?"black":"white"}}>
            For <span className="landingfonts-Free" style={{color:state.darkmodeBool?"#2DA8DE":"#FFDFA5"}}>
              FREE
            </span>
          </h1>
        </div>
        <ApplyNow width={"180px"} height={"40px"} fontSize={"1.6rem"}/>
        <p className="landingfonts-discription"style={{color:state.darkmodeBool?"black":"white"}}>
          Change your life learn to codeWe deliver free, intensive Bootcamps around the UK throughout the year. Our next bootcamp is scheduled for Spring 2022.</p>
      </main>
    </HeroLeftStyle>
   );
}
 
export default HeroLeft;