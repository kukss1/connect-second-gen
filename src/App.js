import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Main from "./components/body/Main";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./components/body/sidebars/about/About";
import Left from "./components/body/sidebars/left/Left";
import Bond from "./components/body/bond/Bond";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        {pathname === "/" || pathname === "/about" ? <Left /> : null}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/bonds" element={<Bond />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
