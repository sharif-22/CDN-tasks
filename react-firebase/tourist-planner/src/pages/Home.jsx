import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="flex justify-evenly lg:justify-between max-w-7xl mx-auto items-center lg:flex-row flex-col-reverse h-[90dvh]">
        <div className="p-5 m-3">
          <h1 className="lg:text-5xl text-3xl font-bold text-secondary ">
            The
            <img
              className="w-16 object-contain inline-block"
              src="https://upload.wikimedia.org/wikipedia/commons/9/9e/WorldTravel_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif"
              alt="globe gif"
            />
            World is Yours let's Explore
          </h1>

          <Link
            to="/addTrip"
            className="block w-fit lg:p-3 lg:px-6 p-2 px-4 my-6 text-lg bg-secondary hover:shadow-lg duration-500 hover:bg-secondary/70 text-white font-medium rounded"
          >
            Plan trips
          </Link>
        </div>
        <img
          className="lg:w-3/5 drop-shadow animate-slideDown duration-500"
          src="/hero.png"
          alt="heroimg"
        />
      </section>
    </>
  );
};

export default Home;
