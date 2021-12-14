
window.onload = init;

function init()
{
  console.log("window has loaded");
  state.a = 1;
  state.b = 1;
  state.c = 1;
  state.d = 1;
  state.e = 1;
}

var state = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0
};

function nexthat()
{
  console.log("inside function nexthat");
  console.log(state.a);
  var hat = document.getElementById("hat");
  if(state.a === 0) {
    hat.setAttribute("class", "hat1");
      state.a++;
      console.log(state.a);
  }
  else if(state.a === 1) {
    hat.setAttribute("class", "hat2");
      state.a++;
      console.log(state.a);
  }
  else if(state.a === 2) {
    hat.setAttribute("class", "hat3");
      state.a++;
      console.log(state.a);
  }
  else{
    hat.setAttribute("class", "hat4");
      state.a = 0;
  }
}

function nexteyes()
{
  console.log("inside function nexteyes");
  console.log(state.b);
  var eyes = document.getElementById("eyes");
  if(state.b === 0) {
    eyes.setAttribute("class", "eye1");
      state.b++;
      console.log(state.b);
  }
  else if(state.b === 1) {
    eyes.setAttribute("class", "eye2");
      state.b++;
      console.log(state.b);
  }
  else if(state.b === 2) {
    eyes.setAttribute("class", "eye3");
      state.b++;
      console.log(state.b);
  }
  else if(state.b === 2) {
    eyes.setAttribute("class", "eye4");
      state.b++;
      console.log(state.b);
  }
  else if(state.b === 2) {
    eyes.setAttribute("class", "eye5");
      state.b++;
      console.log(state.b);
  }
  else{
    eyes.setAttribute("class", "eye6");
      state.b = 0;
  }
}

function nextneck()
{
  console.log("inside function nextneck");
  console.log(state.c);
  var neck = document.getElementById("neck");
  if(state.c === 0) {
    neck.setAttribute("class", "neck1");
      state.c++;
      console.log(state.c);
  }
  else{
    neck.setAttribute("class", "neck2");
      state.c = 0;
  }
}

function nextshirt()
{
  console.log("inside function nextshirt");
  console.log(state.d);
  var shirt = document.getElementById("shirt");
  if(state.d === 0) {
    shirt.setAttribute("class", "shirt1");
      shirt.d++;
      console.log(state.d);
  }
  else if(state.d === 1) {
    shirt.setAttribute("class", "shirt2");
      state.d++;
      console.log(state.d);
  }
  else{
    shirt.setAttribute("class", "shirt3");
      state.d = 0;
  }
}

function nextfur()
{
  console.log("inside function nextfur");
  console.log(state.e);
  var fur = document.getElementById("fur");
  if(state.e === 0) {
    fur.setAttribute("class", "fur1");
      state.e++;
      console.log(state.e);
  }
  else if(state.e === 1) {
    fur.setAttribute("class", "fur2");
      state.e++;
      console.log(state.e);
  }
  else if(state.e === 2) {
    fur.setAttribute("class", "fur3");
      state.e++;
      console.log(state.e);
  }
  else if(state.e === 2) {
    fur.setAttribute("class", "fur4");
      state.e++;
      console.log(state.e);
  }
  else{
    fur.setAttribute("class", "fur5");
      state.e = 0;
  }
}
