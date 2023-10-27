import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import Home from "./components/Home";
import CreateCrewmate from "./components/CreateCrewmate";
import CrewmateGallery from "./components/CrewmateGallery";
import UpdateCrewmate from "./components/UpdateCrewmate";
import CrewmateDetail from "./components/CrewmateDetail";
import './App.css';

const URL = 'https://wcllvdzpqaxvqrjcpati.supabase.co';
const API_KEY = 'ooopoppssss';

export const supabase = createClient(URL, API_KEY);

function App() {
    return (
        <Router>
            <div id="root">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<CreateCrewmate />} />
                    <Route path="/gallery" element={<CrewmateGallery />} />
                    <Route path="/update/:id" element={<UpdateCrewmate />} />
                    <Route path="/crewmate/:id" element={<CrewmateDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
