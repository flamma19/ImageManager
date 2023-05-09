import React from "react";
import github from "../github.svg";

const Title = () => {
  return (
    <div>
      <header className="header">
        <h1>Mahdi Vafaii</h1>
        <a
          className="github-link"
          href="https://github.com/flamma19/ImageManager"
        >
          <img src={github} alt="github-mark" className="github-logo" />
        </a>
      </header>
      <div className="title">
        <h2>A simple Image Gallery!</h2>
      </div>
    </div>
  );
};

export default Title;
