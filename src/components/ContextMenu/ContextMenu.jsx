import "./ContextMenu.css";

const ContextMenu = ({ position, initialColor, setColor, closeMenu }) => {
    let toggler = false; // Controla el cierre del input[type=color]
    let selectedColor = initialColor;

    const handleInputClick = (e) => {
        if(toggler) {
            e.target.disabled = true;
            closeMenu();
        }
        toggler = !toggler;
        handleColorChange(e);
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
        <menu className="context-menu"
            style={{
                top: position.y,
                left: position.x,
            }}
            onMouseLeave={handleCloseMenu}
            onContextMenu={(e) => e.preventDefault()}>
            
            <label htmlFor="colorInput">
                Pick a color
            </label>
            <input type="color" id="colorInput" className="context-menu__option" title="Click to pick a color"
                defaultValue="#000000"
                onChange={handleColorChange}
                onClick={handleInputClick}
                onBlur={handleCloseMenu} />
            
        </menu>
    );
};

export default ContextMenu;