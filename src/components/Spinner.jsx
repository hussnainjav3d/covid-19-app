import React from "react";
import spinner from "../spinner.gif";
export const Spinner = () => {
  console.log("Is Loading");
  return (
    <img
      src={spinner}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt="Is Loading"
    />
  );
};
