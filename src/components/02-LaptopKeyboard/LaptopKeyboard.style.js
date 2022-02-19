import styled from "styled-components";
import face from "./christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
export const LaptopKeyboardStyled=styled.div`
  width: 95%;
  background: #E8E9ED;
  border-radius:15px;
  margin:10px 0 40px 0;
  
  /* border:inset thick lightgrey; */
  #KEY,#KEY_2,#KEY_3,#KEY_4,#KEY_5,#KEY_6,#KEY_7,#KEY_8,#KEY_9,#KEY_10,#KEY_11,#KEY_12,#KEY_13,#KEY_14,#KEY_15,#KEY_16,#KEY_17,#KEY_19,#KEY_20,#KEY_21,#KEY_22,#KEY_23,#KEY_24,#KEY_25,#KEY_26,#KEY_27,#KEY_28,#KEY_29,#KEY_30,#KEY_31,#KEY_32,#KEY_33,#KEY_34,#KEY_35,#KEY_36,#KEY_37,#KEY_38,#KEY_39,#KEY_40,#KEY_41,#KEY_42,#KEY_43,#KEY_44,#KEY_45,#KEY_46,#KEY_47,#KEY_48,#KEY_49,#KEY_50,#KEY_51,#KEY_52,#KEY_53,#KEY_54,#KEY_54,#KEY_55,#KEY_56,#KEY_57,#KEY_58,#KEY_59,#KEY_60,#KEY_61,#KEY_62,#KEY_63,#KEY_64,#KEY_65,#KEY_66,#KEY_67,#KEY_68,#KEY_69,#KEY_70,#KEY_71,#KEY_72{
    &:hover{ 
      fill:#B1B1B1;
      cursor:pointer;
      stroke: #1D94EC;
      stroke-width:1;
    }
  }

  #keysContainer{
    fill:  #ff2400, #e81d1d, #e8b71d, #e8b71d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
    background-size: 1800% 1800%;
    animation: ${({rgba})=>rgba&&"rainbow"}  8s ease infinite;
  }

  @keyframes rainbow { 
    0%{fill:  #ff2400}
    13%{fill:  #42FF00}
    26%{fill:  #e8b71d}
    39%{fill:  #e8b71d}
    52%{fill:  #1de840}
    65%{fill:  #1ddde8}
    78%{fill:  #2b1de8}
    91%{fill:  #dd00f3}
    100%{fill:#dd00f3}
}

`