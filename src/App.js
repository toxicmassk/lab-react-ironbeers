import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";
import SingleBeer from "./pages/SingleBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-beers" element={<AllBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/single-beer/:id" element={<SingleBeer />} />
      </Routes>
    </div>
  );
}

export default App;
