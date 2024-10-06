import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CollegeList from './components/CollegeList';
import CollegeDetails from './components/CollegeDetails';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CollegeList />} />
                <Route path="/college/:id" element={<CollegeDetails />} />
            </Routes>
        </Router>
    );
}

export default App;