import React from "react";
import Card from "../Card";
import "./ItemCard.css";

function ItemCard({
  title,
  onAddToCart,
  price,
  description,
  imageUrl,
  selected,
  year,
  cast,
  ...rest
}) {
  return (
    <Card {...rest} className="ItemCard" selected={selected}>
      <div className="ItemCardContent">
        <div className="ItemCardImage">
          <img src={imageUrl} alt="" />
        </div>
        <div className="ItemTitle">
          {" "}
          {title} {year && `(${year})`}
        </div>
      </div>
      {false && description && <span>{description}</span>}
    </Card>
  );
}

export default ItemCard;
