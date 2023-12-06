// init function
function main() {
    const size = 10;

    const botBoardHtml = document.getElementById("botBoard").children[0]
    // console.log(botBoardTable);

    let botBoardArr = [];
    for (let i = 0; i < size; i++) {
        botBoardHtml.push([])
        const row = document.createElement("tr");
        for (let j = 0; j < size; j++) {
            botBoardHtml[i].push("el")
            const col = document.createElement("td");
        };
    };
    console.table(botBoardArr);
};