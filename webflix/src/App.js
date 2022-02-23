import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Header from './Header';
import Movie from './components/movie/Movie';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<Movie />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
