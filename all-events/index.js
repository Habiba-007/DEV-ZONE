const click_elm = document.getElementById('clicks')
 
// =>THis is the Mouse event=>//
click_elm.addEventListener('click', function () {
  // first catch the input value //
  const catch_input_value = click_elm.previousElementSibling.value;
  // This input value gone to h1 tag now //
  click_elm.nextElementSibling.nextElementSibling.innerHTML = catch_input_value
  // when value gone to h1 tag then input value was empty =>
     click_elm.previousElementSibling.value=""
})

// when we use the arrow function =>
  /*
click_elm.onclick = () => {
     // first catch the input value //
  const catch_input_value = click_elm.previousElementSibling.value;
  // This input value gone to h1 tag now //
  click_elm.nextElementSibling.nextElementSibling.innerHTML = catch_input_value
  // when value gone to h1 tag then input value was empty =>
     click_elm.previousElementSibling.value=""
  }
*/
 
// When submit input value then change to background-color use mouse-cllick-event //
const clickELements = document.getElementById('clicks')
clickELements.onclick = () => {
  const inputValue = clickELements.previousElementSibling.value
  clickELements.previousElementSibling.parentElement.parentElement.style.backgroundColor = inputValue;
  clickELements.previousElementSibling.value = '';
}
