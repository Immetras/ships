// init function
function main() {
    const size = 10;
    const botBoard = document.getElementById("botBoard");
    const playerBoard = document.getElementById("playerBoard");


    // generating plain bot table
    let botBoardArr = [];

    for (let i = 0; i < size + 2; i++) {
        botBoardArr.push([]);
        for (let j = 0; j < size + 2; j++) {
            botBoardArr[i].push(undefined);
        };
    };
    console.table(botBoardArr);

    updateBoard(botBoard, botBoardArr);


    // adding ships to bot table
    const types = 4;
    let botShips = [];
    // let counter = 0;

    for (let i = 1; i < types + 1; i++) {
        // console.log(i);
        for (let j = 1; j < i + 1; j++) {
            // console.warn(i, j);
            botShips.push((types - i) + 1);
            // for (let k = 0; k < (types - i) + 1; k++) {
            //     botShips[counter].push(1);
            // };
            // counter++;
        };
    };
    console.log(botShips);

    for (let i = 0; i < botShips.length; i++) {
        let cantFit = placeRandom(botShips[i]);
        while (cantFit) {
            cantFit = placeRandom(botShips[i]);
        };
    };

    console.table(botBoardArr);
    updateBoard(botBoard, botBoardArr);





    // functions


    // place ship on random posiotion
    function placeRandom(ship) {
        const len = (botBoardArr.length) - 2;
        const orient = Math.floor(Math.random() * 2);
        // const orient = 1;
        let posX = 0;
        let posY = 0;

        switch (orient) {
            case 0:
                posX = Math.floor(Math.random() * len);
                posY = Math.floor(Math.random() * (len - (ship - 1)));
                // console.log(orient, posX, posY);
                break;

            case 1:
                posX = Math.floor(Math.random() * (len - (ship - 1)));
                posY = Math.floor(Math.random() * len);
                // console.log(orient, posX, posY);
                break;

            default:
                console.error("Math random for orientation did ucky wucky: ", orient);
                break;
        };
        posX++;
        posY++;
        return place(posX, posY, orient, botBoardArr, ship);
        
        // console.table(botBoardArr);
    };


    // place ship function
    function place(x, y, rotation, array, size) {
        const horiz = (rotation + 1) % 2;
        let placed = false;

        for (let i = 0; i < size; i++) {
            if (
                array[x + (i * rotation) - 1][y + (i * horiz) - 1] == 1 ||
                array[x + (i * rotation) - 1][y + (i * horiz)] == 1 ||
                array[x + (i * rotation) - 1][y + (i * horiz) + 1] == 1 ||
                array[x + (i * rotation)][y + (i * horiz) - 1] == 1 ||
                array[x + (i * rotation)][y + (i * horiz)] == 1 ||
                array[x + (i * rotation)][y + (i * horiz) + 1] == 1 ||
                array[x + (i * rotation) + 1][y + (i * horiz) - 1] == 1 ||
                array[x + (i * rotation) + 1][y + (i * horiz)] == 1 ||
                array[x + (i * rotation) + 1][y + (i * horiz) + 1] == 1
            ) {
                placed = true;
                // console.log(placed);
                return true;
            };
        };

        if (placed == false) {
            for (let i = 0; i < size; i++) {
                array[x + (i * rotation)][y + (i * horiz)] = 1;
            };
            // console.log(placed);
            return false;
        };
    };


    // update board function
    function updateBoard(board, boardArr) {
        board.innerHTML = null;

        const table = document.createElement("table");

        for (let i = 1; i < boardArr.length - 1; i++) {
            const row = document.createElement("tr");
            for (let j = 1; j < boardArr[i].length - 1; j++) {
                const col = document.createElement("td");

                switch (boardArr[i][j]) {
                    case undefined:
                        null;
                        break;
                    case 0:
                        col.className = "surr";
                        break;

                    case 1:
                        col.className = "filled";
                        break;

                    default:
                        console.error("smh cell has unknown value: ", boardArr[i][j]);
                        break;
                }
                row.appendChild(col);
            };
            table.appendChild(row);
        };
        board.appendChild(table);
    };
};