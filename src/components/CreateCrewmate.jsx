import React, { useState } from 'react';
import { supabase } from '../App';
import { Link } from 'react-router-dom';
import './CreateCrewmate.css';

function CreateCrewmate() {
    const [crewmate, setCrewmate] = useState({
        Name: "",
        Speed: "",
        Color: ""
    });

    const [notification, setNotification] = useState(null);

    const handleChange = (e) => {
        setCrewmate({
            ...crewmate,
            [e.target.name]: e.target.value,
        });
    };

    const createCrewmate = async(event) => {
        event.preventDefault();
        const { error } = await supabase
        .from('crewmates')
        .insert({
            Name: crewmate.Name,
            Speed: crewmate.Speed,
            Color: crewmate.Color
        });
        if (!error) {
            setNotification('New Crewmate was added successfully!');
            setTimeout(() => {
                setNotification(null);
            }, 3000);
            // Reset form after submission
            setCrewmate({
                Name: "",
                Speed: "",
                Color: ""
            });
        } else {
            console.error('Error inserting crewmate:', error.message);
        }
    };

    return (
        <div className="create-form">
            <h2>Create a New Crewmate</h2>
            {notification && <div className="notification">{notification}</div>}
            <form onSubmit={createCrewmate}>
                <div className="form-group">
                    <label htmlFor="Name">Name</label>
                    <input 
                        type="text" 
                        id="Name" 
                        name="Name"
                        value={crewmate.Name} 
                        onChange={handleChange}
                        required 
                    />
                </div>
    
                <div className="form-group">
                    <label htmlFor="Speed">Speed</label>
                    <input 
                        type="number" 
                        id="Speed" 
                        name="Speed"
                        value={crewmate.Speed} 
                        onChange={handleChange}
                        required 
                    />
                </div>
    
                <div className="form-group">
                    <label htmlFor="Color">Color</label>
                    <select 
                        id="Color" 
                        name="Color"
                        value={crewmate.Color}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a color</option>
                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Purple">Purple</option>
                    </select>
                </div>
                <button type="submit">Add Crewmate</button>
            </form>
            <div className="navigation-buttons">
                <Link to="/"><button>Go Home</button></Link>
                <Link to="/gallery"><button>Go to Gallery</button></Link>
            </div>
        </div>
    );
}

export default CreateCrewmate;
