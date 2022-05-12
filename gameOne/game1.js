//массив картинок рандомно
const btnGame = document.querySelector('#btnGame');
const pictureGame = document.querySelector('#pictureGame');

console.log(btnGame);

const picture = [
    "без пары.jpg",
    "найди.jpg",
    "найди2.jpg",
    "найди3.jpg",
    "отличия.jpg",
    "тень.jpg",
]

btnGame.addEventListener("click", newPicture); 

function newPicture(){
    let randomPicture = picture[Math.floor(Math.random() * picture.length)]
    pictureGame.src = randomPicture

//таймер при нажатие кнопки для выбора картинки рандомно

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
        }
    
    }
    
    let timerId = setInterval (calculateTime, 1000); 
}




  
