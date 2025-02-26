import { useState } from "react";

const Cell = () => {
    const [isActive, setIsActive] = useState(false);
    const toggleState = () => { setIsActive(!isActive) };
    const styles = isActive ? { background: "black" } : {};

    const handleMouseMove = (e) => {
        if (e.buttons === 1 && !isActive) {
            setIsActive(true);
        }
    }

    return (
        <div className="cell"
            style={styles}
            onDragStart={(e) => e.preventDefault()}
            onClick={toggleState}
            onMouseMove={handleMouseMove} />
    )
}

export default Cell;