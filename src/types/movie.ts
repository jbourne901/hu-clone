export default interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: Date;
    first_air_date: Date;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    media_type: string;
}

export interface IMovieList {
    results: IMovie[];
}