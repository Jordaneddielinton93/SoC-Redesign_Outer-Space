import styled from "styled-components"

export const LaptopScreenStyled=styled.div`
    margin-top:30px;  
    position:relative;
    width: 91%;
    height:90vh;
    background-color: #e8e9ed;
    background-image: linear-gradient(180deg, #e8e9ed 80%, #999ba3 100%);
    border-radius:15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset; 

    .LaptopHing{
      position: absolute;
      left:10%;
      width: 80%;
      height :40px;
      background: #E8E9ED;
      border-radius:35px;
      bottom:-20px;
      /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      z-index:2;
      /* border:solid thick grey; */
  }
`