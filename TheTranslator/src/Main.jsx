import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Loading from './Loading';  
import Subtitle from './Subtitle';  

function Main() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Loading" element={<Loading />} />  
            <Route path="/Subtitle" element={<Subtitle />} />  
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default Main;
