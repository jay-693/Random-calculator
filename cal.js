let num1=Math.floor(Math.random()*10)+1
let num2=Math.floor(Math.random()*10)+1
let sumEl=document.getElementById("sum")
function add(){
  let sum=num1+num2
  sumEl.innerText=sum
}
function sub(){
  let sum=num1-num2
  sumEl.innerText=sum
}
function mul(){
  let sum=num1*num2
  sumEl.innerText=sum
}
function div(){
  let sum=num1/num2
  sumEl.innerText=sum
}
