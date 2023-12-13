// init function
function main() {
    const size = 10;


    // generating plain bot table
    const botBoard = document.getElementById("botBoard");
    let botBoardArr = [];

    const botBoardTable = document.createElement("table");

    for (let i = 0; i < size; i++) {
        const row = document.createElement("tr");

        botBoardArr.push([]);
        for (let j = 0; j < size; j++) {

            const col = document.createElement("td");
            row.appendChild(col);

            botBoardArr[i].push(undefined);
        };
        botBoardTable.appendChild(row);
    };

    botBoard.appendChild(botBoardTable);
    console.table(botBoardArr);


    // adding ships to bot table
    const types = 4;
    let botShips = [];
    let counter = 0;

    for (let i = 1; i < types + 1; i++) {
        // console.log(i);
        for (let j = 1; j < i + 1; j++) {
            // console.warn(i, j);
            botShips.push([]);
            for (let k = 0; k < (types - i) + 1; k++) {
                botShips[counter].push(1);
                console.log(counter);
            };
            counter++;
        };
    };

    for (let i = 0; i < botShips.length; i++) {

    };

    console.table(botShips);

};