import React from "react";

class SearchResultItem extends React.Component<any, any> {
  render() {
    return (
      <div className="search-result-item">
        <div className="search-result-item__description">
          <h4 className="search-result-item__title">{this.props.title}</h4>
          <h6 className="search-result-item__precio">${this.props.price}</h6>
        </div>
        <div className="search-result-item__img">
          <img
            className="search-result-item__img__img"
            src={this.props.picture}
          />
        </div>
      </div>
    );
  }
}

export { SearchResultItem };
