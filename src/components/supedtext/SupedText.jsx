import React from "react";

const SupedText = (props) => {
  return (
    <div className="supedtext">
      <h1>{props.title}</h1>
      <h2>{props.desc}</h2>
    </div>
  );
};

export default SupedText;
