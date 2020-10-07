import React, {useState, useEffect} from 'react';
import './results.css';
import VideoCard from "../video-card";
import IMovie, {IMovieList} from "../../types/movie";
import axios from "../../axios";
import { AxiosResponse } from 'axios';

interface IProps {
  selectedOption: string;
}

const Results = (props: IProps) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<IMovieList, AxiosResponse<IMovieList>>(props.selectedOption);
        console.dir(res)
        setMovies(res.data.results);
      } catch(err) {
        console.error(err);
      }
    };
    fetchData();
  }, [props.selectedOption]);

  return (
    <div className="results">
        {movies.map(m => (
          <VideoCard key={m.id} movie={m} />
        ))}
    </div>
  );
}

export default Results;
