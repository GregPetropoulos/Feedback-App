import { useState, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {
  // *Context Provider state
  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

  //* UseEffect for the edit state to be watched
  useEffect(() => {
    console.log('hello useffect');
    // check if edit ===true then if so disable button and update with the feedbackEdit state
    if(feedbackEdit.edit===true){
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
      setBtnDisabled(false);
    }
  }, [feedbackEdit]);

  // * Local state
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {
    // * REALTIME VALIDATION
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    // *-------REALTIME VALIDATION

    // console.log(e.target.value);
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        // text:text,
        // rating:rating
        // shorthand just do the below:
        text,
        rating
      };
      // setting a conditional to update the feedback
      if(feedbackEdit.edit===true){
        updateFeedback(feedbackEdit.item.id, newFeedback)
      }else{
        // if there is nothing to be edited then just add a new feedback item
        
        addFeedback(newFeedback);
      }
      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
