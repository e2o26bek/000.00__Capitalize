// FIRST HOMEWORK

function fix(a) {
    b = a.toString().split(".");
    c = b[1];
    d = b[0] + "." + c[0] + c[1];
    return Number(d);
}
console.log(fix(555.222));





// SECOND HOMEWORK

let a = prompt("Ismingizni kiriting:")
document.body.innerHTML = capitalize(a);
function capitalize(a) {
    let b = a.toString().toLowerCase().split(" ");
    let c = b[0];
    let d = b[1];
    let e = c[0].toUpperCase() + b[0].slice(1) + " " + d[0].toUpperCase() + b[1].slice(1);
    return e;
}

console.log(capitalize(a));