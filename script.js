const searchButton = document.getElementById("search");
const input = document.getElementById("username");
const easy = document.querySelector(".easy");
const medium = document.querySelector(".medium");
const hard = document.querySelector(".hard");

const easyCircle = document.querySelector(".easy-circle");
const mediumCircle = document.querySelector(".medium-circle");
const hardCircle = document.querySelector(".hard-circle");

const overallRank = document.getElementById("overall-rank");


searchButton.addEventListener("click", () => {
  const username = input.value.trim();

  if (!username) return alert("Please enter a username.");
  if (!isValidUsername(username)) return alert("Invalid username.");

  fetchUserDetails(username);
});

function isValidUsername(username) {
  const regex = /^[a-zA-Z0-9_-]{3,20}$/;
  return regex.test(username);
}

async function fetchUserDetails(username) {
  const url = `https://leetcode-stats-api.herokuapp.com/${username}`;

  try {
    searchButton.textContent = "Searching...";
    searchButton.disabled = true;

    const response = await fetch(url);
    const leet_data = await response.json();

    if (leet_data.status !== "success") throw new Error("User not found.");

    const totalEasy = leet_data.totalEasy || 1;
    const totalMedium = leet_data.totalMedium || 1;
    const totalHard = leet_data.totalHard || 1;

    const easySolved = leet_data.easySolved || 0;
    const mediumSolved = leet_data.mediumSolved || 0;
    const hardSolved = leet_data.hardSolved || 0;

    easy.textContent = `${easySolved}/${totalEasy}`;
    medium.textContent = `${mediumSolved}/${totalMedium}`;
    hard.textContent = `${hardSolved}/${totalHard}`;

    easyCircle.style.setProperty('--percent', `${(easySolved / totalEasy) * 100}%`);
    mediumCircle.style.setProperty('--percent', `${(mediumSolved / totalMedium) * 100}%`);
    hardCircle.style.setProperty('--percent', `${(hardSolved / totalHard) * 100}%`);


    overallRank.textContent = leet_data.ranking || '--';

  } catch (error) {
    console.error(error);
    alert("Error fetching data.");
  } finally {
    searchButton.textContent = "Search";
    searchButton.disabled = false;
  }
}