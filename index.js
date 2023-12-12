// init function
function main() {
    const size = 10;


    // generating plain bot table
    const botBoard = document.getElementById("botBoard");
    // console.log(botBoardTable);

    const botBoardTable = document.createElement("table");
    for (let i = 0; i < size; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < size; j++) {
            const col = document.createElement("td");
            row.appendChild(col);
        };
        botBoardTable.appendChild(row);
    };
    botBoard.appendChild(botBoardTable);


    // adding ships to bot table
    const flags = 4;
    let botShips = []
    for (let i = 0; i < flags; i++) {
        botShips.push([])
        for (let j = 0; j < flags - i; j++) {
            for (let k = 0; k < j + 1; k++) {
                botShips[i].push(1);

            }
        };
    };
    console.table(botShips)

    let botBoardArr = [];
    botBoardArr.push([]);
    botBoardArr[0].push(undefined);
    console.table(botBoardArr);
};