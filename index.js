let year = prompt(`Ta jilee oruulna uu`);
let month = prompt(`Ta saraa oruulna uu`);
let day = prompt(`Ta odroo oruulna uu`);

let yearNumber = Number(year);
let monthNumber = Number(month);
let dayNumber = Number(day);

if (Number.isInteger(yearNumber)) {
}else {
    alert(`Ta jilee zov oruulna uu`);
}

if (Number.isInteger(monthNumber)) {

}else {
    alert(`Ta saraa zov oruulna uu`);
}
if (Number.isInteger(dayNumber)) {

}else {
    alert (`Ta odroo zov oruulna uu`)
}

if (year.length == 4) {
    month = month.length == 1 ? `0` + month : month;
    day = day.length == 1 ? `0` + day : day;
}

let result = year + `-` + month + `-` + day;
console.log(result);