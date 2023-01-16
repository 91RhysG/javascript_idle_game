console.log("game running");
let number = 0;
if (localStorage.getItem("currentNumber")) {
  number = Number(localStorage.getItem("currentNumber"));
  document.getElementById("number").innerText = number;
  console.log(number);
}

const clickerButton = document.getElementById("clicker");

increaseNumber = () => {
  number = Number(document.getElementById("number").innerText);
  document.getElementById("number").innerText = ++number;
  console.log(number);
    localStorage.setItem("currentNumber", number);
    
};

clickerButton.addEventListener("click", increaseNumber);
