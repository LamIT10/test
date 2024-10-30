var sayHi = (name) => `Xin chào ${name}`;
console.log(sayHi("Lâm"));

var infor = {
    name: "Lâm",
    age: 20,
    c:{
        name: "Lâm2",
    }
}
// console.log(infor.name);
// var { name, age, c: { name } } = infor;
// console.log(name);
var arr = [1, 2, 3, 4, 5];
var [a, b, c, ...rest] = arr;
console.log(rest);

var sum = (first,second,...rest) => {
    var total = 0;
    rest.forEach(item => {
        total += item;
    })
    return total;
}

console.log(sum(1, 2, 3, 4, 5));