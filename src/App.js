import { Link } from 'react-router-dom';
import './App.css';
import Browser from './pages/Browser';
import Display from './pages/Display';
import Movie from './pages/Movie';
import Register from './pages/Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/Register' element={<Register/>}></Route>
          <Route path='/Browser' element={<Browser/>}></Route>
          <Route path='/Movie' element={<Movie/>}></Route>
          <Route path='/Display' element={<Display/>}></Route>
        </Routes>
      </BrowserRouter>
     
  );
}

export default App;
