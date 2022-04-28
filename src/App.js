import { useSelector } from "react-redux";
import { Location } from "./components/Location";
import { WeatherDetails } from "./components/WeatherDetails";
import "./App.css";

function App() {
  const city = useSelector((state) => state.city);

  return (
    <div className="App">
      <Location />
      <WeatherDetails city={city} />
    </div>
  );
}

export default App;
