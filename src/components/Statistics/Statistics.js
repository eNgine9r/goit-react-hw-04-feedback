import React from "react"
import PropTypes from "prop-types";
import css from './Statistics.module.css';


const Statistics = ({ names, total, positivePercentage }) => {
    return (
    <>
      <ul className={css.conteinerStatistics}>
        {Object.keys(names).map(name => (
          <li key={name} className={css[name]}>
            <p>
              {name}: {names[name]}
            </p>
          </li>
        ))}
      </ul>
      <ul className={css.conteinerStatistics}>
        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>Positive feedback: {positivePercentage}</p>
        </li>
      </ul>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  names: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

