import Hero from "./Hero";
import { Link } from "react-router-dom";

//API KEY : 6caaf70fd902814720703b5df3d23d0e
//Movie api key :  'https://api.themoviedb.org/3/search/movie?query=%22star%20wars%22&include_adult=false&language=en-US&page=1' \

const MovieCard = ({ movie }) => {
  const defaultPosterUrl =
    "https://upload.wikimedia.org/wikipedia/en/a/a8/TokyoRevengersSeason1.jpg";

  const detailUrl = `/movies/${movie.id}`;
  const posterUrl = movie.poster_path
    ? `http://image.tmdb.org/t/p/w500${movie.poster_path}`
    : defaultPosterUrl;

  return (
    <div className="col-lg-3 col-md-4 my-4 ">
      <div className="card">
        <img
          src={posterUrl}
          className="card-img-top"
          alt={movie.original_title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to={detailUrl} className="btn btn-primary">
            Show details.
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;
  const resultHtml =
    searchResults.length === 0 ? (
      <div className=" p-5 mt-5">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 mt-5">
            <div className=" p-5 mt-5 text-uppercase text-center fw-bold text">
              There is no Search Results for {keyword}.
            </div>
          </div>
        </div>
      </div>
    ) : (
      searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />;
      })
    );
  return (
    <>
      <Hero text={title} />
      {resultHtml && (
        <div className="container">
          <div className="row">{resultHtml}</div>
        </div>
      )}
    </>
  );
};

export default SearchView;
