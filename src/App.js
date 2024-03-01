import { Route, Routes, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { useMemo } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

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
    from: { transform: "translateY(-100%)" },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(300%)" },
    config: { duration: 500 },
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
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
