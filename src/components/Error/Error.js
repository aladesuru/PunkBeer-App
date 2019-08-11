import React from "react";
import PropTypes from "prop-types";

const ErrorComponent = ({ content }) => {
  return (
    <div className="error-container">
      <p data-testid="err-msg">{content} </p>
    </div>
  );
};
ErrorComponent.propTypes = {
  content: PropTypes.string.isRequired
};

export default ErrorComponent;
