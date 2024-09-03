import "./App.css";
import ZipInput from "./components/ZipInput";
import Weather from "./components/Weather";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header className="App-header">Fullstack Weather App</header>
      <Routes>
        <Route path="/" element={<ZipInput />} />
        <Route path="/Weather" element={<Weather />} />
      </Routes>
      <footer className="App-footer">sdkjhlskdfhsf</footer>
    </BrowserRouter>
  );
}

export default App;
