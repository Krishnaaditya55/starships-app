import React, { useEffect, useState } from "react";
import { fetchStarships } from "./api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "animate.css";

const Starships = () => {
  const [starships, setStarships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mostFilmsStarship, setMostFilmsStarship] = useState(null);

  useEffect(() => {
    fetchStarships().then((starshipsData) => {
      const filteredStarships = starshipsData.filter(
        (starship) => parseInt(starship.crew) <= 10
      );

      // Find the starship with the most film appearances
      let maxFilms = -1;
      let mostFilmsStarship = null;

      filteredStarships.forEach((starship) => {
        const numFilms = starship.films.length;
        if (numFilms > maxFilms) {
          maxFilms = numFilms;
          mostFilmsStarship = starship;
        }
      });

      setStarships(filteredStarships);
      setMostFilmsStarship(mostFilmsStarship);
      setIsLoading(false);
    });
  }, []);

  const handleSortByCrew = () => {
    const sortedStarships = [...starships].sort(
      (a, b) => parseInt(a.crew) - parseInt(b.crew)
    );
    setStarships(sortedStarships);
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-4 myheader animate__animated animate__fadeIn">
        Starships Statistics
      </h1>
      {isLoading ? (
        <div className="text-center">
          <i className="fa fa-spinner fa-spin fa-3x"></i>
          <p className="loading-text">Loading...</p>
        </div>
      ) : (
        <>
          <div className="row">
            <div className="col-10">
              {mostFilmsStarship && (
                <div className="custom-alert custom-success">
                  <FontAwesomeIcon icon={faStar} /> {mostFilmsStarship.name}{" "}
                  (Appeared in {mostFilmsStarship.films.length} films)
                </div>
              )}
            </div>
            <div className="col-2">
              {" "}
              <button
                className="btn btn-primary mb-3 custom-button"
                onClick={handleSortByCrew}
              >
                Sort by Crew
              </button>
            </div>
          </div>

          <div className="row">
            {starships.map((starship) => (
              <div key={starship.name} className="col-lg-12 col-md-6 mb-4">
                <div className="card h-100 animate__animated animate__lightSpeedInRight">
                  <div className="card-body">
                    <h5 className="card-title">{starship.name}</h5>
                    <p className="card-text">
                      <strong>Model:</strong> {starship.model}
                      <br />
                      <strong>Number of Films:</strong> {starship.films.length}
                      <br />
                      <strong>Crew:</strong> {starship.crew}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Starships;
