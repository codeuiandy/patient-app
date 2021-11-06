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
}) => {
  return (
    <div
      onClick={onClick}
      className={`app-btn ${className ? className : ""}`}
      style={{
        backgroundColor: background ? background : "",
        borderRadius: borderRadius ? borderRadius : "",
        padding: padding ? padding : "",
      }}
    >
      {Icon ? <Icon /> : ""}
      <button
        style={{
          // backgroundColor: background ? background : '',
          color: color ? color : "",
          fontSize: fontSize ? fontSize : "",
          fontWeight: fontWeight ? fontWeight : "",
          width: width ? width : "",
          height: height ? height : "",
        }}
      >{`${text}`}</button>
    </div>
  );
};
