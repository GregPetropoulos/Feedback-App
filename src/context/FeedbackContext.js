import { createContext, useEffect, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  // State to edit feedback
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Function to use the Fetch api to get the feedback from the json server and set the state,
  // Place this function in useEffect to load on first render
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();
    console.log(data);
    setFeedback(data);
    setIsLoading(false);
  };

  // Add feedback
  const addFeedback = async (newFeedback) => {
    // Making request to backend-json-server
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeedback)
    });
    const data = await response.json();
    setFeedback([data, ...feedback]);
    //IF NOT USING THE JSON SERVER
    //Added the uuid function to give the submitted data a unique id
    // newFeedback.id = uuidv4();

    //*To add the feedback to the state set to an array and get a copy ...feedback and putting into the array, then put the new feedback at the front of the array
    // setFeedback([newFeedback, ...feedback]);
    // console.log(newFeedback);
  };

  // Delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete this?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Update feedback item, this needed so we are not just adding a new item everytime we edit
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify(updItem),
    })
    const data = await response.json()
    // console.log(id,updItem);
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };
  // An edit function to utilize the edit state
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
      }}>
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
