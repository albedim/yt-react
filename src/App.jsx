import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstComponent from './pages/component-1°/FirstComponent';
import SecondComponent from './pages/component-2°/SecondComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/first" element={<FirstComponent/>}/>
        <Route path="/second" element={<SecondComponent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
