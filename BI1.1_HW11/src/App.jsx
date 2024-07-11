import React from "react";
import Books from "./components/Books";

const App = () => {
  return (
    <div>
      <Books />
      <BooksByTitle title="Shoe Dog" />
    </div>
  );
};

export default App;
