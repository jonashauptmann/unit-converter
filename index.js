const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let inputEl = document.getElementById("base-value-input")

let convertBtn = document.getElementById("convert-btn")



convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `
    ${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet 
    | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meter
     `
    volumeEl.textContent = `
    ${baseValue} liter = ${(baseValue * literToGallon).toFixed(3)} gallon
    | ${baseValue} gallon = ${(baseValue / literToGallon).toFixed(3)} liter
    `
    massEl.textContent = `
    ${baseValue} kilo = ${(baseValue * kilogramToPound).toFixed(3)} pound
    | ${baseValue} pound = ${(baseValue / kilogramToPound).toFixed(3)} kilo
    `
})