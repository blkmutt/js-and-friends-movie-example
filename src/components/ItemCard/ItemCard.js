import React, { useContext } from "react";
import Card from "../Card";
import { GlobalContext } from "../GlobalStateProvider";
import "./ItemCard.css";

function ItemCard({ id, title, imageUrl, year, ...rest }) {
  const { dispatch } = useContext(GlobalContext);

  return (
    <Card
      {...rest}
      className="ItemCard"
      onClick={() => dispatch({ type: "SET_ACTIVE_FILM", id })}
    >
      <div className="ItemCardContent">
        <div className="ItemCardImage">
          <img src={imageUrl} alt="" />
        </div>
        <div className="ItemTitle">
          {" "}
          {title} {year && `(${year})`}
        </div>
      </div>
    </Card>
  );
}

export default ItemCard;
