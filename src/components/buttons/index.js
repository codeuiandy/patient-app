import React from "react";
import "./btn.scss";
export const Button = ({
  background,
  color,
  Icon,
  fontSize,
  text,
  width,
  height,
  fontWeight,
  borderRadius,
  padding,
  className,
  onClick,
  disabled
}) => {
  return (
    <div
      onClick={onClick}
      className={`app-btn ${className ? className : ""}`}
      style={{
        backgroundColor: background ? background : "",
        borderRadius: borderRadius ? borderRadius : "",
        padding: padding ? padding : "",
        width: width ? width : "",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {Icon ? <Icon /> : ""}
      <button
       disabled={disabled == true ?true:false}
        style={{
          // backgroundColor: background ? background : '',
          color: color ? color : "",
          fontSize: fontSize ? fontSize : "",
          fontWeight: fontWeight ? fontWeight : "",
          outline: "none",
          border: "none",
         
        }}
      >{`${text}`}</button>
    </div>
  );
};
