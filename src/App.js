import './App.css';
import Home from './Components/Home';
import News from './Components/News';
import Contact from './Components/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/News' element={<News/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
