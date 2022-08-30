// 1

const timeStamp = Date.now();

function wasteTime() {
  for (let i = 0; i <= 10000000; i++) {
    const sum = (5 * 95) / 12;
  }
  const newTimeStamp = Date.now();

  return newTimeStamp - timeStamp;
}

const wasteTimeArrow = () => {
  for (let i = 0; i <= 10000000; i++) {
    const sum = (5 * 95) / 12;
  }
  const newTimeStamp = Date.now();

  return newTimeStamp - timeStamp;
};

console.log(wasteTime());
console.log(wasteTimeArrow());

// 2

function calculator(num1, operator = "+", num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
}

const calculatorArrow = (num1, operator = "+", num2) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
};

console.log(calculator(2, "*", 3));
console.log(calculatorArrow(2, undefined, 3));

// 3

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const weekDay = weekDays[new Date().getDay()];

(function greetingFn() {
  console.log(`Hello, Today is ${weekDay}!`);
})();
