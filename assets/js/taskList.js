const newTask = document.querySelector("#newTask");
const addTask = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");

const check = () => {
  if (newTask.value === '') {
    return false;
  }
  return true;
};

const printList = (task) => {
  const newLi = document.createElement("li");
  newLi.textContent = newTask.value;
  taskList.appendChild(newLi);
  newTask.value = '';
};

addTask.addEventListener("click", function (e) {
  e.preventDefault(); // blocca il comportamento predefinito del button
  if (check()) {
    let task = newTask.value;
    printList(task);
  } else {
    alert("Inserire un task nel campo!");
    return;
  }
});
