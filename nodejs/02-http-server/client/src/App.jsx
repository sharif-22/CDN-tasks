import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InternsCard from "./components/InternsCard";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center">
        {data.map((intern) => {
          return <InternsCard github={intern.github} name={intern.name} />;
        })}
      </div>
      <Footer />
    </>
  );
};

export default App;
