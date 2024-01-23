function solution(board, moves) {
  let answer = 0;
  let stack = [];
  let n = board[0].length;
  let m = board.length;

  moves.forEach((move) => {
    for (let i = 0; i < m; i++) {
      let temp = board[i][move - 1];
      board[i][move - 1] = 0;

      if (temp !== 0) {
        if (stack && stack[stack.length - 1] === temp) {
          answer += 2;
          stack.pop();
          break;
        }
        stack.push(temp);
        break;
      }
    }
  });

  return answer;
}

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));
