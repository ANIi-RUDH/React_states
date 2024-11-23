import React, { useState } from "react";

function Tdo(props) {

  return(
    <li onClick={()=>{
      props.onChecked(props.id)
    }}>{props.text}</li>
  )

}

export default Tdo;
// function handleClick() { 
 
// }

// return ( 
//   <li onClick={handleClick}>
//     {props.text}
//   </li>
// );

// const handleHover = () => {
//   setIsHovered(!isHovered);
// };[]