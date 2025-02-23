let numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 102, 103];
let sum = 0;

for (let i = 0; i < numbers.length; i+=2)
{
    sum+=numbers[i];
}
console.log(sum);