// Function to update the current date and time
function updateDateTime() {
  const now = new Date();

  // Format date as YYYY-MM-DD
  const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const formattedDate = now.toLocaleDateString(undefined, dateOptions);

  // Format time as HH:MM:SS
  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };
  const formattedTime = now.toLocaleTimeString(undefined, timeOptions);

  // Update the HTML elements
  document.getElementById('currentDate').textContent = formattedDate;
  document.getElementById('currentTime').textContent = formattedTime;
}

// Function to manually update the current time when button is clicked
function updateTime() {
  const now = new Date();

  // Format time as HH:MM:SS
  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };
  const formattedTime = now.toLocaleTimeString(undefined, timeOptions);

  // Update the HTML element
  document.getElementById('currentTime').textContent = formattedTime;
}

// Call updateDateTime every second to keep time updated
setInterval(updateDateTime, 1000);

// Initial call to set date and time when the page loads
updateDateTime();

// Function to determine star sign based on date of birth
function getStarSign(date) {
    const month = date.getMonth() + 1; // getMonth() returns 0-11
    const day = date.getDate();

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces";
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
}

// Function to display star sign based on user input
function showStarSign() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = new Date(document.getElementById('dob').value);
    
    const starSign = getStarSign(dob);
    const message = `Hi ${firstName}, your star sign is ${starSign}.`;
    
    document.getElementById('resultMessage').textContent = message;
}

