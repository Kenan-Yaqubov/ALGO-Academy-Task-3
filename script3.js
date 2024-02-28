let money = prompt("How much money do you want to get?");
let one = 0;
let ten = 0;
let fifty = 0;
let hundreed = 0;
let twoHundreed = 0;


for (let i = 0; i < Infinity; i++) {
    if (money - 200 >= 0) {
        money -= 200;
        twoHundreed += 1;
    } else {
        break
    }
}

for (let i = 0; i < Infinity; i++) {
    if (money - 100 >= 0) {
        money -= 100;
        hundreed += 1;
    } else {
        break
    }
}

for (let i = 0; i < Infinity; i++) {
    if (money - 50 >= 0) {
        money -= 50;
        fifty += 1;
    } else {
        break
    }
}

for (let i = 0; i < Infinity; i++) {
    if (money - 10 >= 0) {
        money -= 10;
        ten += 1;
    } else {
        break
    }
}
for (let i = 0; i < Infinity; i++) {
    if (money - 1 >= 0) {
        money -= 1;
        one += 1;
    } else {
        break
    }
}

alert(`${twoHundreed}x 200 ${hundreed}x 100 ${fifty}x 50 ${ten}x 10 ${one}x 1`)