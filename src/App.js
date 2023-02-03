import './App.css';
import { useState } from 'react';
import MovieList from './component/MovieList';
const App=()=> {
  const [movie ]= useState ([
    {
      "Title":"abs",
      "Year": "2004",
      "imdb":"4.5",
      "Type": "Movie",
      "poster":"" ,
    },
    {
      "Title":"abs",
      "Year": "2004",
      "imdb":"4.5",
      "Type": "Movie",
      "poster":"" ,
    },
    {
      "Title":"abs",
      "Year": "2004",
      "imdb":"4.5",
      "Type": "Movie",
      "poster":"" ,
    }
  ]);

  return (
   <div className='App'>
    <div className='row'>
      <MovieList movie={movie} />
    </div>
   </div>
  );
};

export default App;
