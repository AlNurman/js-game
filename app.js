const board = document.querySelector('#board')
const SQUARE_NIMBER = 600
const colors = ['red', 'blue', 'yellow', 'purple', 'green', 'cyan', 'magenta', 'lightblue']
for (let i=0; i< SQUARE_NIMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    board.append(square)
    square.addEventListener('mouseover',()=>setColor(square))
    square.addEventListener('mouseleave',()=>removeColor(square))
}

function setColor(e){
    const color = getRandomColor()
    e.style.backgroundColor=color
    e.style.boxShadow=`0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(e){
    e.style.backgroundColor= '#1d1d1d'
    e.style.boxShadow=`0 0 2px ${'#1d1d1d'}`
}

function getRandomColor(){
    const index=Math.floor(Math.random()*colors.length)
    return colors[index]
}