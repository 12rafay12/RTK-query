import "./App.css";
import Nav from "./Components/Nav/Nav";
import List from "./Components/List/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import New from "./Components/List/New";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/NewForm/:id?" element={<New />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
