import { useSelector } from "react-redux";
import { Location } from "./components/Location";
import { WeatherDetails } from "./components/WeatherDetails";
import "./App.css";

function App() {
  const city = useSelector((state) => state.city);
  const error = useSelector((state) => state.error);

  return (
    <div className="App">
      <Location />
      <WeatherDetails city={city} />
      {error && <div className="error">Error: {error}</div>}
    </div>
  );
}

export default App;
