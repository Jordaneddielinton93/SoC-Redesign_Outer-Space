import styled from "styled-components"

export const HeroStyled=styled.div`
    display:flex;
    flex-direction:column;
    margin-top:10px;  
    position:relative;
    width: 95%;
    height:98vh;
    background-color: black;
    background-image: linear-gradient(180deg, ${({darkmode})=>darkmode} 90%, #FFDFA5 100%);
    /* border-radius:15px; */
    border-top-right-radius:15px;
    border-top-left-radius:15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset; 

    

  .StripedBox{
    position: absolute;
    width: 14%;
    max-width: 200px;
    bottom:10%;
    left:-5%;
    
    & path{
      stroke:${({bool})=>bool?"#2DA8DE":"#FFDFA5"};
    }

  }


`