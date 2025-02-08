document.addEventListener('DOMContentLoaded', () => {
    function createGrid(size) {
        const container = document.getElementById('container');
        container.innerHTML = '';
        const squareSize = 100 /size ;
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${squareSize}%`
            square.style.height = `${squareSize}%`
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = getRandomColor();
            });

            square.addEventListener('mouseover', () => {
                let currentOpacity = parseFloat(else.target.style.opacity) || 0 ;
                if (currentOpacity <1) {
                    e.target.style.opacity = currentOpacity + 0.1 ;
                }
            })
            container.appendChild(square);
        }
    }
    function getRandomColor (){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`; 
    }

    document.getElementById('reset').addEventListener('click', () => {
        const size = prompt('Enter grid size (max 100):');
        if (size > 0 && size <= 100) {
            createGrid(size);
        } else {
            alert('Please enter a valid size between 1 and 100.');
        }
    });

    createGrid(16); 
});
