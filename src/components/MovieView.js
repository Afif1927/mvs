import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const MovieView = () => {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState({});
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c67005c990de911620932405bd6e268e`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]);

  function renderMovieDetails() {
    if (isloading) {
      return <Hero text="Loading wait...." />;
    }
    if (movieDetails) {
      //TODO: Deal with a possible missing image

      const defaultPosterPath =
        "https://upload.wikimedia.org/wikipedia/en/a/a8/TokyoRevengersSeason1.jpg";

      const posterPath = movieDetails.poster_path
        ? `http://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
        : defaultPosterPath;

      const defaultBackdropPath =
        "https://p4.wallpaperbetter.com/wallpaper/606/712/1017/anime-original-bicycle-cloud-wallpaper-preview.jpg";

      const backdropUrl = movieDetails.backdrop_path
        ? `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
        : defaultBackdropPath;
      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container my-5 bg-dark text-white ">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={posterPath}
                  alt="..."
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col-md-9 py-4">
                <h1 className="text-primary text-uppercase">
                  {movieDetails.original_title}
                </h1>
                <h3 className="p-2">{movieDetails.release_date}</h3>
                <h4>{movieDetails.runtime} minute</h4>
                <p>{movieDetails.overview}</p>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  return renderMovieDetails();
};
export default MovieView;
