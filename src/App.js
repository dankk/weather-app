import { Location } from "./components/Location";
import { WeatherDetails } from "./components/WeatherDetails";

function App() {
  return (
    <>
      <Location />
      <WeatherDetails city={"Toronto"} />
    </>
  );
}

export default App;
