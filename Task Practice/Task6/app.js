// Function to print the multiplication table of a number up to 10
let namata = (num) => {
  for (let i = 1; i <= 10; i++) {
    console.log(num + "*" + i + "=" + num * i);
  }
};

let num = 5;
namata(num);
