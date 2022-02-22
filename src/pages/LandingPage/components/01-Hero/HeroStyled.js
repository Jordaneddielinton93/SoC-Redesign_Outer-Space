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

  .stars, .twinkling{
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  display:block;
  z-index:-10;
}





  .stars {
  background:#000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
  z-index:0;
}

.twinkling{
  background:transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
  z-index:1;

  -moz-animation:move-twink-back 200s linear infinite;
  -ms-animation:move-twink-back 200s linear infinite;
  -o-animation:move-twink-back 200s linear infinite;
  -webkit-animation:move-twink-back 200s linear infinite;
  animation:move-twink-back 200s linear infinite;
}



  @keyframes move-twink-back {
      from {background-position:0 0;}
      to {background-position:-10000px 5000px;}
  }
  @keyframes move-clouds-back {
      from {background-position:0 0;}
      to {background-position:10000px 0;}
  }
`