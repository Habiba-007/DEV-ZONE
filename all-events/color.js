// Now when put the input value then change the background color use keyup-keydown event=>  
const inputElement = document.getElementById('inputing');
inputElement.onkeyup = () => {
  const inputValue = inputElement.value;
  inputElement.parentElement.parentElement.style.backgroundColor = inputValue;
  // inputElement.value = "";
}

// Now when we right something in the input value->then show the input-value to upper-h1-tag=?//
const input_value = document.getElementById('inputing');
input_value.onkeyup = () => {
  const value_msg = input_value.value;
  input_value.previousElementSibling.previousElementSibling.innerHTML = value_msg;
}

/*=>Now we watch the "Form-ELement"=>(focus,blur,change)*/
// =>use 'focus event' means when click the input tag =>
const input = document.getElementById('inputing');
input.onfocus = () => {
  console.log("HEllo Focus How Are U");
  
}
// =>use "blur-event" means when right something input-tag and last-time click the outside =>
const blur_input = document.getElementById('inputing');
blur_input.onblur = () => {
  console.log("Hello blur how r u");
  
}

// =?use "change-event" mean when right something(value and when value was change then click the outside and show change event fire) input tag and click the outside =>//
const change_input = document.getElementById('inputing');
change_input.onchange = () => {
  console.log('Hello change event');
  alert('change-event fire')
  
}

// =?Now another topice was catch the input value and change the body backgroundColor=>
const input_background = document.getElementById('inputing')

input_background.onchange = () => {
  const bgColor = input_background.value;
  input_background.parentElement.parentElement.style.backgroundColor=bgColor
}

// 👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾 
// Now if we want to instent change of input value then use (input-event)=>
const input_instentElements = document.getElementById('inputing');
input_instentElements.oninput = () => {
  const instent_value = input_instentElements.value;
  input_instentElements.parentElement.parentElement.style.backgroundColor = instent_value;
}