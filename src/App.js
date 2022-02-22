import React, { Fragment} from 'react';
import Header from './x/Header';
import FeedbackList from './x/FeedbackList';
import FeedbackStat from './x/FeedbackStat';
import FeedbackForm from './x/FeedbackForm';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutIconLink from './x/AboutIconLink';

// * Wrapping the app in the context provider api aka global state
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          {/* Routes replaced the old <Switch> from version 5 react-router-dom */}
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStat />
                  <FeedbackList />
                </>
              }></Route>
            <Route path='/about' element={<About />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
