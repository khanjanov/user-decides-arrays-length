let result = document.querySelector(".container__result");
let container = document.querySelector(".container");
let a = prompt("enter array's length");
let arr = [];
let i = 0;
for (i; i < a; i++) {
  arr[i] = +prompt(` enter array's number ${i + 1} `);
}
result.innerHTML = `${arr}`;
container.addEventListener("click", () => {
  result.innerHTML = "I knew you that would click 😃";
});
