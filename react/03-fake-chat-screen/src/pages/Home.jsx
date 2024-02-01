import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Discord from "../components/Discord";

const Home = () => {
  const { register, handleSubmit } = useForm();

  const [msgs, setMsgs] = useState([]);

  const [server, setServer] = useState("Cyberdude");
  const [time, setTime] = useState("7:30");
  const [chatDate, setChatDate] = useState("31 January 2002");

  function saveMsg(data) {
    const { person1Msg, person1Name, person2Msg, person2Name } = data;
    const filterMsgs = {
      person1Msg,
      person1Name,
      person2Msg,
      person2Name,
    };
    msgs.length == 0 ? setMsgs([filterMsgs]) : setMsgs([...msgs, filterMsgs]);
  }

  useEffect(() => {
    console.log(msgs);
  }, [msgs]);

  return (
    <>
      <div className="flex gap-4 w-full justify-center items-center h-screen">
        <form
          id="chatForm"
          onSubmit={handleSubmit((data) => {
            saveMsg(data);
          })}
        >
          <div className="bg-slate-200 w-96 h-[75dvh] p-5 space-y-4">
            {/* time  */}
            <div className="flex flex-col p-2 border border-slate-400">
              <label className="text-sm font-medium" htmlFor="time">
                Enter Time
              </label>
              <input
                {...register("time")}
                id="time"
                placeholder="Enter Time "
                className="bg-slate-700 text-slate-400 p-1 px-2 rounded"
                onChange={(e) => {
                  setTime(e.target.value);
                }}
                type="text"
              />
            </div>
            {/* Chat Date  */}
            <div className="flex flex-col p-2 border border-slate-400">
              <label className="text-sm font-medium" htmlFor="startDate">
                Enter Chat Start Date
              </label>
              <input
                {...register("chatDate")}
                id="startDate"
                placeholder="Enter Chat Start Date "
                className="bg-slate-700 text-slate-400 p-1 px-2 rounded"
                onChange={(e) => {
                  setChatDate(e.target.value);
                }}
                type="text"
              />
            </div>
            {/* Server and DM  */}
            <div className="flex flex-col p-2 border border-slate-400">
              <label className="text-sm font-medium" htmlFor="profileName">
                Enter Profile Name
              </label>
              <input
                {...register("profile")}
                id="profileName"
                placeholder="Enter Profile name "
                className="bg-slate-700 text-slate-400 p-1 px-2 rounded"
                onChange={(e) => {
                  setServer(e.target.value);
                }}
                type="text"
              />
            </div>
            {/* Person 1 name */}
            <div className="flex flex-col p-2 border border-slate-400">
              <label className="text-sm font-medium" htmlFor="person1Name">
                Enter Person 1 Name
              </label>
              <input
                {...register("person1Name")}
                id="person1Name"
                placeholder="Enter 1st Person name "
                className="bg-slate-700 text-slate-400 p-1 px-2 rounded"
                // onChange={(e) => {
                //   console.log(e.target.value);
                //   // setServer(e.target.value);
                // }}
                type="text"
              />
            </div>
            {/* Person 1 msg */}
            <div className="flex flex-col p-2 border border-slate-400">
              <label className="text-sm font-medium" htmlFor="person1Msg">
                Enter Person 1 Message
              </label>
              <input
                {...register("person1Msg")}
                id="person1Msg"
                placeholder="Enter 1st Person Message "
                className="bg-slate-700 text-slate-400 p-1 px-2 rounded"
                // onChange={(e) => {
                //   console.log(e.target.value);
                //   // setServer(e.target.value);
                // }}
                type="text"
              />
            </div>
            {/* Person 2 name */}
            <div className="flex flex-col p-2 border border-slate-400">
              <label className="text-sm font-medium" htmlFor="person2Name">
                Enter Person 2 Name
              </label>
              <input
                {...register("person2Name")}
                id="person2Name"
                placeholder="Enter 2nd Person name "
                className="bg-slate-700 text-slate-400 p-1 px-2 rounded"
                // onChange={(e) => {
                //   console.log(e.target.value);
                //   // setServer(e.target.value);
                // }}
                type="text"
              />
            </div>
            {/* Person 2 msg */}
            <div className="flex flex-col p-2 border border-slate-400">
              <label className="text-sm font-medium" htmlFor="person2Msg">
                Enter Person 2nd Message
              </label>
              <input
                {...register("person2Msg")}
                id="person2Msg"
                placeholder="Enter 2nd Person Message "
                className="bg-slate-700 text-slate-400 p-1 px-2 rounded"
                // onChange={(e) => {
                //   console.log(e.target.value);
                //   // setServer(e.target.value);
                // }}
                type="text"
              />
            </div>
            {/* <button
              className="bg-slate-600  rounded text-white"
              type="button"
              onClick={(e) => {
                e.preventDefault();

                const { person1Msg, person1Name, person2Msg, person2Name } =
                  data;
                persons.push({
                  person1Msg,
                  person1Name,
                  person2Msg,
                  person2Name,
                });
                console.log(data);
              }}
            ></button>
            <input type="submit" value="Submit" /> */}
            <button className="p-2 rounded bg-slate-500 text-white">
              {" "}
              add msg
            </button>
          </div>
        </form>
        <Discord
          server={server}
          time={time}
          chatDate={chatDate}
          persons={msgs}
        />
      </div>
    </>
  );
};

export default Home;
