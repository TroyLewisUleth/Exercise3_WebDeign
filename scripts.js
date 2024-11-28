const characterStates = [
  "Images/Duck_2.png",
  "Images/Duck_3.png",
  "Images/Duck_4.png",
  "Images/Duck_5.png",
];

const character = document.getElementById("character");
let currentState = 0;

function changeState(newState) {
  if (newState >= 0 && newState < characterStates.length) {
    currentState = newState;
    character.src = characterStates[currentState];
  } else {
    console.error("Invalid state:", newState);
  }
}

character.addEventListener("mouseenter", () => changeState(1));
character.addEventListener("mouseleave", () => changeState(0));
character.addEventListener("click", () => changeState(2));
character.addEventListener("dblclick", () => changeState(3));

character.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  const randomState = Math.floor(Math.random() * characterStates.length);
  changeState(randomState);
});
