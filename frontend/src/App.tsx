import './App.css'
import Header from "./components/header/Header.tsx";
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage.tsx';

function App() {
  return (
    <>
        <Header />
        <Routes>
            <Route path={''} element={<HomePage />} />
        </Routes>
    </>
  )
}

export default App
