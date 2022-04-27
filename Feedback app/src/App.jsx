import { useState } from "react";
import "./App.css";
// import Feedbackitems from "../components/Feedbackitems";
import FeedbackList from "../components/FeedbackList";
import FeedbackData from "../data/data";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackForm from "../components/FeedbackForm";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id != id));
  };

  return (
    <div className="App">
      <FeedbackForm/>
      <FeedbackStats feedback={feedback}/>
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </div>
  );
}

export default App;
