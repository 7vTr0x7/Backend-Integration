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
        <br />
        <br />
        <label htmlFor="releaseYear">Release Year:</label>
        <br />
        <input
          id="releaseYear"
          type="text"
          value={formData.releaseYear}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="genre">Genre:</label>
        <br />
        <input
          id="genre"
          type="text"
          value={formData.genre}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="director">Director:</label>
        <br />
        <input
          id="director"
          type="text"
          value={formData.director}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="actors">Actors:</label>
        <br />
        <input
          id="actors"
          type="text"
          value={formData.actors}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="language">Language:</label>
        <br />
        <input
          id="language"
          type="text"
          value={formData.language}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="country">Country:</label>
        <br />
        <input
          id="country"
          type="text"
          value={formData.country}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="rating">Rating:</label>
        <br />
        <input
          id="rating"
          type="text"
          value={formData.rating}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="awards">Awards:</label>
        <br />
        <input
          id="awards"
          type="text"
          value={formData.awards}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="posterUrl">Poster URL:</label>
        <br />
        <input
          id="posterUrl"
          type="text"
          value={formData.posterUrl}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="trailerUrl">Trailer URL:</label>
        <br />
        <input
          id="trailerUrl"
          type="text"
          value={formData.trailerUrl}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddMovieForm;
