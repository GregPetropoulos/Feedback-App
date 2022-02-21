import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStat from './components/FeedbackStat';
import FeedbackForm from './components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    //   Added the uuid function to give the submitted data a unique id
    newFeedback.id = uuidv4();

    // To add the feedback to the state set to an array and get a copy ...feedback and putting into the array, then put the new feedback at the front of the array
    setFeedback([newFeedback,...feedback])
    console.log(newFeedback);
  };
  return (
    <Fragment>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStat feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </Fragment>
  );
}

export default App;
