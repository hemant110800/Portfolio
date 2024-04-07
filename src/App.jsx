// import logo from './logo.svg';
import "./App.css";
// import Header from './components/UI/Header';
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/UI/Footer";
import Contact from "./components/Contacts";
import upArrow from "./images/up-arrow.png";
import { useState, useRef } from "react";

function App() {
  const [scrollPos, setScroll] = useState(0);
  const scrollControl = useRef(null);
  const scrollHandler = e => {
    setScroll(e.target.scrollTop);
  };

  const goToTopMenu = () => {
    scrollControl.current.scrollTop = 0;
  };

  return (
    <div
      className="overflow-y-auto h-[100vh]"
      onScroll={scrollHandler}
      ref={scrollControl}
    >
      {scrollPos > 35 && (
        <button onClick={goToTopMenu} title="Go To Top-Menu">
          <img
            className="fixed top-0 right-0 pr-3 w-[40px]"
            alt="up"
            src={upArrow}
          ></img>
        </button>
      )}
      <Summary />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
