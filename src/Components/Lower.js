import React from "react";

const list = [
  "Title",
  "Genre",
  "Year",
  "Type",
  "Released",
  "imdbRating",
  "Awards",
  "Language",
  "Country",
  "Plot",
  "Rated",
  "Director",
  "Actors",
  "Writer",
  "BoxOffice",
  "Production",
  "Runtime",
];

function Lower({ post }) {
  if (!post.Title) {
    return <div></div>;
  } else
    return (
      <div className="section">
        <h1 className="title">{post.Title}</h1>
        <div className="block">
          <div className="dock2">
            <img src={post.Poster} alt="movie" className="movie" />
          </div>
          <div className="dock2">
            <div className="items">
              {list.map((item, index) => (
                <div className="part" key={index}>
                  <p className="data">{item}</p>
                  <p className="value">{post[item]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Lower;
