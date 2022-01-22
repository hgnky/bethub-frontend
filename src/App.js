import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Chat from './component/Layouts/Chat';
import Header from './component/Layouts/Header';
import Sidebar from './component/Layouts/Sidebar';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Footer from './component/Layouts/Footer';
import Slots from './pages/Slots/Slots';
import SlotArenas from './pages/SlotArenas/SlotArenas';
import Roulette from './pages/Roulette/Roulette';

function App() {

  return (
    <div className="App">
      <div className='d-flex justify-content-between d-xs-block position-relative'>
        <Sidebar />
        <div className='w-100'>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/slots" element={<Slots />} />
            <Route path="/slot-arenas" element={<SlotArenas />} />
            <Route path="roulette" element={<Roulette />} />
          </Routes>
          <Footer />
        </div>
        <Chat />
      </div>
    </div>
  );
}

export default App;
