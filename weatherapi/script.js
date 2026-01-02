async function getWeather() {
  const city = document.getElementById("city").value;
  const result = document.getElementById("result");

  if (!city) {
    result.innerText = "Enter a city name";
    return;
  }

  try {
    // 1. Get latitude & longitude
    const geoRes = await fetch(
      `https:// -api.open-meteo.com/v1/search?name=${city}`
    );
    const geoData = await geoRes.json();

    if (!geoData.results) {
      result.innerText = "City not found";
      return;
    }

    const { latitude, longitude } = geoData.results[0];

    // 2. Get weather
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherRes.json();

    const temp = weatherData.current_weather.temperature;
    const wind = weatherData.current_weather.windspeed;

    result.innerHTML = `
      <p>🌡 Temperature: ${temp}°C</p>
      <p>💨 Wind Speed: ${wind} km/h</p>
    `;

  } catch (error) {
    result.innerText = "Error fetching data";
  }
}
