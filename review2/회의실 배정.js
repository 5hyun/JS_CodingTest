const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const arr = input.slice(1);

function solution(list) {
  let answer = 1;
  list = list.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });
  let end = list[0][1];

  for (let i = 1; i < list.length; i++) {
    if (list[i][0] >= end) {
      end = list[i][1];
      answer++;
    }
  }

  return answer;
}

console.log(solution(arr));
