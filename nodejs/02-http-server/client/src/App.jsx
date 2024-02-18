import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InternsCard from "./components/InternsCard";
import { useEffect, useState } from "react";

const App = () => {
  const [internData, setInternData] = useState([]);

  const fetchInterns = async () => {
    const data = await fetch("/api");

    const dataJson = await data.json();

    setInternData(dataJson);

    return dataJson;
  };

  useEffect(() => {
    fetchInterns();
  }, []);
  // console.log(internData);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center">
        {internData.length != 0
          ? internData.map((intern) => {
              return <InternsCard github={intern.github} name={intern.name} />;
            })
          : []}
      </div>
      <Footer />
    </>
  );
};

export default App;
