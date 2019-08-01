import React from "react";
import ItemCard from "../ItemCard";
import { getYear } from "../../utils/DateFunctions";

function ItemCardGroup(props) {
  return (
    <div>
      {props.films.map(item => {
        return (
          <ItemCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.overview}
            imageUrl={
              item.poster_path
                ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
                : ""
            }
            year={getYear(item.release_date)}
            cast={item.cast}
          />
        );
      })}
    </div>
  );
}

export default ItemCardGroup;
