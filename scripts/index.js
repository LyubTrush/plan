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
  

  //2.создать элемент и добавить на страницу
  //2.1 создаем элемент - функция creatTodo
  const creatTodo = (taskName) => {
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
  }
  console.log(creatTodo);
//2.3 создаем функцию - добавляем в контейнер todosConteiner наш элемент li поэтому передаем в параметры append метод creatTodo
const renderTodo = (taskName) => {
    todosConteiner.append(creatTodo(taskName))
}
/*
//перебор элементов массива методом forEach
  todos.forEach((title) => {
    renderTodo(title);
  })
  */
// 2.4 перебор элементов методом Map и передадим в него нашу функцию колбек с переменной taskName , разворачиваем массив с помощью спред оператора ...
todosConteiner.append(...todos.map((taskName) => {
    return creatTodo(taskName);
}));

