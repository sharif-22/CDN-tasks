import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="flex justify-between max-w-7xl mx-auto items-center lg:flex-row flex-col-reverse h-screen">
        <div className="p-5 lg:p-0 m-3">
          <h1 className="lg:text-5xl text-3xl font-bold text-secondary">
            The World is Yours let's Explore
          </h1>

          <Link
            to="/addTrip"
            className="block w-fit lg:p-3 lg:px-6 p-2 px-4 my-4 bg-secondary hover:shadow-lg duration-500 hover:bg-secondary/70 text-white font-medium rounded"
          >
            Plan trips
          </Link>
        </div>
        <img className="lg:w-3/5" src="/hero.png" alt="heroimg" />
      </section>
    </>
  );
};

export default Home;
