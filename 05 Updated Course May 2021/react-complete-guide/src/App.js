import Expenses from "./components/Expenses/Expenses";

function App() {
  // Sample data for testing 7/21/21
  const expenses = [
    {
      id: 0,
      title: "Rent",
      amount: 1100.0,
      date: new Date(2021, 0, 1),
    },
    {
      id: 1,
      title: "Car Insurance",
      amount: 295.67,
      date: new Date(2021, 6, 21),
    },
    {
      id: 3,
      title: "Health Insurance",
      amount: 300.0,
      date: new Date(2021, 6, 28),
    },
  ];

  return (
    <div>
      <h2>Let's get started2!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
