// 1. We still use the same Promise-returning function
function fetchWeather() {
  return new Promise((resolve, reject) => {
    const isServerUp = true; 
    setTimeout(() => {
      if (isServerUp) {
        resolve("Sunny, 25°C ☀️");
      } else {
        reject("No signal from the weather station. ❌");
      }
    }, 2000);
  });
}

// 2. We create an 'async' function to handle the logic
async function showWeatherReport() {
  console.log("Bot: Checking the skies... please wait.");

  try {
    // 3. 'await' pauses here until the Promise resolves
    const result = await fetchWeather(); 
    
    // This only runs AFTER fetchWeather is done
    console.log("Result: " + result); 
    
  } catch (error) {
    // 4. If the Promise rejects, it jumps straight here
    console.log("Error: " + error);
    
  } finally {
    console.log("Bot: Task finished.");
  }
}

// 5. Run the async function
showWeatherReport();