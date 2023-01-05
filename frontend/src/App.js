import React from 'react';
import './App.css';
import HomePage from './components/Home';
import {Routes , Route} from 'react-router-dom'
import ProfilePage from './components/Profile'; 
import SignUp from './components/SignUp';
import { Search } from './components/Search';

function App() {
  return ( 
    <div className="App">
      <div className='nav'>
      <h1>
      <a href="/">Home</a>
      </h1>
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/profile" element={ <ProfilePage /> } />
        <Route path='/testing' element={<SignUp />} />
        <Route path='/form' element={<Search />} />
      </Routes>
    </div>
  );
}
 
export default App;