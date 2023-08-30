const container = document.getElementById("container");

const todoId = prompt("pasame el Id que quieras ver");

fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
  .then((res) => res.json())
  .then((informacion) => {
    container.innerHTML = `
    <h1>${informacion.title}</h1>
    <p>userId: ${informacion.userId} completed: ${informacion.completed} </p>
     `;
  });
