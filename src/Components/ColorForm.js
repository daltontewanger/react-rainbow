import { useState } from 'react'

function ColorForm(props){
    const [input, setInput] = useState('')

    const isValidColor = (color) => {
        const colorDiv = document.createElement('div');
        colorDiv.style.backgroundColor = color;
        return colorDiv.style.backgroundColor !== '';
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const colorToAdd = isValidColor(input) ? input : "black";
        props.addColor(colorToAdd)
        setInput('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input}
                onChange={(e) => setInput(e.target.value)} placeholder="Fancy Color"/>
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm
