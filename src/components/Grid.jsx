import { useState, useEffect } from "react";
import GridColorContext from "../context/GridColorContext.jsx";
import Cell from "./Cell.jsx";
import ContextMenu from "./ContextMenu/ContextMenu.jsx";

const Grid = () => {
    const [cellList, setCellList] = useState([]);
    const [cellColor, setCellColor] = useState("#000000"); // Default color "black"
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [rigthClickPosition, setRigthClickPosition] = useState({ x: 0, y: 0 });
    const NUM_COLUMNS = 100;

    useEffect(() => {
        renderCells();

        window.addEventListener("resize", renderCells);

        return () => window.removeEventListener("resize", renderCells);
    }, []);

    const renderCells = () => {
        const cellSize = window.innerWidth / NUM_COLUMNS;
        const numRows = Math.ceil(window.innerHeight / cellSize);
        const cells = [];

        for (let i = 0; i < (numRows*NUM_COLUMNS); i++) {
            cells.push(
                <Cell key={i} />
            );
        }
        
        setCellList(cells);
    };

    const handleContextMenu = (e) => {
        e.preventDefault();
        setRigthClickPosition({ x: e.pageX - 5, y: e.pageY - 5 });
        setIsMenuVisible(true);
    }

    return (
        <>
            <GridColorContext.Provider value={cellColor}>
                <div className="grid" onContextMenu={handleContextMenu}>
                    {cellList}
                </div>
            </GridColorContext.Provider>
            {isMenuVisible && 
                <ContextMenu position={rigthClickPosition}
                    initialColor={cellColor}
                    setColor={setCellColor}
                    closeMenu={() => setIsMenuVisible(false)} />
            }
        </>
    );
};

export default Grid;