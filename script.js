const toFahren =()=>{
    const celsiusInput = document.getElementById("celsius-input");
    const resultElement = document.getElementById("result");
    const fahrenheit = (celsiusInput.value * (9/5)) + 32
    resultElement.textContent = fahrenheit.toFixed(2) + " °F";
}
const toCelcius =()=>{
    const fahrenheitInput = document.getElementById("fahrenheit-input");
    const resultElement = document.getElementById("resultCelcius");
    const celcius = (fahrenheitInput.value - 32) * 5/9 
    resultElement.textContent = celcius.toFixed(2) + " °C" ;
}