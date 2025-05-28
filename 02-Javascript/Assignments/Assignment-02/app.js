let input = document.querySelector('#input');
let para = document.querySelector('#para');
let head = document.querySelector('#head');


// function result(){
  
//   if(input.)
// }

function result() {
  if (input.value !== "") {

    head.innerHTML = `Table of ${input.value}`
    para.innerHTML = "";

    for (var i = 1; i <= 10; i++) {
      console.log(`${input.value} X ${i} = ${input.value * i}`);
      para.innerHTML += `${input.value} X ${i} = ${input.value * i} <br />`;
    }

    input.value = "";
  }else if (input.value === "") {
    h1.innerHTML = "Please Enter Table Number";
  }
}

function reset() {
  
  input.value.innerHTML = "";
  head.innerHTML = "";
  para.innerHTML = "";
}










