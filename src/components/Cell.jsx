import { useState } from "react";

const Cell = () => {
    const [active, setActive] = useState(false);
    const toggleState = () => { setActive(!active) };
    const styles = active ? { background: "black" } : {};

    return (
        <div className="cell" 
            style={styles}
            onClick={toggleState}
        />
    )
}

export default Cell;

