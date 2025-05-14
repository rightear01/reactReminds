import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({name, favoriteNumber, children}) => {

  return (
    <div>
      <h1>{`이름은 ${name}입니다.`}</h1>
      <div>children {children}</div>
      <div>favoriteNumber {favoriteNumber}</div>
    </div>
  );  
}

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;