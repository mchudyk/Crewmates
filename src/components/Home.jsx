import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to Crewmates!</h1>
            <p>
                Here, you can customize and build your very own crewmate team. From setting attributes to naming them, 
                it's all in your hands. Begin by creating a crewmate or dive into the gallery to see your existing crew.
            </p>
            
            <div className="home-actions">
                <Link to="/create" className="home-btn">
                    Create a Crewmate
                </Link>
                <Link to="/gallery" className="home-btn">
                    View Crewmate Gallery
                </Link>
            </div>
        </div>
    );
}

export default Home;
