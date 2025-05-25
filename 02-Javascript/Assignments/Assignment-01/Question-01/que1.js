

var input = document.querySelector('#input')

var head_1 = document.querySelector('#head-1')
var para_1 = document.querySelector('#para-1')
var head_2 = document.querySelector('#head-2')
var para_2 = document.querySelector('#para-2')
var head_3 = document.querySelector('#head-3')

function Result() {
    

  if (input.value == 100) {
    console.log(`lksaflkasjfokdsj`);

    head_1.innerHTML = `Comparing Number:`;
    para_1.innerHTML = `100`;

    head_2.innerHTML = `Your Number:`;
    para_2.innerHTML = `${input.value}`;

    head_3.innerHTML = `Number is EQUAL THAN 100`;

    input.value = ''


  } else if (input.value > 100) {
    head_1.innerHTML = `Comparing Number:`;
    para_1.innerHTML = `100`;

    head_2.innerHTML = `Your Number:`;
    para_2.innerHTML = `${input.value}`;

    head_3.innerHTML = `Number is GREATER THAN 100`;

    input.value = "";


  } else if (input.value < 100) {

    head_1.innerHTML = `Comparing Number:`;
    para_1.innerHTML = `100`;

    head_2.innerHTML = `Your Number:`;
    para_2.innerHTML = `${input.value}`;

    head_3.innerHTML = `Number is LESS THAN 100`;

    input.value = "";


  }else if (input.value == 0){

    head_1.innerHTML = `Comparing Number:`;
    para_1.innerHTML = `100`;

    head_2.innerHTML = `Your Number:`;
    para_2.innerHTML = `${input.value}`;

    head_3.innerHTML = `Number is LESS THAN 100`;

    input.value = "";


  }else {

    head_1.innerHTML = `Comparing Number:`;
    para_1.innerHTML = `100`;

    head_2.innerHTML = `Your Value:`;
    para_2.innerHTML = `${input.value}`;

    head_3.innerHTML = `Please Enter Valid Value`;

    input.value = "";
    
  }






}