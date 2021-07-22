import ExpenseItem from "./components/ExpenseItem";

function App() {
  // Sample data for testing 7/21/21
  const expenses = [
    { title: "Rent", amount: 1100.0, date: new Date(2021, 0, 1) },
    { title: "Car Insurance", amount: 295.67, date: new Date(2021, 6, 21) },
    { title: "Health Insurance", amount: 300.0, date: new Date(2021, 6, 28) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
