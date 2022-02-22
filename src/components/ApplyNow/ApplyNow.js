const ApplyNow = ({width,height,fontSize,margin}) => {

  const ApplyNow={
    width:width,
    height:height,
    fontSize:fontSize,
    color:"white",
    background:"#434343",
    border:"solid 3px #FFDFA5",
    cursor:"pointer",
    zIndex:2,
    margin:margin
  }


  return ( 
    <button style={ApplyNow}>
      Apply Now!
    </button>
   );
}
 
export default ApplyNow;