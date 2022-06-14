const gridContainer = document.querySelector('.container');
const btn = document.querySelector('#btn');
let rows, cols;

btn.addEventListener('click', () => {
  while(gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
  rows = parseInt(prompt('A NUMBER!', 10));
  cols = rows;
  makeGrid(rows, cols);
});


function makeGrid(r, c) {
  let width = (100 / r) + '%';
  for(let i = 0; i < r * c; i++) {
    let div = document.createElement('div');
    div.classList.add('grid-item');
    div.style.width = width;
    gridContainer.appendChild(div);
  }  
}


const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(gridItem => {
  gridItem.addEventListener('mouseover', (e) => {
    gridItem.style.backgroundColor = 'lightblue';
  });
});

