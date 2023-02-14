import React, { useState, useEffect, useRef } from "react";
import requests from "../pages/api/Requests";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const dataFetchedRef = useRef(false);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  const fetchData = () => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  };

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchData();
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const uptoFirstPeriod = (str) => {
    let text = str + " ";
    return text.split(".")[0] + ".";
  };

  return (
    <div className="w-full h-[360px] md:h-[480px] lg:h-[720px] xl:h-[1080px] text-white overflow-hidden">
      <div className="absolute w-full h-[360px] md:h-[480px] lg:h-[720px] xl:h-[1080px] bg-gradient-to-r from-black"></div>
      <img
        className="w-full h-full object-cover lg:object-top"
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className="absolute w-full top-[10%] lg:top-[20%] p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
        <div className="my-4">
          <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
            Play
          </button>
          <button className="border text-white border-gray-300 py-2 px-5 ml-4">
            Watch Later
          </button>
        </div>
        <p className="text-gray-400 text-md">Released: {movie?.release_date}</p>
        <p className="w-full md:max-w-[70%] lg:max-w-[35%] xl:max-w-[35%] text-gray-200 md:text-2xl font-normal">
          <span className="hidden md:block">
            {uptoFirstPeriod(movie?.overview)}
          </span>
          <span className="md:hidden">
            {truncateString(movie?.overview, 150)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Main;
