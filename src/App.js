import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/body/Main";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
