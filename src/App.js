import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './App.sass';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <div className={ 'container' }>
                    <Routes>
                        <Route path={ '/' } element={ <Home/> }/>
                        <Route path={ '/movie/:imdbID' } element={ <MovieDetail/> }/>
                        <Route path={ '*' } element={ <PageNotFound/> }/>
                    </Routes>
                </div>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
