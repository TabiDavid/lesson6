
function windChill() {
    let windSpeed = document.getElementById('Wspeed').innerHTML;
    windSpeed = parseFloat(windSpeed);
    let temperature = document.getElementById('temperature').innerHTML;
    temperature = parseFloat(temperature);
    if (temperature <= 50 && windSpeed >= 3) {
        let windspeedExponent = Math.pow(windSpeed, 0.16);
        let windChill = (35.74 + 0.6215 * temperature - 35.75 * windspeedExponent + 0.4275 * temperature * windspeedExponent).toFixed(0);
        return windChill;
    } else {
        return temperature;
    }

}

document.getElementById("Windchill").innerHTML = windChill() + "&#xb0;F";