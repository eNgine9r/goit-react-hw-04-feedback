import React from "react";
import PropTypes from "prop-types";
import css from '../Section/Section.module.css';

const Section = ({ title, children }) => (
  <section>
    <h2 className={css.sectionTitle}>{title}</h2>
    {children}
  </section>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}