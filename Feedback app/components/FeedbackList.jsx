import Feedbackitems from "./Feedbackitem";
function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length == 0) {
    return <p>No Feedbacks Given Yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((itm) => (
        <Feedbackitems key={itm.id} item={itm} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default FeedbackList;
