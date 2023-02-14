import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import SavedShows from "../components/SavedShows";

const account = () => {
  return (
    <ProtectedRoute>
      <div className="text-white w-full h-[360px] md:h-[480px] lg:h-[720px] xl:h-[1080px]">
        <div className="absolute w-full h-[360px] md:h-[480px] lg:h-[720px] xl:h-[1080px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover lg:object-top"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="absolute top-[10%] lg:top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </ProtectedRoute>
  );
};

export default account;
