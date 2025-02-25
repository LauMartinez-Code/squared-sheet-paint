import { useState, useEffect } from "react";
import Cell from "./Cell";

const Grid = () => {
    const [cellList, setCellList] = useState([]);
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

    return (
        <div className="grid">
            {cellList}
        </div>
    );
};

export default Grid;