import 'leaflet/dist/leaflet.css';
import { Map as LeafletMap } from "./components/Leaflet/Map";
import { Map as ReactLeafletMap } from "./components/ReactLeaflet/Map";

function App() {
  return (
    <div className="App">
      <LeafletMap />
      <ReactLeafletMap />
    </div>
  );
}

export default App;
