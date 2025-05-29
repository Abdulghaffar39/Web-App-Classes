var input = document.querySelector("#input");

var head_1 = document.querySelector("#head-1");
var para_1 = document.querySelector("#para-1");
var head_2 = document.querySelector("#head-2");
var para_2 = document.querySelector("#para-2");
var head_3 = document.querySelector("#head-3");

// Need to check uservalue what is the reminder by divided by 2.
function Result() {
  let reminder = input.value % 3;
  console.log(reminder);

  if (input.value <= 2 && input.value !== "") {
    head_1.innerHTML = `Divisible by:`;
    para_1.innerHTML = `3`;

    head_2.innerHTML = `Your Value:`;
    para_2.innerHTML = `${input.value}`;

    head_3.innerHTML = `Please Enter Greater Than 2`;

    input.value = "";
  } else if (input.value / 2 && input.value !== "") {
    console.log(`lksaflkasjfokdsj`);

    head_1.innerHTML = `Divisible by:`;
    para_1.innerHTML = `3`;

    head_2.innerHTML = `Your Value:`;
    para_2.innerHTML = `${input.value}`;

    head_3.innerHTML = `Divided by 3 & Reminder value is ${reminder}`;

    input.value = "";
  } else if (input.value === "") {
    head_1.innerHTML = `Divisible by:`;
    para_1.innerHTML = `3`;

    head_2.innerHTML = `Your Value:`;
    para_2.innerHTML = `?`;

    head_3.innerHTML = `Please Enter Value`;

    input.value = "";
  } else {
    head_1.innerHTML = `Divisible by:`;
    para_1.innerHTML = `3`;

    head_2.innerHTML = `Your Value:`;
    para_2.innerHTML = `${input.value}`;

    head_3.innerHTML = `Please Enter Valid Number`;

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
