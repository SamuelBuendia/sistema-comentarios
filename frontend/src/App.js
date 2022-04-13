// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { HashRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Footer from './components/Footer/Footer'
import CommentsList from './components/comments/CommentsList'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CommentsList/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
