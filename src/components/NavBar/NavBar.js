import { SoCLogo } from "../Images/SoCLogo";
import ApplyNow from "../ApplyNow/ApplyNow";
import { NavBarStyled } from "./NavBar.style";

const Navbar = () => {
 
  return ( 
    <NavBarStyled>
      <div className="logoAndTitle" >
        {SoCLogo}
        <h5 className="logoAndTitle-title">The Free Coding Bootcamp</h5>
      </div>

      <ul className="NavLinks">
        <h4 className="NavLinks-Links">Intentsive Bootcamp</h4>
        <h4 className="NavLinks-Links">Sponsors {"&"} Partners</h4>
        <h4 className="NavLinks-Links">Graduates</h4>
        <h4 className="NavLinks-Links">blog</h4>
      <ApplyNow width={"120px"} height={"30px"} fontSize="0.8rem" margin="0px 20px 0 0"/>
      </ul>
    </NavBarStyled>
   );
}
 
export default Navbar;