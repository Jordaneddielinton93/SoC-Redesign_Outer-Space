import { moonImg } from "../../../../../../components/Images/moonBoy";



const LaptopScreenRight = () => {
  const screenRight={
    "width":"50%",
    "height":"100%",
    "Maxheight":"100%",
    "display":"flex",
    "alignItems":"center",
    "justifyContent":"center",
  };

  return ( 
    <div style={screenRight}>
      {moonImg}
    </div>
   );
}
 
export default LaptopScreenRight;