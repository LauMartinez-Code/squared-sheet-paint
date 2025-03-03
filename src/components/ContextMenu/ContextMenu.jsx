import "./ContextMenu.css";

const ContextMenu = ({ isVisible, position, initialColor, setColor, closeMenu }) => {
    let toggler = false; // Controla el cierre del ContextMenu desde el click en input[type=color]
    let selectedColor = initialColor;

    const handleInputClick = () => {
        toggler && handleCloseMenu();
        toggler = !toggler;
    }

    const handleColorChange = (e) => {
        selectedColor = e.target.value;
    };

    const handleCloseMenu = () => {

        if (selectedColor !== initialColor) {
            setColor(selectedColor);
        }
        
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
            
            <label htmlFor="colorInput">
                Pick a color
            </label>
            <input type="color" id="colorInput"
                className="context-menu__option"
                title="Click to pick a color"
                defaultValue="#000000"
                disabled={!isVisible}
                onChange={handleColorChange}
                onClick={handleInputClick}
                onBlur={handleCloseMenu} />
            
        </menu>
    );
};

export default ContextMenu;