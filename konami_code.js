/*const codes = [
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
console.log(key);

  if (codes[index] === key){
  ++index;
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

init();*/

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

function init() {
  let idx = 0

  document.body.addEventListener("keydown", (e) => {
    const key = e.key

    idx = (codes[idx] === key) ? ++idx : 0

    if (idx === codes.length) {
      window.alert("Hurray!");
      idx = 0
    }

  });
}
