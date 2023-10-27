import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../App';
import './CrewmateDetail.css';

function CrewmateDetail() {
    const [crewmate, setCrewmate] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchCrewmate();
    }, []);

    const fetchCrewmate = async () => {
        let { data } = await supabase.from('crewmates').select("*").eq('id', id);
        setCrewmate(data[0]);
    };

    return (
        <div className="crewmate-detail-container">
            <h1>{crewmate.Name}</h1>
            <p>Speed: {crewmate.Speed}</p>
            <p>Color: {crewmate.Color}</p>
            <Link to="/gallery" className="gallery-button">Back to Gallery</Link>
        </div>
    );
}

export default CrewmateDetail;
