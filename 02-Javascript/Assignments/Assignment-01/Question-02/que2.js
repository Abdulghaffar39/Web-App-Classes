// 02-need to check userfirst value is greater or user second value.

var input_1 = document.querySelector("#input_1");
var input_2 = document.querySelector("#input_2");

var head_1 = document.querySelector("#head-1");
var para_1 = document.querySelector("#para-1");
var head_2 = document.querySelector("#head-2");
var para_2 = document.querySelector("#para-2");
var head_3 = document.querySelector("#head-3");

function Result() {
    
  if ((input_1.value === input_2.value)) {

    head_1.innerHTML = `First Value`;
    para_1.innerHTML = `${input_1.value}`;

    head_2.innerHTML = `Second Value`;
    para_2.innerHTML = `${input_2.value}`;

    head_3.innerHTML = `Both numbers are EQUAL`;

    input.value = "";


  } else if ((input_1.value > input_2.value)) {

    head_1.innerHTML = `First Value`;
    para_1.innerHTML = `${input_1.value}`;

    head_2.innerHTML = `Second Value`;
    para_2.innerHTML = `${input_2.value}`;

    head_3.innerHTML = `First value is GREATER THAN second value`;

    input.value = "";

    
  } else if (input.value < 100) {
    head_1.innerHTML = `Comparing Number:`;
    para_1.innerHTML = `100`;

    head_2.innerHTML = `Your Number:`;
    para_2.innerHTML = `${input.value}`;

    head_3.innerHTML = `Number is LESS THAN 100`;

    input.value = "";
  } else if (input.value == 0) {
    head_1.innerHTML = `Comparing Number:`;
    para_1.innerHTML = `100`;

    head_2.innerHTML = `Your Number:`;
    para_2.innerHTML = `${input.value}`;

    head_3.innerHTML = `Number is LESS THAN 100`;

    input.value = "";
  } else {
    head_1.innerHTML = `Comparing Number:`;
    para_1.innerHTML = `100`;

    head_2.innerHTML = `Your Value:`;
    para_2.innerHTML = `${input.value}`;

    head_3.innerHTML = `Please Enter Valid Value`;

    input.value = "";
  }
}

function Reset() {
  head_1.innerHTML = ``;
  para_1.innerHTML = ``;

  head_2.innerHTML = ``;
  para_2.innerHTML = ``;

  head_3.innerHTML = ``;

  input.value = "";
}
