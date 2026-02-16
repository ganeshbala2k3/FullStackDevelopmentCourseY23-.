// 1. We create a function that RETURNS a Promise object
function fetchWeather() {
  console.log("Bot: Checking the skies... please wait.");

  return new Promise((resolve, reject) => {
    const isServerUp = true; // Simulating if the connection works

    // 2. We use setTimeout to simulate a 2-second delay
    setTimeout(() => {
      if (isServerUp) {
        resolve("Sunny, 25°C ☀️"); // Success!
      } else {
        reject("No signal from the weather station. ❌"); // Failure!
      }
    }, 2000);
  });
}

// 3. We "consume" the promise
fetchWeather()
  .then((data) => {
    console.log("Result: " + data); // Runs if resolve() is called
  })
  .catch((error) => {
    console.log("Error: " + error); // Runs if reject() is called
  })
  .finally(() => {
    console.log("Bot: Task finished."); // Runs no matter what
  });