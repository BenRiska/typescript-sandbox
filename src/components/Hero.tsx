import React, {useState} from 'react'

interface HeroProps {
    title: string;
}

function Hero({title}: HeroProps) {

    const [bgMode, setBgMode] = useState(false)


    const handleBg = () => {
        setBgMode(!bgMode);
    }

    return (
        <div 
        style={{
            background: bgMode ? "black" : "white",
            color: bgMode ? "white" : "black"}}
        >
            <h1>{title}</h1>
            <button onClick={handleBg}>{bgMode ? "Dark" : "Light"} Mode</button>
        </div>
    )
}

export default Hero
