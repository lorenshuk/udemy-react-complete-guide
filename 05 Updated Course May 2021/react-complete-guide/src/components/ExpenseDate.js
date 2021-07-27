import './ExpenseDate.css'

function ExpenseDate(props) {
  const monthVar = props.date.toLocaleString("en-US", { month: "long" });
  const dayVar = props.date.toLocaleString("en-US", { day: "2-digit" });
  const yearVar = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{monthVar}</div>
      <div className="expense-date__year">{yearVar}</div>
      <div className="expense-date__day">{dayVar}</div>
    </div>
  );
}

export default ExpenseDate;