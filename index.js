// init function
function main() {
    const size = 10;
    const botBoard = document.getElementById("botBoard");


    // generating plain bot table
    let botBoardArr = [];

    for (let i = 0; i < size; i++) {
        botBoardArr.push([]);
        for (let j = 0; j < size; j++) {
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

    // for (let i = 0; i < botShips.length; i++) {
    //     placeRandom(botShips[i]);
    // };
    placeRandom(4);


    // functions


    // place ship on random posiotion
    function placeRandom(ship) {
        const len = botBoardArr.length;
        const orient = Math.floor(Math.random() * 2);
        // const orient = 0;
        let posX = 0;
        let posY = 0;

        switch (orient) {
            case 0:
                posX = Math.floor(Math.random() * len);
                posY = Math.floor(Math.random() * (len - (ship - 1)));

                console.log(orient, posX, posY);
                // for (let i = -1; i < 2; i++) {
                //     posY != 0 ?
                //         botBoardArr[posX + i][posY - 1] = 0 : null;
                // };

                for (let i = 0; i < ship; i++) {
                    botBoardArr[posX][posY + i] = 1;
                    // botBoardArr[posX + 1][posY + i] = 0;
                    // botBoardArr[posX - 1][posY + i] = 0;
                };
                // for (let i = -1; i < 2; i++) {
                //     posY != (botBoardArr.length - 1) ?
                //         botBoardArr[posX + i][posY + ship] = 0 : null;
                // };
                break;

            case 1:
                posX = Math.floor(Math.random() * (len - (ship - 1)));
                posY = Math.floor(Math.random() * len);

                // console.log(orient, posX, posY);
                // for (let i = -1; i < 2; i++) {
                //     posX != 0 ?
                //         botBoardArr[posX - 1][posY + i] = 0 : null;
                // };

                for (let i = 0; i < ship; i++) {
                    botBoardArr[posX + i][posY] = 1;
                    // posY != (botBoardArr.length - 1) ? botBoardArr[posX + i][posY + 1] = 0 : null;
                    // posY != 0 ? botBoardArr[posX + i][posY - 1] = 0 : null;
                };
                // for (let i = -1; i < 2; i++) {
                //     posX != (botBoardArr.length - 1) ?
                //         botBoardArr[posX + ship][posY + i] = 0 : null;
                // };

                break;

            default:
                console.error("Math random for orientation did ucky wucky: ", orient);
                break;
        };
        console.table(botBoardArr);
        updateBoard(botBoard, botBoardArr);
    };


    // update board function
    function updateBoard(board, boardArr) {
        board.innerHTML = null;

        const table = document.createElement("table");

        for (let i = 0; i < boardArr.length; i++) {
            const row = document.createElement("tr");
            for (let j = 0; j < boardArr[i].length; j++) {
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