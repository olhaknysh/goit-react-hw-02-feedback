import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const names = Object.keys(options);

  return (
    <div className={styles.buttons}>
      <button name={names[0]} onClick={onLeaveFeedback}>
        Good
      </button>
      <button name={names[1]} onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button name={names[2]} onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
