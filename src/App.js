import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FormContainer from './components/FormContainer';
import TrayListContainer from './components/TrayListContainer';
import Header from './components/Header';


function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<FormContainer/>}/>
        <Route path='/bandejas' element={<TrayListContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
