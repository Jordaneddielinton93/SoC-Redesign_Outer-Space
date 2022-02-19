import { useEffect } from "react";
import { KeyboardLayout } from "./Buttons";
import { LaptopKeyboardStyled } from "./LaptopKeyboard.style";

const LaptopKeyboard = () => {

  useEffect(()=>{
    for(let i=1;i<73;i++){
      console.log(i===1?"_"+1:"_"+i)
      let keyButton= document.querySelector(`#KEY${i===1?"":"_"+i}`)
      keyButton.addEventListener("click",()=>{
        keyButton.style.fill!=="red"?
        keyButton.style.fill="red":
        keyButton.style.fill="url(#paint1_linear_19_573)"
        
      })
    }
  },[])

  
  
  return ( 
    <LaptopKeyboardStyled>
      {KeyboardLayout}
    </LaptopKeyboardStyled>
   );
}
 
export default LaptopKeyboard;