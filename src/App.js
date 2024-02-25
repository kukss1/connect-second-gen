import { Route, Routes, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { useMemo } from "react";

import Main from "./components/body/Main";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./components/body/sidebars/about/About";
import Left from "./components/body/sidebars/left/Left";
import Bond from "./components/body/bond/Bond";
import Contact from "./components/body/contact/Contact";

import "./App.css";

function App() {
  const { pathname } = useLocation();

  const transitions = useTransition(pathname, {
    key: pathname,
    from: { transform: `scale(0.5)` },
    enter: { transform: `scale(1)` },
    leave: { transform: `scale(0.4)` },
    config: { delay: 500 },
  });

  const memoizedRoutes = useMemo(
    () => (
      <Routes>
        <Route path="/" element={<Main />} key="/" />
        <Route path="/about" element={<About />} key="/about" />
        <Route path="/bonds" element={<Bond />} key="/bonds" />
        <Route path="/contact" element={<Contact />} key="/contact" />
      </Routes>
    ),
    []
  );

  return (
    <div className="App">
      <Header />
      <div className="app_body">
        {pathname === "/" || pathname === "/about" ? <Left /> : null}
        {transitions((styles, item) => (
          <animated.div style={styles}>{memoizedRoutes}</animated.div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
