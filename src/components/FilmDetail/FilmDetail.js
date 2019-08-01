import React, { useContext } from "react";
import Modal from "react-modal";
import { getYear } from "../../utils/DateFunctions";
import Heading from "../Heading";
import Button from "../Button";
import { GlobalContext } from "../GlobalStateProvider";
import "././FilmDetail.css";
Modal.setAppElement("#root");

function FilmDetail({ clearModal, ...rest }) {
  const { state, dispatch } = useContext(GlobalContext);
  const film = state.active_film || {};
  const year = getYear(film.release_date);

  return (
    <Modal
      isOpen={film.id !== undefined}
      onAfterOpen={() => {}}
      onRequestClose={() => {}}
      contentLabel="Example Modal"
    >
      <Heading className="FilmHeader">
        {film.title}
        {year && ` (${year})`}
      </Heading>
      {film.poster_path && (
        <img
          alt={film.title}
          src={`https://image.tmdb.org/t/p/w200${film.poster_path}`}
          className="FilmImage"
        />
      )}
      <p className="FilmOverview">{film.overview}</p>
      <Button
        className="FilmButton"
        onClick={() => dispatch({ type: "SET_ACTIVE_FILM", id: undefined })}
      >
        <b>CLOSE</b>
      </Button>
    </Modal>
  );
}

export default FilmDetail;
