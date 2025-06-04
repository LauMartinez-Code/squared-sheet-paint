import { useRef, useState } from "react";
import "./ContextMenu.css";

const STATIC_COLORS = [
    { name: "Red", value: "#FF0000" },
    { name: "Green", value: "#00FF00" },
    { name: "Blue", value: "#0000FF" },
    { name: "Yellow", value: "#FFFF00" },
    { name: "Magenta", value: "#FF00FF" },
];

const ContextMenu = ({ isVisible, position, initialColor, setColor, closeMenu }) => {
    const [selectedColor, setSelectedColor] = useState(initialColor);
    const inputColorRef = useRef(null);
    const inputColorToggler = useRef(false); // Controla el cierre del ContextMenu desde el click en input[type=color]
    const inputColorClassName = `${selectedColor == inputColorRef.current?.value ? "context-menu__option-custom-color--checked" : ""}`;

    const handleInputClick = (e) => {
        if (inputColorToggler.current) {
            handleCloseMenu();
            return;
        }
        
        inputColorToggler.current = true;
        (selectedColor != inputColorRef.current?.value) && handleColorChange(e);
    }

    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
        e.target.type === "radio" && handleCloseMenu();
    };

    const handleCloseMenu = () => {
        
        if (selectedColor !== initialColor) {
            setColor(selectedColor);
        }
        
        inputColorToggler.current = false;
        closeMenu();
    };

    return (
        <menu className={`context-menu context-menu--${isVisible ? "fade-in" : "fade-out"}`}
            style={{
                top: position.y,
                left: position.x,
            }}
            onMouseLeave={handleCloseMenu}
            onContextMenu={(e) => e.preventDefault()}>

            {STATIC_COLORS.map(({name, value}) => (
                <input key={value} type="radio" name="color" style={{ background: value }}
                    className="context-menu__option"
                    title={name}
                    value={value}
                    onChange={handleColorChange}
                    checked={selectedColor === value} />
            ))}
            
            <input type="color" ref={inputColorRef}
                className={`context-menu__option-custom-color ${inputColorClassName}`}
                title="Click to pick a color"
                defaultValue="#000000"
                disabled={!isVisible}
                onChange={handleColorChange}
                onClick={handleInputClick}
                onBlur={ () => inputColorToggler.current = false } />
            
        </menu>
    );
};

export default ContextMenu;