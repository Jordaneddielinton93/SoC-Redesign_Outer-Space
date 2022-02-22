import { useContext } from "react";
import { appContext } from "../../../../App";
import { WhatsItAllABoutStyle } from "./WhatsItAllABout.style";

const WhatsItAllAbout = () => {
  let {state}=useContext(appContext)

  return ( 
    <WhatsItAllABoutStyle data-aos="zoom-in" darkmode={state.darkmode} darkmodeBool={state.darkmodeBool}>

      <section className="WhatIts_LeftSection" >
        <h3 className="WhatIts_LeftSection-title">
          What's it all about?. 
          <span className="WhatIts_LeftSection-title-Underline"></span>
        </h3>
        <div className="WhatIts_LeftSection_box">
          <p className="WhatIts_LeftSection_box-paragraph">
          School of Code is about opening the opportunity of tech up to everyone. Our free coding bootcamp takes you from 0 to programmer and launches you into a tech career with our Employer Partners. We've achieved 85% employment into tech across all of our bootcamps so far, including during the COVID-19 pandemic.
          </p>
          <p className="WhatIts_LeftSection_box-paragraph">
          We've come a long way since our very first bootcamp. We've trained over 200 people, and are looking to transform the lives of another 192 across the country before April 2022.
          </p>
          <p className="WhatIts_LeftSection_box-paragraph">
          Take a look back at how it all started with our Cohort 1 video.
          </p>
        </div>
        

      </section>

      <section className="WhatIts_RightSection">

        <div className="WhatIts_RightSection-tablet">
          <span className="WhatIts_RightSection-tablet-camera"></span>
          <div className="WhatIts_RightSection-tablet-video">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/mvg3TDzaAHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>

      </section>

    </WhatsItAllABoutStyle>
   );
}
 
export default WhatsItAllAbout;