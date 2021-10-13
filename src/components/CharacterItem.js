import React from "react";

const CharacterItem = ({ item }) => {
  var description = "";
  if (item.description !== "") {
    description = item.description;
  } else {
    description = "No Description!";
  }
  return (
    <div className="content">
      <div className="content-inner">
        <div className="content-front">
          <img src={item.thumbnail.path + "/portrait_fantastic.jpg"} alt="" />
        </div>
        <div className="content-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Name:</strong> {item.name}
            </li>
            <li>
              <strong>Description:</strong> {description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
