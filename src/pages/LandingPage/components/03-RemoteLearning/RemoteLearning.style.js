import styled from "styled-components";
import national from "../../../Images/nationalBootcamp.png"
export const RemoteLearningStyled=styled.section`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width: 95%;
  height: 800px;
  background:#000717 ;
  background-color: black;
  .RemoteLearning{
    display:flex;
    justify-content:space-between;
    align-items:center;
    align-self:end;
    height: 90%;
    width: 100%;
    border-radius:35px ;
    background-color: green;
    background: url(${national});
    background-size:cover;
    background-position:center;

    &-LeftSection{
      display: flex;
      justify-content:center;
      width: 35%;
      height :100%;
      #PlanentAndGuy{
        height: 20%;
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
      color:white;
      text-shadow: 2px 2px black;
      background: rgba(128,128,128,0.5);
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
        background: #FFDFA5;
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