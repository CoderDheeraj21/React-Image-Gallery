import React from "react";

export const ImageCard = ({ card }) => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="max-w-sm rounded-lg overflow-hidden border mt-20">
        <img className="w-full" src={card.webformatURL} />

        <div className="p-4">
          <h1 className="text-blue-400 font-bold">Photo By {}</h1>

          <div className="text-sm mt-2">
            <p className="">Views: {card.views}</p>
            <p className="">Downloads: {card.downloads}</p>
            <p className="">Likes: {card.likes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
