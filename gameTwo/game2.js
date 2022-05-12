//буквы
let jobTitle = "Выполни задание на время";
let i = 0;
let speed = 100;

function headerLetters() {
    if (i < jobTitle.length) {
        document.querySelector('#jobTitle').textContent += jobTitle.charAt(i);
        i++;
        setTimeout(headerLetters, speed);
    }
}
headerLetters();

//таймер
const timer = 5;
    let amountTime = timer * 60;
    
    function calculateTime(){
        const timerGame = document.querySelector('#timerGame');
    
        let minutes = Math.floor(amountTime/60);
        let seconds = amountTime%60;
    
        if(seconds < 10){
            seconds = "0" + seconds;
        }
    
        timerGame.textContent = `${minutes} : ${seconds}`;
        amountTime--;
    
        if(amountTime < 0){
            stopTimer()
            amountTime = 0;
        }
        function stopTimer(){
            clearInterval(timerId);
            document.querySelector('#myAudio').play()
        }
    
    }
    
    let timerId = setInterval (calculateTime, 1000); 

//тест
const btnResult = document.querySelector('#btnResult');
btnResult.addEventListener("click", result);

function result(e) {
    e.preventDefault();

    let points = 0;
// правельные ответы
    const correctAnswer = document.querySelectorAll('span');
correctAnswer.forEach(item => {
    item.classList.add('answerTrue');
})

    if(document.querySelector('#answer1').checked){
        points++;
    }
    if(document.querySelector('#answer2').checked){
        points++;
    }
    if(document.querySelector('#answer3').checked){
        points++;
    }
    if(document.querySelector('#answer4').checked){
        points++;
    }
    if(document.querySelector('#answer5').checked){
        points++;
    }
    showResult.textContent = "Твой результат: " + points;
}


