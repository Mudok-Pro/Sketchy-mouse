function createGrid (size){
    const container = document.getElementById('container');
    container.innerHTML= '' ;
    for (let i = 0; i< size * size; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover' , () => {
            square.style.backgroundColor= 'black'; 
        });
        container.appendChild(square);
    }
}
document.getElementById('reset').addEventListener('click', () => {
    const size = prompt('Enter grid size (max 100):');
    if (size > 0 && size <= 100){
        createGrid(size);
    }else {
        alert('Please enter a valid size between 1 and 100 . ')
    }
});
createGrid(16); 