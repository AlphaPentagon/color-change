
// Create function to change the color of the paragraph

// const color1 = "red";
// const color2 = "blue";
// const color3 = "green";
// const color4 = "yellow";
// const color5 = "pink";
// const color6 = "purple";
// const color7 = "black";
// const color8 = "orange";
// const color9 = "grey";
// const color10 = "aqua";




function colorChange() {
  const colourArray  = ["red", "blue", "green", "yellow", "pink", "purple", "black", "orange", "grey", "aqua"];
  const randomNumber = Math.floor(Math.random() * 10);
  const randomColour = colourArray[randomNumber];
  document.getElementById('color_paragraph').style.color = randomColour;
  document.getElementById("color_paragraph").innerHTML = `You've changed my colour to: ${randomColour}!`;
}

// Create function to change the text of the paragraph

function textChange() {
  const wordArray = ["dog", "cheese", "Radiohead", "milky", "moist", "fart", "Barnaby", "car", "dulap", "sniff"];
  const randomNumber = Math.floor(Math.random() * wordArray.length);
  const randomWord = wordArray[randomNumber];
  document.getElementById("color_paragraph").style.color = "black";
  document.getElementById("color_paragraph").innerHTML = `You've changed my text to: ${randomWord}!`;
}
