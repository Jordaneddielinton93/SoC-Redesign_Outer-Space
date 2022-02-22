import styled from "styled-components";

export const HeroLeftStyle= styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
    color:white;
    font-size:3.5vh;
    justify-content:center;
    text-align:left;
    z-index:1;
    .landingfonts{
      display: flex;
      justify-content:space-evenly;
      flex-direction:column;
      align-self:center;
      height:60%;
      width: 80%;

      &-TechLaunch{
        position: relative;
        font-size:4vw;
        color:#000717;
        text-shadow:
        -1px -1px 0 #FFDFA5,  
        1px -1px 0 #FFDFA5,
        -1px 1px 0 #FFDFA5,
        1px 1px 0 #FFDFA5;
        & .LaunchAnime{
          transition:3s;
          position: absolute;
          animation: launchanime 3s ;
          
        }
        @keyframes launchanime{
          from {
            left:-1000px;
          }
          to{
            left:0px;
          }
        }
      }  
      &-for_free{
        font-size:4vw;
      }   
      &-Free{
        
        color:#FFDFA5;
        
      }
      
      &-discription{
        font-size:1.5vw;
      }
    }

    
   
    
    
    
`