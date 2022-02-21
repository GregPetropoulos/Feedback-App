import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');


  const handleTextChange = (e) => {

    // * REALTIME VALIDATION
if(text === ''){
    setBtnDisabled(true)
    setMessage(null)
} else if(text !== '' && text.trim().length<=10){
setMessage('Text must be at least 10 characters')
setBtnDisabled(true)
}else{
    setMessage(null)
    setBtnDisabled(false)
}
// *-------REALTIME VALIDATION

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
            onChange={handleTextChange}
            // className=''
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
