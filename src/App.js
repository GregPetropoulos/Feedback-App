import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData'
import FeedbackStat from './components/FeedbackStat'
import FeedbackForm from './components/FeedbackForm';
function App() {

    const [feedback, setFeedback] =useState(FeedbackData)


const deleteFeedback=(id)=> {
if(window.confirm('Are you sure you want to delete this')){

    setFeedback(feedback.filter(item=> item.id !== id))
}
}

  return (
    <Fragment>
      <Header/>
      <div className='container'>
      <FeedbackForm/>
          <FeedbackStat feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>
    </Fragment>
  );
}


export default App;
