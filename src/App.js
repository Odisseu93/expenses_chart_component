import Balance from "./components/balance";
import Chart from "./components/chart";

function App() {
  return (
    <div className="App">
      <Balance />
      <Chart />
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
