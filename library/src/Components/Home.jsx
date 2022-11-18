import React, { useState } from "react";
import axios from "axios";
import "./home.css";

const Home = () => {
  const [title, settitle] = useState();
  const [author, setAuthor] = useState();
  const [content, setContent] = useState();
  const [date, setDate] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title,
      author,
      content,
      date,
      category,
      price,
    };

    axios({
      method: "post",
      url: ` http://localhost:8000/book-list`,
      data: data,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container_home">
      <div>
        <p className="title">ADD NEW BOOK</p>
      </div>

      <div className="input_form">
        <div className="line_of_form">
          <label htmlFor="title">
            Name :
            <input
              id="title"
              className="input_box"
              type="text"
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
          </label>
          <label>
            Author :
            <input
              className="input_box"
              type="text"
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />{" "}
          </label>
          <label>
            {" "}
            Description :
            <input
              className="input_box"
              type="text"
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </label>{" "}
        </div>
        <div className="line_of_form">
          <label>
            {" "}
            Category :
            <input
              className="input_box"
              type="text"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </label>

          <label>
            {" "}
            Date :
            <input
              className="input_box"
              type="date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </label>
          <label>
            Price :
            <input
              className="input_box"
              type="number"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </label>
        </div>
      </div>
      <div className="submit_div">
        <button className="submit_but" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
export default Home;
