const clock = document.getElementById("clock").children[2]

console.log(clock)

function rotate() {
   let angle = 90 + 360*(new Date()).getHours()/24 + (new Date()).getMinutes()/1440
   clock.setAttribute("transform", `rotate(${angle} 75 75)`)
   setTimeout(rotate, 1000)
}

rotate()