import React, { useState } from "react";

const AddMovieForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    releaseYear: "",
    genre: "",
    director: "",
    actors: "",
    language: "",
    country: "",
    rating: "",
    plot: "",
    awards: "",
    posterUrl: "",
    trailerUrl: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "releaseYear" || name === "rating" ? parseInt(value) : value,
    }));
  };

  return (
    <div>
      <h2>Add New Movie</h2>
      <form>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          id="title"
          type="text"
          value={formData.title}
          onChange={onChangeHandler}></input>
      </form>
    </div>
  );
};

export default AddMovieForm;
