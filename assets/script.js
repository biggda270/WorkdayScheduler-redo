$(document).ready(function() {
    console.log("hello")
    const currentDay = moment().format("MMM Do YY");
    
    const now=document.getElementById("currentDay")
    now.textContent = currentDay
    const currentHour = moment().format("H"); 
    console.log(currentHour);

    const hourBlocks = document.getElementsByClassName("hour")
    console.log(hourBlocks)

});


