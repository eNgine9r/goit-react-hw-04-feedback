import React from "react";
import PropTypes from "prop-types";
import css from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <>
      <ul className={css.buttonList}>
        {options.map((option) => (
          <li className={css.buttonItems} key={option}>
            <button
              className={css.button}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >{option}
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired
}

