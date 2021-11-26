const temperatureTools = require("./temperatureModule");
const distanceTools = require("./distanceModule");

const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

const kilometers = document.getElementById("kilometers");
const miles = document.getElementById("miles");

celsius.addEventListener("input", (c) => {
    fahrenheit.value = temperatureTools.celsiusToFahrenheit(Number(c.target.value));
    kelvin.value = temperatureTools.celsiusToKelvin(Number(c.target.value));
});

fahrenheit.addEventListener("input", (f) => {
    celsius.value = temperatureTools.fahrenheitToCelsius(Number(f.target.value));
    kelvin.value = temperatureTools.fahrenheitToKelvin(Number(f.target.value));
});

kelvin.addEventListener("input", (k) => {
    celsius.value = temperatureTools.kelvinToCelsius(Number(k.target.value));
    fahrenheit.value = temperatureTools.kelvinToFahrenheit(Number(k.target.value));
});

kilometers.addEventListener("input", (k) => {
    miles.value = distanceTools.kilometersToMiles(Number(k.target.value));
});

miles.addEventListener("input", (m) => {
    kilometers.value =distanceTools.milesToKilometers(Number(m.target.value));
});