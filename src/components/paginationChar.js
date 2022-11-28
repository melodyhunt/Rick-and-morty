import React from "react";

const Pagination = ({ prev, next, onPrevius, onNext }) => {
  const handlePrevius = () => {
    onPrevius();
  };

  const handleNext = () => {
    onNext();
  };
  return (
    <div className="flex flex-row justify-center pb-8 font-primary">
      {prev ? (
        <button
          className="px-6 py-2 mx-2 border-2 border-primario text-primario hover:border-secundario hover:text-secundario"
          onClick={handlePrevius}
        >
          Previus
        </button>
      ) : null}
      {next ? (
        <button
          className="px-6 py-2 mx-2 border-2 border-primario text-primario hover:border-secundario hover:text-secundario"
          onClick={handleNext}
        >
          Next
        </button>
      ) : null}
    </div>
  );
};

export default Pagination;
