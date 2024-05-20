const roundTo = function(n, step){

    let reminder = (n%10);
    //console.log(reminder);

    return ((n-reminder) +  ((reminder < step/2) ? 0 : step))
}

console.log(roundTo(59, 10)); // 60

