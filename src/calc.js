import * as ops from "./operations.js";

const calc = document.querySelector(".calculator")
const one = document.querySelector(".fst")
const two = document.querySelector(".snd")
const oper = document.querySelector("#op")
const res = document.querySelector(".result")



calc.addEventListener("submit", (event) => {
    event.preventDefault()
    const first = Number(one.value)
    const second = Number(two.value)
    console.log(one.value, two.value, oper.value, res);
    if (oper.value === "+") {
        res.textContent = "Result:" + ops.add(first, second)
    }else if(oper.value === "-") {
        res.textContent = "Result:" + ops.subtract(first, second)
    }else if(oper.value === "/") {
        res.textContent = "Result:" + ops.divide(first, second)
    }else if(oper.value === "*") {
        res.textContent = "Result:" + ops.multiply(first, second)
    }
})