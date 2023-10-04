let clock = document.getElementById('clock')

function showTime() {
    
    let date = new Date();
    let time = date.toLocaleTimeString().split(" ")[0];

    let hrs = time.split(":")[0]
    let mins = time.split(":")[1]
    let secs = time.split(":")[2]

    clock.innerText = `${hrs} : ${mins} : ${secs}`
}

showTime()

setInterval(showTime, 1000)
