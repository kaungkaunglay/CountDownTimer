
    var second_counter = 0 ;
    var minute_counter  = 0 ;
    var hour_counter = 0 ;
    var day_counter = 0 ;
    setInterval(incrementSecond, 1000);
    function incrementSecond(){
    second_counter  = second_counter + 1;
    document.getElementById("seconds").innerText = second_counter;
    if(second_counter > 59){
    minute_counter += 1;
    second_counter = 0;
    document.getElementById("minutes").innerText = minute_counter;
}
    if(minute_counter > 59){
    hour_counter += 1;
    minute_counter = 0;
    document.getElementById("hours").innerText = hour_counter;
}
    if(hour_counter > 23){
    day_counter += 1;
    hour_counter = 0;
    document.getElementById("days").innerText = day_counter;
}
}

