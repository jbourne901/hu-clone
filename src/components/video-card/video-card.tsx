import React from 'react';
import './video-card.css';
import IMovie from '../../types/movie';
import TextTruncate from "react-text-truncate";
import ThumbUpSharp from "@material-ui/icons/ThumbUpSharp";

interface IProps {
  movie: IMovie;
}

const VideoCard = (props: IProps) => {
  const base_url = "https://image.tmdb.org/t/p/original";
  return (
    <div className="video-card">
      <img  src={`${base_url+(props.movie.backdrop_path || props.movie.poster_path)}`} 
            alt="movie poster"
            className="video-card-img"
      />
      <TextTruncate 
        line={1}
        element="p"
        truncateText="..."
        text={props.movie.overview}
        textTruncateChild = {<a href="#">Read on</a>}
      />
      <div>
        <h2 className="video-card-title">
          {props.movie.title || props.movie.original_title}
        </h2>
        <p className="video-card-stats">
          {props.movie.media_type && `${props.movie.media_type} * `}
          {props.movie.release_date || props.movie.first_air_date} *
          <ThumbUpSharp />{" "}
          {props.movie.vote_count}
        </p>
      </div>
    </div>
  );
}

export default VideoCard;
