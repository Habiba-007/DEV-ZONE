const inputElement = document.getElementById('title');
const headingElement = document.getElementById('heading');
const align = document.getElementById('align_input');
const fsElement = document.getElementById('fs');
const pxElement = document.getElementById('px')
const famillyElement=document.getElementById('fontFamilly')

inputElement.onkeyup = () => {
  let inputValue = inputElement.value;
  headingElement.innerHTML = inputValue;
}
// align.onchange = () => {
//   const align_value = align.value;
//   headingElement.style.textAlign = align_value;
// }


// catch the select tag =>
align.onchange = () => {
  const alignValue = align.value;
  headingElement.style.textAlign = alignValue;
}

// now catch the font-size input tag (instant change means oninput-event fire hobe)
fsElement.oninput = () => {
  const fontInput = fsElement.value;
  headingElement.style.fontSize = fontInput + "px"
  // px-control and px-id was a html tag 
  pxElement.innerHTML = fontInput
  
}

//font-familly control->
famillyElement.oninput = () => {
  const famillyValue = famillyElement.value;
  headingElement.style.fontFamily=famillyValue
}

