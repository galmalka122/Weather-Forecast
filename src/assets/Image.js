import React from "react";

const Image = (props) => {
  try {
    // Import image on demand
    const image = require(`./${props.name}.png`);

    // If the image doesn't exist. return null
    if (!image) return null;
    return (
      <img src={image} alt={props.alt} className={props.className ?? null}>
        {props.children}
      </img>
    );
  } catch (error) {
    console.log(`Image with name "${props.name}" does not exist`);
    return null;
  }
};

export default Image;
