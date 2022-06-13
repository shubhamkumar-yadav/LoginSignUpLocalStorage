import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Details } from './components/Details';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/details' element={<Details/>}/>
      </Routes>
    </>
  );
}

export default App;
