const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString();

let N = Number(input);

let arr = [0, 1];
let answer = 1;

for (let i = 1; i < N; i++) {
  answer = arr[i - 1] + arr[i];

  arr.push(answer);
}

console.log(arr[N]);
