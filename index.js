let inputEl = document.getElementById("base-value-input")

let convertBtn = document.getElementById("convert-btn")

const resultContainer = document.getElementById("conversion-results");

const conversions = [
    {
        label: "Length (Meters/Feet)",
        unit1: "meters",
        unit2: "feet",
        factor: 3.281,
    },
    {
        label: "Volume (Liters/Gallons)",
        unit1: "liters",
        unit2: "gallons",
        factor: 0.264
    },
    {
        label: "Mass (Kilograms/Pounds)",
        unit1: "kilos",
        unit2: "pounds",
        factor: 2.204
    },
    {
        label: "Euros in Dollars",
        unit1: "euros",
        unit2: "dollars",
        factor: 1.090
    }
]

function createResultDivs() {
    const resultDivs = conversions.map(conversion => {
        return `<div class="section">
            <h3>${conversion.label}</h3>
            <p>
                <span class="base-value"></span> <span class="unit1"></span> = <span class="result1"></span> <span class="unit2"></span> |
                <span class="base-value"></span> <span class="unit2"></span> = <span class="result2"></span> <span class="unit1"></span>
            </p>
        </div>`
    }).join("");

    resultContainer.innerHTML = resultDivs;
}
createResultDivs();


convertBtn.addEventListener("click", function() {

    let dialogDiv = document.getElementById("add-conversion")
    
    dialogDiv.style.display = "block";

    let baseValue = inputEl.value;
    
    // destructoring
    [...resultContainer.getElementsByClassName("base-value")]
        .forEach(item => {
            item.innerHTML = baseValue
        });

    conversions.forEach((conversion, index) => {
        const result1 =  (baseValue * conversion.factor).toFixed(3);
        const result2 = (baseValue / conversion.factor).toFixed(3);
        const targetDiv = resultContainer.getElementsByClassName("section")[index];

        [...targetDiv.getElementsByClassName("unit1")]
            .forEach(item => item.innerHTML = conversion.unit1);

        [...targetDiv.getElementsByClassName("unit2")]
            .forEach(item => item.innerHTML = conversion.unit2);

        [...targetDiv.getElementsByClassName("result1")]
        .forEach(item => item.innerHTML = result1);
           
        [...targetDiv.getElementsByClassName("result2")]
            .forEach(item => item.innerHTML = result2);
    })

})
