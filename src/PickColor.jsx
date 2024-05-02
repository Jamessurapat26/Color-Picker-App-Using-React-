import { useState } from 'react';

function PickColor() {

    const [color, setColor] = useState("#ffffff");

    const handleColorChange = (event) => {

        setColor(event.target.value);
    }

    return (
        <div className='color-container'>
            <h1>Color Picker</h1>
            <div className="color-display" style={{ backgroundColor: color }}>
                <p>Your select Color: {color}</p>
            </div>
            <label> Select A Color</label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    );

}

export default PickColor