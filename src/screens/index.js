import React, { useContext, useEffect, useState } from "react";
import { search } from "../tmdb";
import ItemCardGroup from "../components/ItemCardGroup";
import Heading from "../components/Heading";
import { GlobalContext } from "../components/GlobalStateProvider";
import "./styles.css";

export default function App() {
  const [message, setMessage] = useState();
  const [searchValue, setSearchValue] = useState("No Country");
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    if (searchValue) {
      setMessage("Searching ...");

      const timer = setTimeout(() => {
        search
          .movies({ query: searchValue })
          .then(results => {
            setMessage("SUCCESS");
            dispatch({ type: "SAVE_RESULTS", payload: results });
          })
          .catch(error => {
            setMessage("ERROR");
          });
      }, 100);

      return () => clearTimeout(timer);
    } else {
      setMessage("Empty Search");
    }
  }, [searchValue, dispatch]);

  return (
    <div className="App">
      <Heading>Search For Movies!</Heading>
      <div>
        <input
          type="text"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
      </div>
      <div>{message}</div>

      <ItemCardGroup films={state.films} selectedItemTitle={message} />
    </div>
  );
}
