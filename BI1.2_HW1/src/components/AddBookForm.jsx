import React, { useState } from "react";

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: "",
    language: "",
    country: "",
    rating: "",
    summary: "",
    coverImageUrl: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "publishedYear" || name === "rating" ? parseInt(value) : value,
    }));
  };
  return (
    <div>
      <h2>Add New Movie</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="author">Author:</label>
        <br />
        <input
          id="author"
          name="author"
          type="text"
          value={formData.author}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="publishedYear">Published Year:</label>
        <br />
        <input
          id="publishedYear"
          name="publishedYear"
          type="text"
          value={formData.publishedYear}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="genre">Genre:</label>
        <br />
        <input
          id="genre"
          name="genre"
          type="text"
          value={formData.genre}
          onChange={onChangeHandler}></input>
        <br />
        <br />

        <label htmlFor="language">Language:</label>
        <br />
        <input
          id="language"
          name="language"
          type="text"
          value={formData.language}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="country">Country:</label>
        <br />
        <input
          id="country"
          name="country"
          type="text"
          value={formData.country}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="rating">Rating:</label>
        <br />
        <input
          id="rating"
          name="rating"
          type="text"
          value={formData.rating}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="summary">Summary:</label>
        <br />
        <input
          id="summary"
          name="summary"
          type="text"
          value={formData.summary}
          onChange={onChangeHandler}></input>
        <br />
        <br />

        <label htmlFor="coverImageUrl">Cover Image URL:</label>
        <br />
        <input
          id="coverImageUrl"
          name="coverImageUrl"
          type="text"
          value={formData.coverImageUrl}
          onChange={onChangeHandler}></input>
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBookForm;
