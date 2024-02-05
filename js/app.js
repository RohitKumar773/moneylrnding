const amount = document.getElementById('amount');
const intrest = document.getElementById('percentage');
const time = document.getElementById('time');
const calculateButton = document.querySelector('button');
let yearlyValue = document.getElementById('yearvalue');
let monthlyValue = document.getElementById('monthlyvalue');
let perDayValue = document.getElementById('perdayvalue');
let calculatedValue = document.getElementById('calculatedValue');
const result = document.querySelector('.result')


calculateButton.addEventListener('click', () => {
    let calculation = (amount.value * intrest.value) / 100;
    let monthly = (amount.value * intrest.value) / 100;
    let yearly = calculation * 12
    let perDay = Math.floor(((amount.value * intrest.value) / 100) / 30);
    let answer = (amount.value * intrest.value * time.value) / 100;

    calculatedValue.innerHTML = `Total :- &nbsp; ${answer}`
    yearlyValue.innerHTML = `Per Year :- &nbsp; ${yearly}`
    monthlyValue.innerHTML = `Per Month :- &nbsp; ${monthly}`
    perDayValue.innerHTML = `Per Day :- &nbsp; ${perDay}`

    result.style.display = 'block'
})