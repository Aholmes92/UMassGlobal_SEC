import React, { useState } from "react";

//Function to return card name and image params
function Card({ image }) {
 
  return <img
      className="Card"
      src={image} />;
}

export default Card;