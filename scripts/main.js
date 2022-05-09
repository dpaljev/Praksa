// Created at - prikazi u DD.MM.YYYY. HH:mm formatu -> npr. 24.05.2022. 15:04 -- DONE
//Step1: make constructor work as it should --- DONE
//step 2: make function that creates elements from constructors creations ---- DONE
//step 3: make checked/unchecked checker... kek ---- DONE, FK YES
//step 4 hide checked ---- DONE
//step 5 home and done buttons need to be working



//Vratiti done na constructora
//Napraviti listu di su svi false
//pri checku stavit da false postane true
//home btn pokazuje done == false
//done btn prikazune done == true





//Time format

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}
function formatDate(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('.') +
  ' ' +
  [
    padTo2Digits(date.getHours()),
    padTo2Digits(date.getMinutes()),
  ].join(':')
}

//Constructor

class TodoItem {
  constructor(id, description, createdAt, done) {
    this.id = id;
    this.description = description;
    this.createdAt = createdAt;
    this.done= done;
  }
}

//Giving constructor items to work with

let items = [
  new TodoItem(1, "Never gonna give you up", formatDate(new Date()), false),
  new TodoItem(2, "Never gonna let you down", formatDate(new Date()), false),
  new TodoItem(3, "Never gonna run around and desert you", formatDate(new Date()), false),
  new TodoItem(4, "Get Rickrolled lmao", formatDate(new Date()), false)
];

window.onload = function () {

  //Creating elements in body

  items.forEach(x => {
    const element = document.createElement("div");
    element.innerHTML = `
        <div id=${x.id} class = container> ${x.description}
          <br>
          <span class="creation">Created on: ${x.createdAt}</span>
          <input class="todo-item-checkbox" type="checkbox" />
        </div>
      `;
    document.getElementById("checkBoxCont").append(element);
  });



//Lista, do smthing with it

  function generateList(done) {
    if (done == true) {
      const doneElem = items.filter(x => x.done == true)
  
    } else {
      const doneElem = items.filter(x => x.done == false)
    }
  }


//Hiding checked items


  [...document.getElementsByClassName("todo-item-checkbox")].forEach(todoCheckbox => {
    todoCheckbox.addEventListener("change", function () {
      if(todoCheckbox.checked){
        todoCheckbox.parentElement.style.display = "none";
        todoCheckbox.parentElement.className = "containerDone";
      } else{
        todoCheckbox.parentElement.style.display = "block";
        todoCheckbox.parentElement.className = "container";
      }
    });
  });


//Done Button

  const doneButton = document.getElementById("donebtn");
  
  doneButton.addEventListener('click', function () { 
    document.getElementsByClassName("containerDone").style.visibility = "block";
    document.getElementsByClassName("container").style.visibility = "none";
    
  });

//Home Button

  const homeButton = document.getElementById("homebtn")
  
  homeButton.addEventListener('click', function() {
    document.getElementsByClassName("containerDone").style.visibility = "block";
    document.getElementsByClassName("container").style.visibility = "none";
    
    })
};