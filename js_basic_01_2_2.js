console.log(0 == '0'); // true
console.log(0 === '0'); // false

console.log(0 == false); // true . 0을 false라는 boolean값과 비교할때
console.log(0 === false); // false . 0을 false라는 boolean값과 비교할때

x = 1;
y = 2;

console.log(x > y); //false

console.log(y++); //해당 줄의 코드가 실행되고 나서 y값이 1 증가하므로 출력되는 코드가 실행될때는 그대로인 2가 출력되지만
console.log(y); //이후의 y값은 해당 시점에서 3이 출력 된다
console.log(++y); //해당 줄의 코드가 실행되기 전에 y값이 1 증가하므로, 현재 3인 y값이 1 증가하여 4가 출력된다.
console.log(y); //이후의 y값은 해당 시점에서 4가 출력 된다