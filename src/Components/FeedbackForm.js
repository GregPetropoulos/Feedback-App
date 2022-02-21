import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

const FeedbackForm = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* ! TODO  - rating select component*/}
        <div className='input-group'>
          <input
            type='text'
            className=''
            placeholder='Write a review'
            onChange={handleTextChange}
            value={text}
          />
          <Button type='submit'>Send</Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
