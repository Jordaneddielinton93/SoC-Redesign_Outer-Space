import styled from "styled-components";

export const HowItWorksStyled=styled.section`
  display: flex;
  flex-direction:column;
  justify-content:space-evenly;
  height:500px;
  width: 100%;
  background-image: linear-gradient(0deg, black 96%, #FFDFA5 100%);
  width: 95%;
  color:white;



  & .HowItWorks_top{
      font-size:3vw;
      position: relative;
      font-size:3rem;
      text-align:left;
      margin-left:3%;
      letter-spacing:3px;
      font-weight:500;
      width: 50%;
      z-index:2;

      &-Underline{
        position: absolute;
        bottom: 0;
        left:-6%;
        height:5px;
        width: 100%;
        background: #FFDFA5;
        z-index:3;
      }
    }

  & .HowItWorks_bottom{
    width: 100%;
    height:45%;
    display: flex;
    justify-content:space-evenly;
    z-index:2;
  }
`