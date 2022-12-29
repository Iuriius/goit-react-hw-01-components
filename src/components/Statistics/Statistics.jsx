import PropTypes from "prop-types";
import css from "./Statistics.module.css";

function randomColor() {return `#${Math.floor(Math.random() * 16777215).toString(16)}`;}
// console.log(randomColor());

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statlist}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={css.item}
            style={{ backgroundColor: randomColor() }}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
title: PropTypes.string,
data: PropTypes.exact({
id: PropTypes.number.isRequired,
label: PropTypes.string.isRequired,
percentage: PropTypes.number.isRequired,
}),
};