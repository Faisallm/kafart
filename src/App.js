import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Artist from "./Pages/Artist/Artist";
import ArtDetail from "./Pages/ArtistDetail/ArtDetail";
import Blog from "./Pages/Blog/Blog";
import BlogDetail from "./Pages/BlogDetail/BlogDetail";
import Events from "./Pages/Events/Events";
import EventDetail from "./Pages/EventDetail/EventDetail";
import Fashion from "./Pages/FashionDesigners/Fashion";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

function App() {
  const ref = useRef(null);

  const options = {
    smooth: true,
  };
  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <div className="App"  data-scroll-container ref={ref}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/artist" element={<Artist />} />
            <Route path="/artist-detail" element={<ArtDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-detail" element={<BlogDetail />} />
            <Route path="/event" element={<Events />} />
            <Route path="/events-detail" element={<EventDetail />} />
            <Route path="/fashion-designers" element={<Fashion />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </LocomotiveScrollProvider>
  );
}

export default App;
