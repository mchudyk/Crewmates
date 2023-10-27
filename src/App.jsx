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
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjbGx2ZHpwcWF4dnFyamNwYXRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzNTE3ODMsImV4cCI6MjAxMzkyNzc4M30.gULt3u7vTpzVFedYMzJbt8CvRI3yO55rjhQ2r2jtnCQ';

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
