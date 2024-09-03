import "../App.css";
import { Link } from "react-router-dom";

function Weather() {
  return (
    <div className="App-body">
      <div className="deets">
        <h2>Weather</h2>
        <p>City: New York</p>
        <p>Temperature: 72</p>
        <p>Humidity: 50%</p>
        <p>Winds: 5 mph</p>
      </div>
      <Link to="/">Back to search</Link>
    </div>
  );
}

export default Weather;
