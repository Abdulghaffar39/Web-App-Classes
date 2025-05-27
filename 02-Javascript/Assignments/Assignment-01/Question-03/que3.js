var input = document.querySelector("#input");

var head_1 = document.querySelector("#head-1");
var para_1 = document.querySelector("#para-1");
var head_2 = document.querySelector("#head-2");
var para_2 = document.querySelector("#para-2");
var head_3 = document.querySelector("#head-3");

function Result() {
  if (input.value == 100) {
    console.log(`lksaflkasjfokdsj`);

    head_1.innerHTML = `Comparing Number:`;
    para_1.innerHTML = `100`;

    head_2.innerHTML = `Your Number:`;
    para_2.innerHTML = `${input.value}`;

    head_3.innerHTML = `Number is EQUAL THAN 100`;

    input.value = "";


  } else if (input.value > 100) {

    console.log(`lksaflkasjfokdsj`);


    head_1.innerHTML = `Comparing Number:`;
    para_1.innerHTML = `100`;

    head_2.innerHTML = `Your Number:`;
    para_2.innerHTML = `${input.value}`;

    head_3.innerHTML = `Number is GREATER THAN 100`;

    input.value = "";


  } else if (input.value < 100  && input.value === 0) {

    console.log(`lksaflkasjfokdsj`);


    head_1.innerHTML = `Comparing Number:`;
    para_1.innerHTML = `100`;

    head_2.innerHTML = `Your Number:`;
    para_2.innerHTML = `${input.value}`;

    head_3.innerHTML = `Number is LESS THAN 100`;

    input.value = "";


  } else if (input.value == "") {
    head_1.innerHTML = `Comparing Number:`;
    para_1.innerHTML = `0`;

    head_2.innerHTML = `Your Number:`;
    para_2.innerHTML = `0`;

    head_3.innerHTML = `Please put the value`;

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
