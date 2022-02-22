import styled from "styled-components";
import national from "../../../../components/Images/nationalBootcamp.png"
export const RemoteLearningStyled=styled.section`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width: 99%;
  height: 700px;
  background:#000717 ;
  background-color: ${({darkmode})=>darkmode};

  
  .RemoteLearning{
    display:flex;
    justify-content:space-between;
    align-items:center;
    align-self:center;
    height: 90%;
    width: 100%;
    border-radius:35px ;
    

    &-LeftSection{
      display: flex;
      justify-content:center;
      width: 48%;
      height: 90%;
      border-top-right-radius:15px ;
      border-bottom-right-radius:15px ;
      border-top:#FFDFA5 solid 3px ;
      border-bottom:#FFDFA5 solid 3px ;
      z-index:2;
      
      height :100%;
      background:black url(${national});
    background-size:cover;
    background-position:center;
      #PlanentAndGuy{
     
        animation: planentAndGuy 3s infinite alternate;
        
        /* transform: translateY(0px); */
      }
      @keyframes planentAndGuy{
        from{
          transform: translateY(-10px);
        }
        to{
          transform: translateY(10px);
        }
      }
    }


    &-RightSection{
      width: 50%;
      height :65%;
      color:${({darkmodeBool})=>darkmodeBool?"black":"white"};
      
      /* background: rgba(128,128,128,0.5); */
      
      &-title{
      font-size:3vw;

      position: relative;
      font-size:3rem;
      text-align:left;
      margin-right:5%;
      letter-spacing:3px;
      font-weight:500;
      width: 100%;

      &-Underline{
        position: absolute;
        bottom: 0;
        left:0%;
        height:5px;
        width: 100%;
        background:${({darkmodeBool})=>darkmodeBool?"#2DA8DE":"#FFDFA5"} ;
        z-index:3;
      }
    }
    &_box{
      height: 100%;
      display: flex;
      flex-direction:column;
      justify-content:space-evenly;
      &-paragraph{
      font-size:1.2vw;

      margin-right:5%;
      text-align:left;
      width: 90%;
    }
    }
    }

  }

`