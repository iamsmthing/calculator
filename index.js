const targetDiv1 = document.getElementById("item-1");
const targetDiv2 = document.getElementById("item-2");
const targetDiv3 = document.getElementById("item-3");
const targetDiv4 = document.getElementById("item-4");
const targetDiv5 = document.getElementById("item-5");
// const inputVal = result;
var result = document.getElementById("input");
const btn = document.getElementById("toggle");

function myFunc(targetValue) {
  result.value += targetValue.toString();
}

//function for clear
function clearFunc() {
  result.value = "";
}

//function for del
function del() {
  let val = result.value;
  const currVal = val.slice(0, -1);
  result.value = currVal;
  console.log(currVal);
}
//function for calculation
function calc() {
  let val = result.value;
  let res = eval(val);
  result.value = res;
}

//function for finding sqrt
function Sqrt() {
  let val = result.value;
  let res = Math.sqrt(val);
  result.value = res;
}
//function for sin calculation
function Sin() {
  let val = result.value;
  let res = Math.sin(val);
  result.value = res;
}

//function for cos calculation
function Cos() {
  let val = result.value;
  let res = Math.cos(val);
  result.value = res;
}
//function for tan calculation

function Tan() {
  let val = result.value;
  let res = Math.tan(val);
  result.value = res;
}
//function for log calculation
function Log() {
  let val = result.value;
  let res = Math.log10(val);
  result.value = res;
}

//function for square calculation
function Pow() {
  let val = result.value;
  let res = Math.pow(val, 2);
  result.value = res;
}

//function for toogle
btn.onclick = function () {
  if (
    targetDiv1.style.display !== "none" ||
    targetDiv2.style.display !== "none" ||
    targetDiv3.style.display !== "none" ||
    targetDiv4.style.display !== "none" ||
    targetDiv5.style.display !== "none"
  ) {
    targetDiv1.style.display = "none";
    targetDiv2.style.display = "none";
    targetDiv3.style.display = "none";
    targetDiv4.style.display = "none";
    targetDiv5.style.display = "none";
  } else {
    targetDiv1.style.display = "block";
    targetDiv2.style.display = "block";
    targetDiv3.style.display = "block";
    targetDiv4.style.display = "block";
    targetDiv5.style.display = "block";
  }
};
