import React from "react";

const Navbar = () => {
  return (
    <div className="py-5 mb-10 flex items-center justify-between">
      <h2 className="text-3xl font-bold text-emerald-600">Weather App</h2>
      <p className="text-md font-bold text-gray-500">
        &copy; <span>Imran Hasan Ovi</span>
      </p>
    </div>
  );
};

export default Navbar;
