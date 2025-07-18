const leadersData = {
  1: {
    id: 1,
    name: "Dr. Mohamed Elmetwally",
    title: "General Manager",
    image: "public/leader-1.jpg",

    achievements: [
      "Sales and Marketing Director at Sanofi Kurdistan where he successfully lead both teams to increase the region's revenue by 50% compared to their last year.",
      "District Supervisor at Apex where he launched products that are still best-sellers until today!",
    ],
  },
  2: {
    id: 2,
    name: "Dr. Mohamed Elsadaany",
    title: "General Manager",
    image: "public/leader-2.jpg",
    achievements: [
      "Sales and Marketing Director at Sanofi Kurdistan where he successfully lead both teams to increase the region’s revenue by 50% compared to their last year.",
      "District Supervisor at Apex where he launched products that are still best-sellers until today!",
    ],
  },
  3: {
    id: 3,
    name: "Dr. Ahmed Elmongy",
    title: "Area Manager",
    image: "public/leader-3.jpg",
    achievements: [
      "Sales and Marketing Director at Sanofi Kurdistan where he successfully lead both teams to increase the region’s revenue by 50% compared to their last year.",
      "District Supervisor at Apex where he launched products that are still best-sellers until today!",
    ],
  },
};

// Function to get leader data by ID
function getLeaderById(id) {
  return leadersData[id] || null;
}

// Function to get URL parameter
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Function to show loading state
function showLoadingState() {
  document.getElementById("loadingState").style.display = "flex";
  document.getElementById("errorState").style.display = "none";
  document.getElementById("mainContent").style.display = "none";
}

// Function to show error state
function showErrorState() {
  document.getElementById("loadingState").style.display = "none";
  document.getElementById("errorState").style.display = "block";
  document.getElementById("mainContent").style.display = "none";
}

// Function to show main content
function showMainContent() {
  document.getElementById("loadingState").style.display = "none";
  document.getElementById("errorState").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
}

// Function to populate leader information on the page
function populateLeaderInfo() {
  // Show loading state initially
  showLoadingState();

  // Simulate loading delay for better UX
  setTimeout(() => {
    const leaderId = getUrlParameter("id") || "1"; // Default to leader 1 if no ID provided
    const leader = getLeaderById(parseInt(leaderId));

    if (!leader) {
      console.error("Leader not found for ID:", leaderId);
      showErrorState();
      return;
    }

    // Update page title
    document.title = `${leader.name} - Tadawena`;

    // Update leader name
    const nameElement = document.querySelector(".leader-name");
    if (nameElement) {
      nameElement.textContent = leader.name;
    }

    // Update leader title
    const titleElement = document.querySelector(".leader-title");
    if (titleElement) {
      titleElement.textContent = leader.title;
    }

    // Update leader image
    const imageElement = document.querySelector(".leader-image");
    if (imageElement) {
      imageElement.src = leader.image;
      imageElement.alt = leader.name;
    }

    // Update achievements list
    const achievementsList = document.querySelector(".achievements-list");
    if (achievementsList && leader.achievements) {
      achievementsList.innerHTML = "";
      leader.achievements.forEach((achievement) => {
        const li = document.createElement("li");
        li.className = "flex items-start";
        li.innerHTML = `
        <div class="w-2 h-2 bg-primary-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
        <p class="text-lg text-neutral-800 leading-relaxed">${achievement}</p>
      `;
        achievementsList.appendChild(li);
      });
    }

    // Update experience section
    const experienceElement = document.querySelector(".leader-experience");
    if (experienceElement) {
      experienceElement.textContent = leader.experience;
    }

    // Update vision section
    const visionElement = document.querySelector(".leader-vision");
    if (visionElement) {
      visionElement.textContent = leader.vision;
    }

    // Show main content after populating data
    showMainContent();
  }, 500); // 500ms loading delay for better UX
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", populateLeaderInfo);
