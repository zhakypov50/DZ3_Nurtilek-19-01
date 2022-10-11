//задача
let a;
if (a > 0) {
    let ggg = function() {
        console.log('!');
    }
    console.log(ggg);}
else {
    let ggg = function() {
        console.log('!!');
    }
    console.log(ggg);
}

//массивы
let massive = [];
for (let i = 0; i < 10; i++) {
    massive[i] = 'x';
}
console.log(massive);

//замыкание
function zam() {
    let i = 1;
    return function() {return i++};
}
let func = zam();
console.log(func());
console.log(func());
console.log(func());
console.log(func());