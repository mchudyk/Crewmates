import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../App';
import './CrewmateGallery.css';

function CrewmateGallery() {
    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {
        fetchCrewmates();
    }, []);

    const deleteCrewmate = async (id) => {
        await supabase.from('crewmates').delete().eq('id', id);
        fetchCrewmates();  // Refresh the list after deleting
    };    

    const fetchCrewmates = async () => {
        let { data } = await supabase.from('crewmates').select("*");
        setCrewmates(data);
    };

    return (
        <div className="container">
            <div className="navigation-buttons">
                <Link to="/"><button>Home</button></Link>
            </div>
            <h2>Crewmate Gallery</h2>
            {crewmates.map(crewmate => (
                <div key={crewmate.id} className="crewmate-card">
                    <div className="crewmate-details">
                        <span className="detail-title">Name:</span>
                        <span className="detail-content"><Link to={`/crewmate/${crewmate.id}`}>{crewmate.Name}</Link></span>
                    </div>
                    <div className="action-buttons">
                        <Link to={`/update/${crewmate.id}`}>Edit</Link>
                        <button onClick={() => deleteCrewmate(crewmate.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CrewmateGallery;
