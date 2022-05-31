import Balance from "./components/balance";

function App() {
  return (
    <div className="App">
      <Balance />
      <div className="bar-chart">
        <h2>Spending - Last 7 days</h2>

        mon
        tue
        wed
        thu
        fri
        sat
        sun
      </div>
      <div className="total">
        <span>Total this month</span>
        <h2>$478.33</h2>

        <p>+2.4%</p>
        <span>from last month</span>
      </div>
    </div>
  );
}

export default App;
