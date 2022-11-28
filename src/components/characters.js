import React from "react";
import { BsFillRecordFill } from "react-icons/bs";
const Characters = ({ characters = [] }) => {
  return (
    <div className="grid grid-cols-1 md:px-24 xl:grid-cols-2 2xl:grid-cols-3">
      {characters.map((item, index, location) => (
        <div
          key={index}
          className="m-5 rounded-lg shadow-lg md:m-9 bg-card bg-opacity-70"
        >
          <div className="flex flex-col md:flex-row ">
            <img
              src={item.image}
              alt="imagen"
              className="w-full mr-2 md:w-56 "
            />
            <section className="text-left text-white font-primary">
              <h1 className="my-2 text-xl md:text-2xl font-secundary text-primario">
                {item.name}
              </h1>
              <p className="flex flex-row items-start">
                <span className={item.status}>
                  <BsFillRecordFill />
                </span>
                {item.status}-{item.species}
              </p>
              <h4> {item.gender}</h4>
              <h3>{item.type}</h3>
              <p className="font-bold text-fondo">Last known location:</p>
              <p className="ml-4">{item.location.name}</p>
              <p className="font-bold text-fondo">First seen in:</p>
              <p className="ml-4">{item.origin.name}</p>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
