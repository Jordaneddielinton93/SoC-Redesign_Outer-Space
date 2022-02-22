import styled from "styled-components";

export const HeroRightStyled = styled.section`
  width:50%;
  height:100%;
  max-height:100%;
  display:flex;
  align-items:end;
  justify-content:center;
  z-index:1;

  #MoonAndMan{
    transform-origin:center;
    /* transform: rotate(55deg); */
    animation: MoonAndMan 5s infinite alternate
  }
  #swingingleg{
    transform-origin:center;

    animation: swingingleg 5s  infinite alternate
    /* transform: rotate(55deg); */
    /* transform: rotate(-25deg) translate(0,-20px); */
  }

  #RightArm{
    transform-origin:center;
    /* transform: rotate(50deg) translate(-30px,-20px); */

    animation: RightArm 5s 1s infinite alternate
  
  }
  @keyframes RightArm{
    from{
      transform: rotate(0deg) translate(0px,0px);
    }
    to{
      transform: rotate(50deg) translate(-30px,-20px);

    }
  }

  @keyframes MoonAndMan{
    from{
      transform: rotate(-20deg);
    }
    to{
      transform: rotate(35deg);
    }
  }
  
  @keyframes swingingleg{
    from{
      transform: rotate(-25deg) translate(0px,-20px);
    }
    to{
      transform: rotate(15deg) translate(10px,5px);
    }
  }
`