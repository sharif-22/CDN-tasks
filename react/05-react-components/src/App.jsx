import React from "react";
import Navbar from "./Components/Navbar";
import data from "./data/data.json";
import Alert from "./Components/UiKits/Alert";
import Button from "./Components/UiKits/Button";
import { FaReact } from "react-icons/fa";
import { GiPowerButton } from "react-icons/gi";
import Card from "./Components/UiKits/Card";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl">
        <section>
          <h2 className="text-3xl font-medium py-3 ">Alert's</h2>
          {/* alert  */}
          {data[0].alert.map((alert) => {
            const {
              alertTitle,
              alertMsg,
              bgColor,
              bgHoverColor,
              bgColorClose,
              id,
            } = alert;
            return (
              <Alert
                key={id}
                alertTitle={alertTitle}
                alertMsg={alertMsg}
                bgColor={bgColor}
                bgHoverColor={bgHoverColor}
                bgColorClose={bgColorClose}
              />
            );
          })}
          <Alert
            bgColor="bg-indigo-400"
            bgColorClose="bg-indigo-500"
            bgHoverColor="hover:bg-indigo-600"
          >
            <div className="flex items-center gap-2 text-white font-medium">
              <FaReact size={32} /> <p>Custom Prop Child</p>
            </div>
          </Alert>
          {/* alert */}
        </section>
        {/* buttons */}
        <section className="text-3xl font-medium py-3">
          <h2 className="text-3xl font-medium py-3 ">Button's</h2>

          <div className="flex gap-4">
            {data[0].button.map((btn) => {
              const {
                bgColor,
                bgColorHover,
                textColor,
                textColorHover,
                id,
                btnName,
              } = btn;

              return (
                <Button
                  btnName={btnName}
                  key={id}
                  bgColor={bgColor}
                  bgColorHover={bgColorHover}
                  textColor={textColor}
                  textColorHover={textColorHover}
                />
              );
            })}
            <Button
              bgColor="bg-green-300"
              bgColorHover="hover:bg-green-400"
              textColor="text-black"
              textColorHover="hover:text-green-800"
            >
              <small className="flex gap-2">
                <GiPowerButton size={24} />
                <span>ON</span>
              </small>
            </Button>
          </div>
        </section>
        {/* buttons */}

        {/* card */}
        <section className="text-3xl font-medium py-3">
          <h2 className="text-3xl font-medium py-3 ">Card's</h2>

          <div className="flex">
            {data[0].card.map((card) => {
              const { title, src, desc, id, button } = card;
              return (
                <Card
                  key={id}
                  title={title}
                  src={src}
                  desc={desc}
                  btnName={button}
                />
              );
            })}
          </div>
        </section>
        {/* card */}
      </main>
    </>
  );
};

export default App;
