import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Place from "./components/Place/Place";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/metabnb" element={<Home />} />
        <Route path="/place" element={<Place />} />
      </Routes>
    </div>
  );
}

export default App;
