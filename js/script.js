
let todoList = [];
let resultArea = document.getElementById('resultArea');
let inputValue = document.getElementById('todoInput');


let addItem = () => {
    let todoValue = inputValue.value;
    console.log(todoValue)
    let newTasks = {
        text: todoValue,
        isDone: false
    }
    todoList.push(newTasks);
    todoValue = "";
    resultArea.innerHTML = newTasks.text;
    update()
}





let update = () => {
    let items = "";
    for (let i = 0; i < todoList.length; i++) {
        items += `<li style="text-decoration:${todoList[i].isDone ? 'line-through' : ""}" 
        onclick="mark(${i})">${todoList[i].text} 
        
        <button "href='#' onclick="remove(${i})">X</button></div></li>`;
    }
    resultArea.innerHTML = items;
}

let remove = (i) => {
    todoList.splice(i, 1)
    update();

}

let mark = (i) => {
    todoList[i].isDone = !(todoList[i].isDone)
    // if (todoList[index].isDone == true) {
    //     todoList[index].isDone == false;
    // } else {
    //     todoList[index].isDone == true
    // }
    update()
}

// let showUndone = () => {
//     if (document.getElementById("myCheck").checked == true) {
//         let newArray = todoList.filter((item) => {
//         })

// }
// }

// let render = () => {
//     let htmlTodoArray = todoList.map((itme, index) => {
//         if (item.isDone == false) {
//             return `<li>${item.text} <button onclick="removeItem(${index})">X</button> <button onclick="
//             </li>`
//         }
//     }
//     )
// }

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
