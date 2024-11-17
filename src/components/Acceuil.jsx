import React from 'react'
import { Link } from "react-router-dom";
const Acceuil = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-slate-200">
      <div className="w-full grid grid-cols-2 justify-center p-5 ">
        <div className="bg-white  p-3">
          <h1 className="text-2xl font-bold text-center justify-center">
            HELLO WORLD!!
          </h1>
        </div>
        <div className="bg-blue-600  p-3  font-bold text-white text-2xl  text-center justify-center">
          <h1>Welcome MY DEAR</h1>
          <h1>HOW ARE YOU ??</h1>
        </div>
        <div className="mt-10 justify-center items-center">
          <Link to="/Login">
            <p className="bg-blue-600 p-3 rounded-lg text-white">Commencer</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Acceuil