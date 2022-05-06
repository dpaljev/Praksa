class TodoItem {
  constructor(id, description, createdAt) {
    this.id = id;
    this.description = description;
    this.createdAt = createdAt;
  }
}


const items = [new TodoItem(1, "xyz", new Date())];


items.forEach(x => {
  const el = document.createElement("div");
  el.innerText = `Stvoreno: ${x.createdAt}`;
  document.checkbox.appendChild(el);
});


const done = document.getElementById("donebtn").addEventListener('click',)


document.getElementById('donebtn').onclick = function() {
  const checkboxes = document.getElementsByName('checkbox');
  for (const checkbox of checkboxes)
  {
      if (checkbox.checked) {
          document.body.append(checkbox.value + ' ');
      }
  }
}

// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }