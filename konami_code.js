const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
 function init(){

let index = 0;

document.body.addEventListener ("keydown", (thingPressed) => {
  const key = thingPressed.key


  if (codes[index] === key){
    index = ++index;
  }

  else {
    index = 0
  }

  if (index === codes.length) {
    window.alert("Hurray!");
  index = 0
  }
})
};

init();
