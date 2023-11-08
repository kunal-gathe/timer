
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let showtime = document.getElementById("showtime");;

let msec = 10;
let sec = 0;
let min = 0;

let timeField = null;



start.addEventListener('click', ()=>{
    if(timeField !== null){
        clearInterval(timeField);
    }
    timeField = setInterval(setTimer, 10);
    
});

stop.addEventListener('click', ()=>{
    clearInterval(timeField)
})
reset.addEventListener('click', ()=>{
    showtime.textContent= `00 : 00 : 00`
    clearInterval(timeField)
    msec = sec = min =0;

})



function setTimer(){
    msec++;
    if(msec == 100){
        sec++
        msec =0;
    }
    if(sec == 60){
        min++;
        sec =0;
    }

    let ms = msec < 10 ? `0${msec}` : msec;
    let sc = sec < 10 ? `0${sec}` : sec;
    let mn = min < 10 ? `0${min}` : min;

    showtime.textContent = `${mn} : ${sc} : ${ms}`
}