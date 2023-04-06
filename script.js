// Get the clock element
const clock = document.getElementById("clock");

// Function to update the clock
function updateClock() {
  // Get the current time
  const now = new Date();

  // Format the time
  let hours = now.getHours();
  const amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const time = `${hours}:${minutes}:${seconds} ${amPm}`;

  // Display the time in the clock element
  clock.textContent = time;
}

// Call the updateClock function once to initialize the clock
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
