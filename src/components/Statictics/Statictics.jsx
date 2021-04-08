import PropTypes from 'prop-types';

const Statictics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul>
    <li>
      <p>Good: {good}</p>
    </li>
    <li>
      <p> Neutral: {neutral}</p>
    </li>
    <li>
      <p>Bad: {bad}</p>
    </li>
    <li>
      <p>Total: {total}</p>
    </li>
    <li>
      <p>Positive percentage : {positivePercentage}%</p>
    </li>
  </ul>
);

Statictics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statictics;
