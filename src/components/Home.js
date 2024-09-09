import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Welcome to react 201" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="  p-5 ">
              Welcome TO MOVIE BROWSER . Here you can find any kinds of movie .
              So just go for it !
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
