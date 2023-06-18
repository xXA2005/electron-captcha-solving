const fs = require('fs');
const input = document.getElementById('input');
const files = fs.readdirSync('./src/images/');
const img = document.getElementById('img');
const count = document.getElementById('count')
const remain = document.getElementById('remain')
let i = 0;

img.src = `./images/${files[i]}`
remain.innerHTML = files.length

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const inputValue = input.value;
      input.value = '';
  
      fs.renameSync(`./src/images/${files[i]}`,`./src/solved/${inputValue}.png`)
      i = i + 1
      img.src = `./images/${files[i]}`
      count.innerHTML = i
      remain.innerHTML = files.length-i
    }
});
