// Without DEBOUNCING: Everytime a character is typed, API is called 1 time

// let input = document.querySelector('#inputBox');
// let output = document.querySelector('#paragraph');
// let resetBtn = document.querySelector('#resetbtn');

// let count = 0;

// const handleChange = () => { // when the input is changed, count plus 1
//   count += 1;
//   output.innerHTML = `API is called ${count} times`;
// };

// input.addEventListener("input", handleChange);

// // reset
// resetBtn.addEventListener('click', () => {
//   count = 0;
//   input.value = '';
//   output.innerHTML = `API is called ${count} times`
// })

// With DEBOUNCING
let input = document.querySelector('#inputBox');
let output = document.querySelector('#paragraph');
let resetBtn = document.querySelector('#resetbtn');

let count = 0;

function debounce(fn, delay) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(), delay);
  };
}

const handleChange = debounce(() => {
  output.innerHTML = `API is called ${++count} times`;
}, 1000);

input.addEventListener('input', handleChange);

// reset
resetBtn.addEventListener('click', () => {
  count = 0;
  input.value = '';
  output.innerHTML = `API is called ${count} times`
})