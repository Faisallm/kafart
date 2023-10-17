import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Artist from './Pages/Artist/Artist';
import ArtDetail from './Pages/ArtistDetail/ArtDetail';
import Blog from './Pages/Blog/Blog';
import BlogDetail from './Pages/BlogDetail/BlogDetail';
import Events from './Pages/Events/Events';
import EventDetail from './Pages/EventDetail/EventDetail';
import Fashion from './Pages/FashionDesigners/Fashion';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route to='/'  element={Home}/>
        <Route to='/about'  element={About}/>
        <Route to='/artist'  element={Artist}/>
        <Route to='/artist-detail'  element={ArtDetail}/>
        <Route to='/blog'  element={Blog}/>
        <Route to='/blog-detail'  element={BlogDetail}/>
        <Route to='/event'  element={Events}/> 
        <Route to='/events-detail'  element={EventDetail}/> 
        <Route to='/fashion-designers'  element={Fashion}/>  
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
