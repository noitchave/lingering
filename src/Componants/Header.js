import React from "react";

export function Header(prop) {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          color: "green",
          fontSize: "34px",
          fontWeight: "bold",
          float: "left"
        }}
      >
        {prop.headerName}
      </div>
      <button onClick={prop.onButtonClick}>Button Test On Click</button>
      <div style={thisStyle}>Test the style</div>
    </>
  );
}

const thisStyle = {
  backgroundColor: "#blue",
  color: "red",
  fontSize: "35px"
  //float; "right"
};
