const todos = [
    'Сделать проектную работу',
    'Полить цветы',
    'Пройти туториал по Реакту',
    'Сделать фронт для своего проекта',
    'Погулять с собакой',
    'Разобраться в замыканиях',
    'Решить задачу на Codewars'
  ];
  console.log(todos);

  //1.добавляем контейнер куда мы будем добавлять задачи
  const todosConteiner = document.querySelector('.todos__list');
  const addTodoForm = document.querySelector('.todo-form');
  const input = addTodoForm.querySelector('.todo-form__input');
  const template = document.querySelector('#todo-item-template');

  //2.создать элемент и добавить на страницу
  //2.1 создаем элемент - функция creatTodo
  //первый способ
  /*const creatTodo = (taskName) => {
    const li = document.createElement('li');//создали li
    li.classList.add('todo-item');//присвоили ей класс
    const span = document.createElement('span');
    span.classList.add('todo-item__text');
    span.textContent = taskName;//записываем текст в наш span !!!!
    const buttonEdit = document.createElement('button');
    buttonEdit.classList.add('todo-item__edit');
    const buttonCopy = document.createElement('button');
    buttonCopy.classList.add('todo-item__copy');
    const buttonDel = document.createElement('button');
    buttonDel.classList.add('todo-item__del');
    //методом append добавляем в li все элементы, которые мы сгенерировали
    li.append(span, buttonEdit, buttonCopy, buttonDel);
    // возвращаем тег ли, что бы при вызове функции мы могли получить результата работы
    return li;
  }*/
  //второй способ используем обратные кавычки и вставляем код html. taskName добавляем в span как текст контент и удаление и копирование
  function creatTodo(taskName) {
    const task = template.content.querySelector('.todo-item').cloneNode(true);
    task.querySelector('.todo-item__text').textContent = taskName;
    task.querySelector('.todo-item__del').addEventListener('click', () => {
      task.remove();
    });
    task.querySelector('.todo-item__copy').addEventListener('click', () => {
      renderTodo(taskName);
    });
    //функция редактирования 
task.querySelector('.todo-item__edit').addEventListener('click', (e) => {
//найти элемент текста
const textElement = task.querySelector('.todo-item__text');
//делаем этот текстовый элемент редактируемым
textElement.contentEditable = true;
//что бы началось редактирование, устанавливаем фокус
textElement.focus();
// опишем editTodo
const editTodo = (e) => {
  e.preventDefault();
  textElement.contentEditable = false; 
  textElement.removeEventListener('blur', editTodo);
}
//используем событие blur на этом элементе
textElement.addEventListener('blur', editTodo);

})
    return task;
}
  console.log(creatTodo);
//2.3 создаем функцию - добавляем в контейнер todosConteiner наш элемент li поэтому передаем в параметры append метод creatTodo
//для первого способа
/*
const renderTodo = (taskName) => {
    todosConteiner.append(creatTodo(taskName))
}*/
//для второго. так элементы созданы html кодом
const renderTodo = (taskName) => {
  todosConteiner.append(creatTodo(taskName))
}

//перебор элементов массива методом forEach
  todos.forEach((title) => {
    renderTodo(title);
  })
  
// 2.4 перебор элементов методом Map и передадим в него нашу функцию колбек с переменной taskName , разворачиваем массив с помощью спред оператора ...
/*todosConteiner.append(...todos.map((taskName) => {
    return creatTodo(taskName);
}));*/

// 
const addTodo = (event) => {
event.preventDefault();
const taskName = input.value;
renderTodo(taskName);
input.value = '';
}
addTodoForm.addEventListener('submit',addTodo);

//делаем delete