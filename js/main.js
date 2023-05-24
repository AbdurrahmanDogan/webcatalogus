console.log('Main JS loaded');

fetch('https://reqbin.com/echo/get/json')
    .then(response => response.json())
    .then(json => console.log(JSON.stringify(json)))

let fetchtest = document.querySelector('.entertesttext');
fetchtest.textContent = `${name}`;