import React from "react";

const Book = (props) => {
  const { img, title, author } = props;
  const clickHandler = () => alert("test");
  const complexExample = (author) => {};
  return (
    <article className="book4">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        refernce
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        complex example
      </button>
    </article>
  );
};

export default Book;
