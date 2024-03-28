let num = 10;
const inctn = () => num++;
const incrs = num => num++;
const num1 = inctn();
const num2 = incrs(num1);

console.log(num1)
console.log(num2)