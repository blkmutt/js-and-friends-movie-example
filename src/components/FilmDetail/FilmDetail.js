import React from "react";
import { getYear } from "../../utils/DateFunctions";
import Heading from "../Heading";
import Button from "../Button";
import Modal from "react-modal";
import "././FilmDetail.css";
Modal.setAppElement("#root");

function FilmDetail({ film, clearModal, ...rest }) {
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
      <Button className="FilmButton" onClick={() => clearModal()}>
        <b>CLOSE</b>
      </Button>
    </Modal>
  );
}

export default FilmDetail;
