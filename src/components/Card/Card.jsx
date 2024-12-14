import React from "react";

function Card({ movie, setList, list }) {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt="Poster"
      />
      <div className="card-content">
        <div className="card-texts">
          <span>{movie.release_date.slice(0, 4)}</span>
          <p>{movie.title}</p>
        </div>
        <div className="card-buttons">
          <button
            onClick={() =>
              setList((prev) => {
                if (!prev.some((item) => item.id === movie.id)) {
                  return [...prev, movie];
                }
                alert("Already at the list");
                return prev;
              })
            }
          >
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
