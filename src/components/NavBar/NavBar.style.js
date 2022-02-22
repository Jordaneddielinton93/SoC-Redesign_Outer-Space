import styled from "styled-components";

export const NavBarStyled = styled.nav`
    display:flex;
    justify-content:space-between;
    align-items:center;
    align-self:center;
    width:95%;
    height:70px;
    background:rgba(67,67,67,0.4);
    border-bottom-right-radius:20px;
    border-bottom-left-radius:20px;
    color:white;
    z-index:1;
    border-right:solid thin #FFDFA5;
    border-left:solid thin #FFDFA5;
    border-bottom:solid thin #FFDFA5;

    & .logoAndTitle{
      display:flex
      height: 100%;
      width:200px;
      align-items:center;
      margin-left:20px;
      &-title{
        font-weight:100
      }
    }

    & .NavLinks{
      display:flex;
      justify-content:space-between;
      align-items:center;
      &-Links{
        margin-right:20px;
      }
    }
`