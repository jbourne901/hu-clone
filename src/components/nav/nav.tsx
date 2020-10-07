import React from 'react';
import './nav.css';
import req from "../../requests";

interface IProps {
  setSelectedOption: (opt: string) => void;
}

const Nav = (props: IProps) => {
  const ss = props.setSelectedOption;
  return (
    <div className="nav">
      <h2 
        className="nav-option"
        onClick={() => ss(req.fetchTrending)}
      >
        Trending
      </h2>
      <h2 
        className="nav-option"
        onClick={() => ss(req.fetchTopRated)}
      >
        Top Rated
      </h2>
      <h2 
        className="nav-option"
        onClick={() => ss(req.fetchActionMovies)}
      >
        Action
      </h2>
      <h2 
        className="nav-option"
        onClick={() => ss(req.fetchComedyMovies)}
      >
        Comedy
      </h2>
      <h2 
        className="nav-option"
        onClick={() => ss(req.fetchHorrorMovies)}
      >

        Horror
      </h2>
      <h2 
        className="nav-option"
        onClick={() => ss(req.fetchRomanceMovies)}
      >
        Romance
      </h2>
      <h2 
        className="nav-option"
        onClick={() => ss(req.fetchMystery)}
      >
        Mystery
      </h2>
      <h2 
        className="nav-option"
        onClick={() => ss(req.fetchSciFi)}
      >
        Sci-fi
      </h2>
      <h2 
        className="nav-option"
        onClick={() => ss(req.fetchWestern)}
      >
        Western
      </h2>
      <h2 
        className="nav-option"
        onClick={() => ss(req.fetchAnimation)}
      >
        Animation
      </h2>
      <h2 
        className="nav-option"
        onClick={() => ss(req.fetchTV)}
      >
        Movie
      </h2>

    </div>
  );
}

export default Nav;
