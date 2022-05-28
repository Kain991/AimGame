const startBtn = document.querySelector('#start');

const screens = document.querySelectorAll('.screen');

const timeList = document.querySelector('#time-list');

const timeEl = document.querySelector('#time');

const board = document.querySelector('#board');

const colors = ['#242F9B' , '#646FD4' , '#9BA3EB' , '#DBDFFD' ]
let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
screens[0].classList.add('up');
})

function getRandomColor(){
    const index = Math.floor(Math.random()*colors.length);
    return colors[index];
}


timeList.addEventListener('click' , event =>
{
    if(event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }

})

board.addEventListener('click' , event =>{
    if(event.target.classList.contains('circle')){
        score++;
        event.target.remove();
        createRandomCircle();
    }
} )



function startGame(){
    setInterval(decreaseTime , 1000);
    createRandomCircle();
    timeEl.innerHTML = `00:${time}`;
}

function decreaseTime(){
    if(time === 0){
        finishGame();
    }
    else{
        let current = --time;
        setTime(current);
    }
    
}

function setTime(value){
    if(value < 10){
        timeEl.innerHTML = `00:0${value}`
    }
    else {
        timeEl.innerHTML = `00:${value}`;
    }
}

function finishGame(){
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1> Ваш счет :<span class="primary"> ${score} </span></h1>`;
}

function createRandomCircle(){
    const circle = document.createElement('div');
    const size = getRandomNumber(20 , 80);
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0 , width-size);
    const y = getRandomNumber(0 , height -size);

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.background = `${getRandomColor()}`;

    board.append(circle)

}

function getRandomNumber(max , min){
    return Math.round( Math.random() * ( max - min ) + min );
}