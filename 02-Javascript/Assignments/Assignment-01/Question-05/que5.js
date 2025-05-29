var input = document.querySelector("#input");

var head_1 = document.querySelector("#head-1");
var para_1 = document.querySelector("#para-1");
var head_2 = document.querySelector("#head-2");
var para_2 = document.querySelector("#para-2");
var head_3 = document.querySelector("#head-3");



// Need to check uservalue is perfect divisible by 3 or not.
function Result() {
  if (input.value % 5 === 0 && input.value !== "") {
    console.log(`lksaflkasjfokdsj`);

    head_1.innerHTML = `Divisible by:`;
    para_1.innerHTML = `5`;

    head_2.innerHTML = `Your Value:`;
    para_2.innerHTML = `${input.value}`;

    head_3.innerHTML = `Your value is Divisible by 5`;

    input.value = "";
  } else if (input.value === "") {
    head_1.innerHTML = `Divisible by:`;
    para_1.innerHTML = `5`;

    head_2.innerHTML = `Your Value:`;
    para_2.innerHTML = `?`;

    head_3.innerHTML = `Please Enter Value`;

    input.value = "";
  } else if (input.value % 5 !== 0) {
    head_1.innerHTML = `Divisible by:`;
    para_1.innerHTML = `5`;

    head_2.innerHTML = `Your Value:`;
    para_2.innerHTML = `${input.value}`;

    head_3.innerHTML = `Your number is not Divisible by 5`;

    input.value = "";
  } else {
    head_1.innerHTML = `Divisible by:`;
    para_1.innerHTML = `5`;

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
