import React, { useEffect } from "react";

const Practice1 = (props) => {
  useEffect(() => {
    //runs in every render cycle- combined CDMount CDUpdate
    setTimeout(() => {
      console.log("http dummy request");
    }, 5000);
    console.log("useEffect is run");
  }, [props.strlength]);
  return (
    <div>
      length:{props.strlength}{" "}
      <input type="text" onChange={(e) => props.getlengthHandler(e)} />
    </div>
  );
};
export default Practice1;
