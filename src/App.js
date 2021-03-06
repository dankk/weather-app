import { useSelector } from "react-redux";
import { Location } from "./components/Location";
import { WeatherDetails } from "./components/WeatherDetails";
import "./styles.css";

function App() {
  const city = useSelector((state) => state.city);
  const error = useSelector((state) => state.error);

  return (
    <div className="app">
      <Location />
      {city ? <WeatherDetails city={city} /> : null}
      {error && <div className="error">Error: {error}</div>}
    </div>
  );
}

export default App;
