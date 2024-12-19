const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // Select the input Element
  const fruitToAdd = document.getElementById("fruit-to-add");
  
  // Create the li
  const newLi = document.createElement("li");
  newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>';
  
  // Adding li as the last element of unordered list
  fruits.appendChild(newLi);
});

fruits.addEventListener('click',function(event){
  if(event.target.classList.contains('delete-btn')){
    const fruitToDelete = event.target.parentElement;
    fruits.removeChild(fruitToDelete); 
  }
});
