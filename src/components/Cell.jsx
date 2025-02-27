import { useContext, useState } from "react";
import GridColorContext from "../context/GridColorContext.jsx";

const Cell = () => {
    const gridColor = useContext(GridColorContext);
    const [currentColor, setCurrentColor] = useState(gridColor);
    const [isActive, setIsActive] = useState(false);
    const styles = isActive ? { background: currentColor } : {};
    const gridColorChanged = currentColor !== gridColor;

    const toggleState = () => {
        if(!isActive && gridColorChanged) {
            setCurrentColor(gridColor);
        }
        setIsActive(!isActive);
    };

    const handleMouseMove = (e) => {
        if (e.buttons === 1 && !isActive) {
            if(gridColorChanged) {
                setCurrentColor(gridColor);
            }
            setIsActive(true);
        }
        else if (e.buttons === 1 && isActive && gridColorChanged) {
            setCurrentColor(gridColor);
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