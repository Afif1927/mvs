import Hero from "./Hero";
const AboutView = () => {
  return (
    <>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio aliquid facere laboriosam, libero ab provident eos
              obcaecati sed nam velit illo amet culpa quas laborum voluptas
              dignissimos eligendi quisquam ea iste quod unde esse voluptatum
              porro. Inventore praesentium aut, illum nesciunt sed quas corrupti
              eius esse voluptas numquam iure neque.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
