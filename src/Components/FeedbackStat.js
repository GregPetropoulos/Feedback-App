//! import PropTypes from 'prop-types';
import FeedbackContext from '../context/FeedbackContext';
import { useContext } from 'react';



function FeedbackStat() {
  const { feedback } = useContext(FeedbackContext);

  // Calculate rating average
  let average =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedback.length;
  // console.log(average);

  //   The toFixed() method formats a number using fixed-point notation.

  // The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.
  // AKA removes trailing zeros

  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='feedback-stat'>
      <h4>{feedback.length}Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}
// FeedbackStat.propTypes = {
//   feedback: PropTypes.array.isRequired
// };

export default FeedbackStat;
