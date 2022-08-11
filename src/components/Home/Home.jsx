import React, { useEffect } from 'react';
import './Home.sass';
import MovieListing from '../MovieListing/MovieListing';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovie } from '../../features/movies/movieSlice';

const Home = () => {
    // dummy text for search
    const movieText = 'Harry';

    // dispatch
    const dispatch = useDispatch();

    // effect for movies
    useEffect( () => {
        const fetchMovies = async() => {
            const response = await movieApi.get( `?apiKey=${ APIKey }&s=${ movieText }&type=movie` )
                .catch( error => console.log( error ) );

            dispatch( addMovie( response.data ) )
        }

        fetchMovies();
    }, [ dispatch ] );

    return (
        <div>
            <div className={ 'banner-img' }></div>
            <MovieListing/>
        </div>
    );
};

export default Home;