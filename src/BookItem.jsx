import React from "react";
const BookItem = props => {
  console.log("props:");
  console.log(props);
  return (
    <p className="card" style={{ height: 600 }}>
      <img
        src={props.book.imageCover}
        alt=""
        className="card-img-top img-thumbnail"
      />
      <p className="card-body d-flex flex-column" style={{ maxHeight: 100 }}>
        <p>{props.book.name}</p>
        <p>{props.book.author}</p>
        <p>{props.book.price}</p>
        <button className="btn btn-outline-warning mt-auto mb-2" 
        onClick={props.addBookToCart.bind(null, props.book)}>Buy</button>

        <button onClick={props.removeBook.bind(null, props.book)}>
          Delete
        </button>
      </p>
    </p>
  );
};
export default BookItem;
