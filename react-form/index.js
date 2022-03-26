function sayHello1() {
  console.log("Hello 1");
}
function sayHello2() {
  console.log("Hello 2");
}
function sayHello3() {
  console.log("Hello 3");
}
function sayHello4() {
  console.log("Hello 4");
}

const app = () => {
  console.log(this);
};

sayHello4();
sayHello1();
sayHello3();
sayHello2();
app();
