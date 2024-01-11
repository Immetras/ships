// init function
function main() {
  const size = 10;

  // ship list
  const types = 4;
  let ships = [];

  for (let i = 1; i < types + 1; i++) {
    for (let j = 1; j < i + 1; j++) {
      ships.push({
        type: types - i + 1,
        placed: false,
      });
    }
  }

  //* bot
  const botBoard = document.getElementById("botBoard");
  let botBoardArr = [];

  for (let i = 0; i < size + 2; i++) {
    botBoardArr.push([]);
    for (let j = 0; j < size + 2; j++) {
      botBoardArr[i].push(undefined);
    }
  }
  // console.table(botBoardArr);

  updateBoard(botBoard, botBoardArr);

  // adding ships to bot table
  let botShips = ships;
  // console.log(botShips);

  for (let i = 0; i < botShips.length; i++) {
    let cantFit = placeRandom(botShips[i].type);
    while (cantFit) {
      cantFit = placeRandom(botShips[i].type);
    }
  }
  console.group();
  console.log("bot array");
  console.table(botBoardArr);
  console.groupEnd();
  updateBoard(botBoard, botBoardArr);

  //* player
  const playerBoard = document.getElementById("playerBoard");
  let playerBoardArr = [];

  for (let i = 0; i < size + 2; i++) {
    playerBoardArr.push([]);
    for (let j = 0; j < size + 2; j++) {
      playerBoardArr[i].push(undefined);
    }
  }
  console.group();
  console.log("player array");
  console.table(playerBoardArr);
  console.groupEnd();
  // playerBoardArr[5][6] = 3;

  updateBoard(playerBoard, playerBoardArr);

  let playerShips = ships;
  console.table(playerShips);

  const shipDisplay = document.getElementById("playerShips");

  for (let i = 0; i < playerShips.length; i++) {
    if (!playerShips[i].placed) {
      const playerShip = document.createElement("div");
      playerShip.className = "displayShip";
      playerShip.style.width = `${playerShips[i].type * 20 + 2}px`;

      playerShip.addEventListener("mouseover", function () {
        for (let k = 0; k < this.children.length; k++) {
          this.children[k].style.backgroundColor = "red";
        }
        // console.log(this.parentElement.children)
      });
      playerShip.addEventListener("mouseleave", leave);
      playerShip.addEventListener("mousedown", function () {
        // console.log("click", this);
        // console.log(i, playerShips[i]);
        this.removeEventListener("mouseleave", leave);

        const playerTableEvent =
          document.getElementById("playerBoard").children[0].children;

        console.log(playerTableEvent);
        for (let j = 0; j < playerTableEvent.length; j++) {
          for (let k = 0; k < playerTableEvent[j].children.length; k++) {
            const element = playerTableEvent[j].children[k];
            element.addEventListener("mouseover", function () {
              updateBoard(playerBoard, playerBoardArr);
            });
          }
        }
      });

      function leave() {
        for (let k = 0; k < this.children.length; k++) {
          this.children[k].style.backgroundColor = null;
        }
      }

      for (let j = 0; j < playerShips[i].type; j++) {
        const shipFlag = document.createElement("div");
        shipFlag.className = "flag";

        playerShip.appendChild(shipFlag);
      }
      shipDisplay.appendChild(playerShip);
    }
  }

  //* functions

  // place ship on random position
  function placeRandom(ship) {
    const len = botBoardArr.length - 2;
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
    }
    posX++;
    posY++;
    return place(posX, posY, orient, botBoardArr, ship, true);

    // console.table(botBoardArr);
  }

  // place ship function
  function place(x, y, rotation, array, size, real) {
    const horiz = (rotation + 1) % 2;
    let placed = false;

    for (let i = 0; i < size; i++) {
      if (
        array[x + i * rotation - 1][y + i * horiz - 1] == 1 ||
        array[x + i * rotation - 1][y + i * horiz] == 1 ||
        array[x + i * rotation - 1][y + i * horiz + 1] == 1 ||
        array[x + i * rotation][y + i * horiz - 1] == 1 ||
        array[x + i * rotation][y + i * horiz] == 1 ||
        array[x + i * rotation][y + i * horiz + 1] == 1 ||
        array[x + i * rotation + 1][y + i * horiz - 1] == 1 ||
        array[x + i * rotation + 1][y + i * horiz] == 1 ||
        array[x + i * rotation + 1][y + i * horiz + 1] == 1
      ) {
        placed = true;
        // console.log("cannot");
        return true;
      }
    }

    if (placed == false) {
      for (let i = 0; i < size; i++) {
        array[x + i * rotation][y + i * horiz] = real ? 1 : 3;
      }
      // console.log(placed);
      return false;
    }
  }

  // update board function
  function updateBoard(board, boardArr) {
    board.innerHTML = null;
    // console.group();
    // console.log("updating");
    // console.table(boardArr);
    // console.groupEnd();

    const table = document.createElement("table");

    for (let i = 1; i < boardArr.length - 1; i++) {
      const row = document.createElement("tr");
      for (let j = 1; j < boardArr[i].length - 1; j++) {
        const col = document.createElement("td");

        switch (boardArr[i][j]) {
          case undefined:
            null;
            break;

          case 1:
            col.className = "filled";
            break;

          case 3:
            col.className = "placing";
            break;

          default:
            console.error("smh cell has unknown value: ", boardArr[i][j]);
            break;
        }
        row.appendChild(col);
      }
      table.appendChild(row);
    }
    board.appendChild(table);
  }
}
