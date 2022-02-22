import styled from "styled-components";

export const WhatsItAllABoutStyle=styled.section`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width: 99%;
  height: 700px;
  background:#000717 ;
  background-color: ${({darkmode})=>darkmode};

  & .WhatIts_LeftSection{
    width: 45%;
    height :65%;
    color:${({darkmodeBool})=>darkmodeBool?"black":"white"};
    
    &-title{
      position: relative;
      font-size:4vw;
      text-align:left;
      margin-left:5%;
      letter-spacing:3px;
      font-weight:500;
      width: 100%;
      &-Underline{
        position: absolute;
        bottom: 0;
        left:-5%;
        height:5px;
        width: 90%;
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
      margin-left:5%;
      text-align:left;
      width: 90%;
      font-size:1.2vw;

    }
    }
    
  }



  & .WhatIts_RightSection{
    width: 50%;
    height :60%;
    
    &-tablet{
      position: relative;
      display:flex;
      align-items:center;
      justify-content:center;
      height: 98%;
      width: 90%;
      border:solid 3px ${({darkmodeBool})=>darkmodeBool?"black":"#FFDFA5"};
      border-radius:25px;

      &-camera{
        position: absolute;
        width: 15px;
        height: 15px;
        left:49%;
        top:8px;
        background: grey;
        border-radius:100%;
        border:solid thin #FFDFA5;
      }
      &-video{
        width: 90%;
        height:85%;
        background: white;
        
      }
    }
  }
`