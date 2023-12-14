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

    updateBoard(botBoard, botBoardArr)


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
        const orient = Math.floor(Math.random() * 2);
        // for (let j = 0; j < botShips[i]; j++) {


        // };
    };





    // functions


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
                    case 0:
                        null;
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