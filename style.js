let current = "X";
let arr = Array(9).fill(null);
let winner = document.querySelector(".winner");
let gameOver = false;
let x = 0;
let o = 0;
let tie = 0;
function checkWinner() {
  if (
    (arr[0] != null && arr[0] === arr[1] && arr[1] === arr[2]) ||
    (arr[3] != null && arr[3] === arr[4] && arr[4] === arr[5]) ||
    (arr[6] != null && arr[6] === arr[7] && arr[7] === arr[8]) ||
    (arr[0] != null && arr[0] === arr[3] && arr[3] === arr[6]) ||
    (arr[1] != null && arr[1] === arr[4] && arr[4] === arr[7]) ||
    (arr[2] != null && arr[2] === arr[5] && arr[5] === arr[8]) ||
    (arr[2] != null && arr[2] === arr[4] && arr[4] === arr[6]) ||
    (arr[0] != null && arr[0] === arr[4] && arr[4] === arr[8])
  ) {
    winner.style.display = "flex";
    winner.innerHTML = `<h1>Winner!! ${current} <img src="party-popper.png"></h1>`;

    setTimeout(() => {
      winner.style.display = "none";
      arr = Array(9).fill(null);
      document.querySelectorAll(".cell").forEach((cell) => {
        cell.innerText = "";
        cell.style.pointerEvents = "auto";
        current = current === "X" ? "O" : "X";
        document.querySelector(".turn").innerText = `${current} turn`;
      });
    }, 5000);
    if (current === "X") {
      x++;
      document.querySelector(".x span").innerText = x;
    } else {
      o++;
      document.querySelector(".o span").innerText = o;
    }
    return true;
  }
  if (!arr.some((e) => e === null)) {
    winner.style.display = "flex";
    winner.innerHTML = `<h1>Ohh!! It's Tie `;
    tie++;
    document.querySelector(".ties span").innerText = tie;
    setTimeout(() => {
      winner.style.display = "none";
      arr = Array(9).fill(null);
      document.querySelectorAll(".cell").forEach((cell) => {
        cell.innerText = "";
        cell.style.pointerEvents = "auto";
        current = current === "X" ? "O" : "X";
        document.querySelector(".turn").innerText = `${current} turn`;
      });
    }, 5000);
  }

  return false;
}
function play(e) {
  let turn = document.querySelector(".turn");
  const reset = document.querySelector(".reset");
  let u = document.querySelector(".x");
  let o = document.querySelector(".o");
  let tie = document.querySelector(".ties");
  const id = Number(e.id);
  if (arr[id] != null) return;
  arr[id] = current;
  e.innerText = current;

  if (checkWinner()) {
    gameOver = true;
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.style.pointerEvents = "none";
    });
    return;
  }

  current = current === "X" ? "O" : "X";
  document.querySelector(".turn").innerText = `${current} turn`;
}
function reset() {
  document.querySelectorAll(".cell").forEach((cell) => {
    arr = Array(9).fill(null);
    cell.innerText = "";
    cell.style.pointerEvents = "auto";
  });
  winner.style.display = "none";
  current = "X";
  document.querySelector(".turn").innerText = `${current} turn`;
}
