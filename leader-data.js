const leadersData = {
  1: {
    id: 1,
    name: "Dr. Mohamed Elmetwally",
    title: "Chief Sales & Marketing Officer",
    image: "public/leader-1.jpg",
    heading:
      "With over 20 years of experience working in large corporations like Sanofi, Apex and IDI pharmaceutical companies, he held several strategic positions as:",
    achievements: [
      "Sales and Marketing Director at Sanofi Kurdistan where he successfully lead both teams to increase the region’s revenue by 50% compared to their last year.",
      "District Supervisor at Apex where he launched products that are still best-sellers until today!",
    ],
    mission:
      "Our mission goes beyond products, we dream of a future where every Egyptian home has access to trusted supplements",
    facebook: "https://www.facebook.com/profile.php?id=100027919787513",
  },
  2: {
    id: 2,
    name: "Dr. Mohamed Elsadaany",
    title: "Chief operational Officer",
    heading: "",
    image: "public/leader-2.jpg",
    achievements: [
      "Responsible for overseeing day-to-day operations, the COO ensures seamless coordination between regulatory affairs, production, quality assurance, and business development.",
      "With a deep understanding of pharmaceutical regulations and manufacturing standards, the COO leads Tadawena’s mission of delivering high-quality, scientifically validated supplements to the market. ",
    ],
    mission:
      "Our success at Tadawena comes from the dedication of our people. By aligning around a shared vision, and working with integrity",
    facebook: "https://www.facebook.com/SAADANY.923519",
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

    // Update leader heading
    const HeadingElement = document.querySelector(".heading");
    if (HeadingElement) {
      HeadingElement.textContent = leader.heading;
    }

    // Update leader quote
    const leaderQuoteElement = document.querySelector(".leader-quote");
    if (leaderQuoteElement) {
      leaderQuoteElement.textContent = leader.mission;
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

    // Update social media links
    updateSocialLinks(leader);

    // Show main content after populating data
    showMainContent();
  }, 500); // 500ms loading delay for better UX
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", populateLeaderInfo);

// Function to update social media links
function updateSocialLinks(leader) {
  // Update Facebook link
  const facebookLink = document.querySelector(".facebook-link");
  if (facebookLink && leader.facebook) {
    facebookLink.href = leader.facebook;
    facebookLink.target = "_blank"; // Open in new tab
    facebookLink.rel = "noopener noreferrer"; // Security best practice
  }
}
