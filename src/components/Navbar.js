import { useNavigate, Link } from "react-router-dom";

const Navbar = ({ searchText, setSearchText }) => {
  const navigate = useNavigate();
  const updateSearchText = (e) => {
    setSearchText(e.target.value);
    navigate("search");
  };
  const Default = (e) => {
    e.preventDefault();
    navigate("search");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-secondary p-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Movie Browser
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link disabled"
                  to="/"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Coming soon
                </Link>
              </li>
            </ul>
            <form className="d-flex" onSubmit={Default}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchText}
                onChange={updateSearchText}
              />
              <button className="btn btn-outline-info text-dark" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
