function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function celsiusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return celsiusToFahrenheit(kelvinToCelsius(kelvin));
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9) + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
    return kelvinToCelsius(fahrenheitToKelvin(fahrenheit));
}

module.exports = {
    celsiusToKelvin,
    celsiusToFahrenheit,
    kelvinToCelsius,
    kelvinToFahrenheit,
    fahrenheitToKelvin,
    fahrenheitToCelsius
};