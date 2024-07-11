import React from "react";
import Books from "./components/Books";
import BooksByTitle from "./components/BooksByTitle.jsx";

const App = () => {
  return (
    <div>
      <Books />
      <BooksByTitle title="Shoe Dog" />
    </div>
  );
};

export default App;
