import React, { useState } from "react";

import "./App.css";
import { moviesList } from "./assets/mookData";
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import MovieItem from './components/MovieItem'
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [movieList, setMovieList] = useState(moviesList);
  const [searchWord, setSearchWord] = useState("");
  const [ratingSearch, setRatingSearch] = useState(0);

  const addMovie = (newMovie) => setMovieList([...movieList, newMovie]);
  const handleSearch = (e) => setSearchWord(e.target.value);

  return (
    <div className="container">
      <Router>
        <SearchBar
          handleSearch={handleSearch}
          setRatingSearch={setRatingSearch}
          ratingSearch={ratingSearch}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={props => 
              <MoviesList
                moviesArray={
                  searchWord
                    ? movieList.filter((movie) =>
                        movie.title
                          .toLowerCase()
                          .includes(searchWord.toLowerCase())
                      )
                    : ratingSearch > 1
                    ? movieList.filter((movie) => movie.rate >= ratingSearch)
                    : movieList
                }
              />
            }
          />
        </Switch>
        <Route exact path='/film/:id' component={MovieItem} />
        <AddMovie handleAdd={addMovie} />
      </Router>
    </div>
  );
}

export default App;
