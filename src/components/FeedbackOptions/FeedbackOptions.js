import PropTypes from "prop-types";
import css from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={css.buttonList}>
    {options && options.map((option) => (
      <li className={css.buttonItems} key={option}>
        <button
          className={css.button}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string), // Define the PropTypes for options
  onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;
