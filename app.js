const startBtn = document.querySelector('#start');

const screens = document.querySelectorAll('.screen');

const timeList = document.querySelector('#time-list');

const timeEl = document.querySelector('#time');

let time = 11;

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
screens[0].classList.add('up');
})

timeList.addEventListener('click' , event =>
{
    if(event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }

})

//DDEBUG 
startGame();

function startGame(){
    setInterval(decreaseTime , 1000);
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
    
}
