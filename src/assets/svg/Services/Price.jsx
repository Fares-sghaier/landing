import * as React from "react";
import price from "../../images/Price/low-price.png"
function SvgComponent(props) {
  return (
    <div xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.581 39.58" {...props}>
     <img  width={39.581} height={39.58} src={price}/>
    </div>
  );
}

export default SvgComponent;
