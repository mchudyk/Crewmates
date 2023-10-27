import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../App';
import './UpdateCrewmate.css';

function UpdateCrewmate() {
    const [crewmate, setCrewmate] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchCrewmate();
    }, []);

    const fetchCrewmate = async () => {
        let { data } = await supabase.from('crewmates').select("*").eq('id', id);
        setCrewmate(data[0]);
    };

    const handleUpdate = async () => {
        const { data } = await supabase.from('crewmates').update(crewmate).eq('id', id);
        if (data) alert('Updated successfully');
    };

    const handleChange = (e) => {
        setCrewmate({
            ...crewmate,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="create-form">
            <h2>Update Crewmate</h2>
            <div className="form-group">
                <label htmlFor="Name">Name</label>
                <input name="Name" value={crewmate.Name} onChange={handleChange} id="Name" type="text" />
            </div>
            <div className="form-group">
                <label htmlFor="Speed">Speed</label>
                <input name="Speed" type="number" value={crewmate.Speed} onChange={handleChange} id="Speed" />
            </div>
            <div className="form-group">
                <label htmlFor="Color">Color</label>
                <select name="Color" value={crewmate.Color} onChange={handleChange} id="Color">
                    <option value="">Select a color</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Purple">Purple</option>
                </select>
            </div>
            <button onClick={handleUpdate}>Update Crewmate</button>
            <div className="navigation-buttons">
                <Link to="/gallery"><button>Go to Gallery</button></Link>
            </div>
        </div>
    );
}

export default UpdateCrewmate;
