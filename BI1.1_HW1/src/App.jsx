import React from "react";
import Movies from "./components/Movies";
import MovieByTitle from "./components/MovieByTitle";

const App = () => {
  return (
    <div>
      <Movies />
      <MovieByTitle title="Gully Boy" />
    </div>
  );
};

export default App;
