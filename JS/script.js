let inputElem = document.getElementById("inputField");
let addList = document.querySelector('.addBtn');
let mainToDoElem = document.querySelector(".todo");

const getToDoListFromLocal = () => {
    return JSON.parse(localStorage.getItem("List Items"));
};

const addToDoListLocalStorage = (localToDoList) => {
    return localStorage.setItem("List Items", JSON.stringify(localToDoList));
}

let localToDoList = getToDoListFromLocal() || [];

const addToDoDynamicElement = (currEle) => {
    //adding the inside including the div holding li and button of the main todo div FROM LOCAL STORAGE
    const innerDivElem = document.createElement('div');
    innerDivElem.classList.add("innerDivElem");
    innerDivElem.innerHTML = `<li>${currEle}</li><button class="deleteBtn">Delete</button>`;
    
    mainToDoElem.append(innerDivElem);
}

//Function to add the element to the list
const addToDoList = () => {

    //TRIMMING THE wwhite space from out input to put in an array
    const toDoListValue = inputElem.value.trim();

    if(toDoListValue != "" && !localToDoList.includes(toDoListValue)){

    //adding the input to the array for local storage
    localToDoList.push(toDoListValue);
    //filtering the dublicate value
    localToDoList = [...new Set(localToDoList)];
    //adding into the local storage
    localStorage.setItem("List Items", JSON.stringify(localToDoList));
    console.log(localToDoList);

    //adding the inside including the div holding li and button of the main todo div
    const innerDivElem = document.createElement('div');
    innerDivElem.classList.add("innerDivElem");
    innerDivElem.innerHTML = `<li>${inputElem.value}</li><button class="deleteBtn">Delete</button>`;

    mainToDoElem.append(innerDivElem);
    }
    // console.log(innerDivElem);
    inputElem.value = "";
};

const showToDoListFromLocal = (() => {
    console.log(localToDoList);

    localToDoList.forEach((currEle) => {
        addToDoDynamicElement(currEle);
    });
})();

const removeToDoElem = (event) => {
    
    toDoToRemove = event.target;
    let toDoListContent = toDoToRemove.previousElementSibling.innerText;

    let parentElem = toDoToRemove.parentElement;

    console.log(toDoListContent);

    localToDoList=localToDoList.filter((currToDo) => {
        return currToDo.toLowerCase() != toDoListContent.toLowerCase();
    });

    addToDoListLocalStorage(localToDoList);

    parentElem.remove();
    console.log(localToDoList);
}

mainToDoElem.addEventListener('click',(event) => {

    if(event.target.classList.contains("deleteBtn")){
        removeToDoElem(event);
    }
});

//adding the event listener and calling the function to add the item to the list 
addList.addEventListener('click',() => {
    addToDoList();
});