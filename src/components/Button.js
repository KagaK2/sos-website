import React from "react";
import PropTypes from "prop-types";
import buttonStyles from "../styles/Buttons.module.scss";

const Button = props => {
  return (
    <div
      className={`${buttonStyles.btnContainer} ${
        buttonStyles[props.specialClass]
      }`}
      style={{
        height: props.height,
        width: props.width
      }}
      onClick={props.onClick}
    >
      <div
        className={buttonStyles.btn}
        style={{ backgroundImage: props.backgroundImage }}
      >
        <div className={buttonStyles.textContainer}>
          <p style={{ fontSize: `${props.textsize}` }}>{props.name}</p>
        </div>
      </div>
    </div>
  );
};

Button.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string
};

export default Button;
