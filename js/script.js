
let todoList = [];
let resultArea = document.getElementById('resultArea');
let inputValue = document.getElementById('todoInput');


let addItem = () => {
    let todoValue = inputValue.value;
    let newTasks = {
        text: todoValue,
        isDone: false
    }
    todoList.push(newTasks);
    todoValue = "";
    resultArea.innerHTML = newTasks.text;
    update(todoList)
}





let update = (array) => {
    let htmlTodoArray = todoList.map((item, index) => {
        if (item.isDone == false) {
            return `<li>${item.text} <button onclick="removeItem(${index})">X</button> <button onclick="toggle(${index})">DONE</button>
            </li>`
        } else if (item.isDone == true) {
            return `<li>${item.text} <button onclick="removeItem(${index})">X</button> <button onclick="toggle(${index})">UNDONE</button></li>`.strike();
        }
    })
    resultArea.innerHTML = htmlTodoArray;
}

let removeItem = (index) => {
    todoList.splice(index, 1);
    console.log = (todoList);
    update(todoList);

}

let toggle = (index) => {
    todoList[index].isDone = !(todoList[index].isDone)
    // if (todoList[index].isDone == true) {
    //     todoList[index].isDone == false;
    // } else {
    //     todoList[index].isDone == true
    // }
    update(todoList)
}

let showUndone = () => {
    if (document.getElementById("myCheck").checked == true) {
        let newArray = todoList.filter((item) => {
        })

}
}



// let saveData = () => {
//     localStorage.setItem("data", JSON.stringify(todoList));
// }

// let getData = () => {
//     let data = localStorage.getItem("data");
//     if (data == nul) {
//         todoList = [];
//     } else {
//         let result = JSON.parse(data);
//         todoList = result;
//         render(todoList);
//     }
// }

// getData();



// // Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// // // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);
