import React from "react";

type SearchResultItemProps = {
  title: string;
  price: number;
  picture: string;
};

function SearchResultItem(props: SearchResultItemProps) {
  const { title, price, picture } = props;
  return (
    <div className="search-result-item">
      <div className="search-result-item__description">
        <h4 className="search-result-item__title">{title}</h4>
        <h6 className="search-result-item__precio">${price}</h6>
      </div>
      <div className="search-result-item__img">
        <img className="search-result-item__img__img" src={picture} />
      </div>
    </div>
  );
}

export { SearchResultItem };
