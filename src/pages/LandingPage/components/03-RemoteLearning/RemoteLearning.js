import { PlanentAndGuy } from "../../../Images/PlanentAndGuy";
import { RemoteLearningStyled } from "./RemoteLearning.style";

const RemoteLearning = () => {
  return ( 
    <RemoteLearningStyled >
      <main className="RemoteLearning">
        <section className="RemoteLearning-LeftSection">
          {PlanentAndGuy}
        </section>


        <section className="RemoteLearning-RightSection">
        <h3 className="RemoteLearning-RightSection-title">
          Remote Learning. 
          <span className="RemoteLearning-RightSection-title-Underline"></span>
        </h3>
          <div className="RemoteLearning-RightSection_box">
            <p className="RemoteLearning-RightSection_box-paragraph">
            School of Code is about opening the opportunity of tech up to everyone. Our free coding bootcamp takes you from 0 to programmer and launches you into a tech career with our Employer Partners. We've achieved 85% employment into tech across all of our bootcamps so far, including during the COVID-19 pandemic.
            </p>
            <p className="RemoteLearning-RightSection_box-paragraph">
            We've come a long way since our very first bootcamp. We've trained over 200 people, and are looking to transform the lives of another 192 across the country before April 2022.
            </p>
            <p className="RemoteLearning-RightSection_box-paragraph">
            Take a look back at how it all started with our Cohort 1 video.
            </p>
          </div>
        </section>
      </main>
    </RemoteLearningStyled>
   );
}
 
export default RemoteLearning;