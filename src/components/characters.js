import React from "react";
import { BsFillRecordFill } from "react-icons/bs";
const Characters = ({ characters = [] }) => {
  return (
    <div className="grid grid-cols-2 px-24">
      {characters.map((item, index) => (
        <div
          key={index}
          className="m-9 text-center bg-card rounded-lg border-2 border-primario bg-opacity-70"
        >
          <div className="flex flex-row ">
            <img src={item.image} alt="imagen" className="w-56 mr-12" />
            <section className="font-primary">
              <h1 className="font-secundary text-2xl my-2 text-secundario">
                {item.name}
              </h1>
              <p>
                {" "}
                <span className={item.status}>
                  <BsFillRecordFill />
                </span>{" "}
                {item.status}
              </p>
              <h2> species:{item.species}</h2>
              <h3> type: {item.type}</h3>
              <h4> gender: {item.gender}</h4>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
