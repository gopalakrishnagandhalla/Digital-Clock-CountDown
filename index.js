const hours = document.getElementById("hour")
const minute =document.getElementById("minutes")
const second = document.getElementById("seconds")
const ampmTime = document.getElementById("ampm")

function timeClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    
    if (h > 12) {
        h = h-12;
    }

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    hours.innerText = h;
    minute.innerText = m;
    second.innerText = s;

    setTimeout(() =>{
        timeClock();
    }, 1000)
}

timeClock();