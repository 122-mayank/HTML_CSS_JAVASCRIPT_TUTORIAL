document.addEventListener("DOMContentLoaded", function () {

  const searchButton = document.getElementById("search_btn");
  const usernameInput = document.getElementById("user-input");

  const easyProgress = document.querySelector(".easy_progress");
  const mediumProgress = document.querySelector(".medium_progress");
  const hardProgress = document.querySelector(".hard_progress");

  const easyLevel = document.getElementById("easy-level");
  const mediumLevel = document.getElementById("medium-level");
  const hardLevel = document.getElementById("hard-level");

  const statsCard = document.querySelector(".stats_card");

  function validateUsername(username) {
    if (username.trim() === "") {
      alert("Username should not be empty");
      return false;
    }
    const regex = /^[a-zA-Z0-9_-]{1,15}$/;
    if (!regex.test(username)) {
      alert("Invalid Username");
      return false;
    }
    return true;
  }

  async function fetchUserDetails(username) {
    try {
      searchButton.textContent = "Searching...";
      searchButton.disabled = true;

      const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
      const data = await response.json();
      console.log(data);

      if (!data || data.status !== "success") {
        statsCard.innerHTML = `<p>No data found</p>`;
        return;
      }

      const { easySolved, mediumSolved, hardSolved, totalSolved, ranking } = data;

      easyLevel.innerHTML = `Easy<br>${easySolved}`;
      mediumLevel.innerHTML = `Medium<br>${mediumSolved}`;
      hardLevel.innerHTML = `Hard<br>${hardSolved}`;

      const easyPercent = totalSolved ? (easySolved / totalSolved) * 100 : 0;
      const mediumPercent = totalSolved ? (mediumSolved / totalSolved) * 100 : 0;
      const hardPercent = totalSolved ? (hardSolved / totalSolved) * 100 : 0;

      // Set CSS background dynamically
      easyProgress.parentElement.style.background = `conic-gradient(#299f5d ${easyPercent}%, #283a2e ${easyPercent}% 100%)`;
      mediumProgress.parentElement.style.background = `conic-gradient(#299f5d ${mediumPercent}%, #283a2e ${mediumPercent}% 100%)`;
      hardProgress.parentElement.style.background = `conic-gradient(#299f5d ${hardPercent}%, #283a2e ${hardPercent}% 100%)`;

      statsCard.innerHTML = `
        <div style="padding:10px;">
          <h2>${username}</h2>
          <br>
          <p>Total Solved: ${totalSolved}</p>
          <br>
          <p>Ranking: ${ranking}</p>
        </div>
      `;

    } catch (error) {
      console.error(error);
      statsCard.innerHTML = `<p>Something went wrong!</p>`;
    } finally {
      searchButton.textContent = "Search";
      searchButton.disabled = false;
    }
  }

  searchButton.addEventListener("click", function () {
    const username = usernameInput.value.trim();
    if (validateUsername(username)) {
      fetchUserDetails(username);
    }
  });

});
