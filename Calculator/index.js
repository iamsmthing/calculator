const targetDiv1 = document.getElementById("item-1");
const targetDiv2 = document.getElementById("item-2");
const targetDiv3 = document.getElementById("item-3");
const targetDiv4 = document.getElementById("item-4");
const targetDiv5 = document.getElementById("item-5");
// const inputVal = document.getElementById("input");
const btn = document.getElementById("toggle");

function myFunc(targetValue) {
  document.getElementById("input").value += targetValue.toString();
}
function clearFunc() {
  document.getElementById("input").value = "";
}

function del() {
  let val = document.getElementById("input").value;
  const currVal = val.slice(0, -1);
  document.getElementById("input").value = currVal;
  console.log(currVal);
}

function calc() {
  let val = document.getElementById("input").value;
  let res = eval(val);
  document.getElementById("input").value = res;
}

function Sqrt() {
  let val = document.getElementById("input").value;
  let res = Math.sqrt(val);
  document.getElementById("input").value = res;
}

function Sin() {
  let val = document.getElementById("input").value;
  let res = Math.sin(val);
  document.getElementById("input").value = res;
}

function Cos() {
  let val = document.getElementById("input").value;
  let res = Math.cos(val);
  document.getElementById("input").value = res;
}

function Tan() {
  let val = document.getElementById("input").value;
  let res = Math.tan(val);
  document.getElementById("input").value = res;
}
function Log() {
  let val = document.getElementById("input").value;
  let res = Math.log10(val);
  document.getElementById("input").value = res;
}
function Pow() {
  let val = document.getElementById("input").value;
  let res = Math.pow(val, 2);
  document.getElementById("input").value = res;
}

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
