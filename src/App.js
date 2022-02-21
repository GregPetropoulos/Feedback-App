import React, { Fragment, useState } from 'react';
import Header from './Components/Header';
import FeedbackList from './Components/FeedbackList';
import FeedbackData from './data/FeedbackData'
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
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>
    </Fragment>
  );
}


export default App;
