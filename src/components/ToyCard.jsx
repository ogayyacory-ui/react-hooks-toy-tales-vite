import React from "react";

function ToyCard({ toy, onDeleteToy, onLikeToy }) {
  const { id, name, image, likes } = toy;

  function handleDeleteClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteToy(id));
  }

  function handleLikeClick() {
    const updatedLikes = likes + 1;

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        likes: updatedLikes,
      }),
    })
      .then((r) => r.json())
      .then((updatedToy) => onLikeToy(updatedToy));
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {'<3'}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;