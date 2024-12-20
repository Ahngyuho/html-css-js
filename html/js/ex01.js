// //문제 01 :
// //총합을 저장할 변수 생성
// //변수에 0 저장
// let sum = 0;

// //0부터 100까지 반복하면서
// //총합을 젖아하는 변수에 총합의 값 더하기 현재 순서를 더해서 저장
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// //문제 02 :
// let arr = [];

// for (let i = 0; i < 4; i++) {
//   arr[i] = Math.floor(Math.random() * (10 - 1) + 1);
// }

// console.log(arr);

// //문제 03 :
// for (let i = 0; i < 7; i = i + 1) {
//   arr[i] = Math.floor(Math.random() * (10 - 1) + 1);
// }
// console.log(arr);
// //문제 04 :
// let lotto = [];
// let cnt = 0;
// let pickMax = 45;
// const lottoLen = 6;
// while (cnt < lottoLen) {
//   let cur = Math.floor(Math.random() * pickMax + 1);
//   if (!lotto.includes(cur)) {
//     lotto.push(cur);
//     cnt++;
//   }
// }
// console.log(lotto);
// //문제 05 :
// // let ans = Math.floor(Math.random() * (100 - 1) + 1);
// let ans = [];
// cnt = 0;

// let attempt = 0; // 시도 횟수
// let maxAttempts = 10;

// while (cnt < 3) {
//   let cur = Math.floor(Math.random() * (10 - 1));
//   if (!ans.includes(cur)) {
//     ans.push(cur);
//     cnt++;
//   }
// }

// function playGame() {
//   let num = getInput();
//   let guess = [];
//   for (let k = 2; k >= 0; k--) {
//     guess[k] = num % 10;
//     num = Math.floor(num / 10);
//   }

//   console.log(guess);

//   let s = checkStrike(guess, ans);
//   let b = checkBall(guess, ans);
//   let o;

//   if (s === 3) console.log("정답입니다.", "총 수행 횟수 : ", attempt + 1);
//   console.log("S : ", s, "B : ", b, "O : ", 3 - (s + b));

//   attempt++;
// }

// function checkStrike(guess, ans) {
//   let cnt = 0;
//   for (let i = 0; i < 3; i++) {
//     if (ans[i] == guess[i]) cnt++;
//   }
//   return cnt;
// }
// function checkBall(guess, ans) {
//   let cnt = 0;
//   for (let i = 0; i < 3; i++) {
//     if (ans.includes(guess[i]) && ans[i] != guess[i]) cnt++;
//   }
//   return cnt;
// }

// function checkOut(guess, ans) {
//   let cnt = 0;
//   for (let i = 0; i < 3; i++) {
//     if (!ans.includes(guess[i])) cnt++;
//   }
//   return cnt;
// }

// function getInput() {
//   let guess = document.getElementById("number").value;
//   return Number(guess);
// }

// test1("기존 함수");
// function test1(message) {
//   console.log(message);
// }

// test1("기존 함수");

// test2("화살표 함수");

// const test2 = (message) => console.log(message);

// test2("화살표 함수");

//계산기

const add = (num1, num2) => num1 + num2;

console.log(add(1, 2));

pos1 = {
  row: 10,
  col: 2,
};

pos2 = {
  row: 1,
  col: 5,
};

const heuristic = (pos1, pos2) =>
  Math.abs(pos1.row - pos2.row) + Math.abs(pos1.col - pos2.col);

let hn = heuristic(pos1, pos2);
console.log(hn);

let obj = {
  num1: 10,
  obj2: {
    num2: 20,
    obj3: {
      num3: 30,
    },
  },
};

console.log(obj.num1); // 숫자 저장
console.log(obj.obj2); // 객체
// 이 변수에 어떤 것들이 저장되어 있는지 또 이 저장된 것을 어떻게 접근해야 하는지 생각할 것은 이것임

console.log(document);
let getTagById = document.getElementById("h1_2"); // id는 html 파일에서 유일해야 한다.
let getTagByTagName = document.getElementsByTagName("h1");
let getTagByClassName = document.getElementsByClassName("color_red");
let getTagSelector = document.querySelector(".color_red");
let getTagSelectors = document.querySelectorAll(".color_red");

getTagById.innerHTML = "변경";
getTagById.style.backgroundColor = "blue";

let bodyTag = document.querySelector("body");
const newH1Tag = document.createElement("h1");
newH1Tag.innerHTML = "추가";
bodyTag.appendChild(newH1Tag);

bodyTag.removeChild(newH1Tag);

document.querySelectorAll("h1")[0].classList.add("color_red");
// h1 태그 객체가 저장되어 있다!
document.querySelectorAll("h1")[0].classList.remove("color_red");

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  console.log("버튼을 누르다.");
  const first_h1 = document.querySelectorAll("h1")[0];

  if (first_h1.classList.contains("color_red")) {
    document.querySelectorAll("h1")[0].classList.remove("color_red");
  } else {
    document.querySelectorAll("h1")[0].classList.add("color_red");
  }
});

let objList = [];
objList.push({ value: 23 });
objList.push({ value: 44 });
objList.push({ value: 8 });
objList.push({ value: 26 });
objList.push({ value: 232 });
objList.push({ value: 78 });

console.log(objList.sort((a, b) => a.value - b.value));
//
objList.pop(); // 마지막 제거
objList.shift(); // 첫번째 제거
console.log(objList);
