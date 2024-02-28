let seconds = prompt("Enter the seconds:");
let hours = 0;
let minutes = 0;
let days = 0;

if(seconds / 60 > 0){
    minutes = Math.floor(seconds / 60);
    seconds %= 60
    
}

if(minutes / 60 > 0){
    hours = Math.floor(minutes / 60);
    minutes %= 60
}
if(hours / 60 > 0){
    days = Math.floor(hours / 24);
    hours %= 24;
}
let message = `${hours} hours ${minutes} minutes ${seconds} seconds`

if (days != 0) {
    message = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
}
alert(message)