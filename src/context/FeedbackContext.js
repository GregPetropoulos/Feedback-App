import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'this is item 1 from context',
      rating: 10
    },
    {
      id: 2,
      text: 'this is item 2 from context',
      rating: 2
    },
    {
      id: 3,
      text: 'this is item 3 from context',
      rating: 6
    }
  ]);

// State to edit feedback
const [feedbackEdit, setFeedbackEdit]= useState({
  item:{},
  edit:false
})

// Add feedback
  const addFeedback = (newFeedback) => {
    //*Added the uuid function to give the submitted data a unique id
    newFeedback.id = uuidv4();

    //*To add the feedback to the state set to an array and get a copy ...feedback and putting into the array, then put the new feedback at the front of the array
    setFeedback([newFeedback, ...feedback]);
    console.log(newFeedback);
  };

  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // An edit function to utilize the edit state
const editFeedback =(item)=> {
setFeedbackEdit({
  item,
  edit:true
})
}

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit
      }}>
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
