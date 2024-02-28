let seconds = prompt("Enter the seconds:");
let hours = 0;
let minutes = 0;
let days = 0;

for (let i = 0; i < Infinity; i++) {
    if (seconds - 60 >= 0) {
        seconds -= 60;
        minutes += 1;
    } else {
        break
    }
}

for (let i = 0; i < Infinity; i++) {
    if (minutes - 60 >= 0) {
        minutes -= 60;
        hours += 1;
    } else {
        break
    }
}

for (let i = 0; i < Infinity; i++) {
    if (hours - 24 >= 0) {
        hours -= 24;
        days += 1;
    } else {
        break
    }
}

let message = `${hours} hours ${minutes} minutes ${seconds} seconds`

if (days != 0) {
    message = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
}
alert(message)