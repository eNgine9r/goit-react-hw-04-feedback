import React from "react"
import PropTypes from "prop-types";
import css from './Statistics.module.css';


const Statistics = ({ options, total, positivePercentage }) => {
    return (
    <>
      <ul className={css.conteinerStatistics}>
        {Object.keys(options).map(name => (
          <li key={name} className={css[name]}>
            <p>
              {name}: {options[name]}
            </p>
          </li>
        ))}
      </ul>
      <ul className={css.conteinerStatistics}>
        <li>
          <p>Total: {total}</p>
        </li>
      </ul>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  options: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

