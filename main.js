/**
 * Main JavaScript file for Tadawena website
 */

/**
 * Smooth Scroll Navigation Class
 */
class SmoothScrollNavigation {
  constructor() {
    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    // Handle all navigation links (both desktop and mobile)
    document.addEventListener("click", (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (link) {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        this.scrollToSection(targetId);
      }
    });
  }

  scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      // Calculate offset to account for fixed header
      const headerHeight = 80; // Approximate header height
      const targetPosition = targetSection.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  }
}

class MobileMenu {
  constructor() {
    this.isOpen = false;
    this.menuButton = null;
    this.sideMenu = null;
    this.overlay = null;
    this.body = document.body;

    this.init();
  }

  init() {
    this.createElements();
    this.bindEvents();
  }

  createElements() {
    // Get the mobile menu button
    this.menuButton = document.querySelector(".mobile-menu-button");

    // Create overlay
    this.overlay = document.createElement("div");
    this.overlay.className =
      "menu-overlay fixed inset-0 bg-black bg-opacity-50 z-50 opacity-0 invisible transition-all duration-300 ease-in-out";
    this.body.appendChild(this.overlay);

    // Create side menu
    this.sideMenu = document.createElement("div");
    this.sideMenu.className =
      "side-menu fixed top-0 left-0 h-full w-4/5 bg-white z-50 transform -translate-x-full transition-transform duration-300 ease-in-out shadow-2xl";

    // Create menu content
    this.sideMenu.innerHTML = `
      <div class="flex flex-col h-full">
        <!-- Menu Header -->
        <div class="flex items-center justify-between p-6 border-b border-gray-200">
          <img class="h-10 w-auto" src="public/logo.png" alt="Tadawena" />
          <button class="close-menu-btn p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <!-- Menu Items -->
        <nav class="flex-1 px-6 py-6">
          <div class="space-y-4">
            <a href="#our-company" class="menu-item block py-3 px-4 text-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200">
              Our Company
            </a>
            <a href="#leaders" class="menu-item block py-3 px-4 text-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200">
              Meet Our Leaders
            </a>
            <a href="#products" class="menu-item block py-3 px-4 text-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200">
              Products
            </a>
            <a href="#news" class="menu-item block py-3 px-4 text-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200">
              Latest News
            </a>
            <a href="#factory" class="menu-item block py-3 px-4 text-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200">
              Factory
            </a>
            <a href="#contact" class="menu-item block py-3 px-4 text-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200">
              Contact Us
            </a>
          </div>
        </nav>
      </div>
    `;

    this.body.appendChild(this.sideMenu);
  }

  bindEvents() {
    // Menu button click
    if (this.menuButton) {
      this.menuButton.addEventListener("click", (e) => {
        e.preventDefault();
        this.toggleMenu();
      });
    }

    // Close button click
    const closeBtn = this.sideMenu.querySelector(".close-menu-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.closeMenu();
      });
    }

    // Overlay click
    this.overlay.addEventListener("click", () => {
      this.closeMenu();
    });

    // Menu item clicks
    const menuItems = this.sideMenu.querySelectorAll(".menu-item");
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        this.closeMenu();
      });
    });

    // Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) {
        this.closeMenu();
      }
    });

    // Handle window resize
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768 && this.isOpen) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    if (this.isOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu() {
    this.isOpen = true;

    // Prevent body scroll
    this.body.style.overflow = "hidden";

    // Show overlay
    this.overlay.classList.remove("invisible", "opacity-0");
    this.overlay.classList.add("visible", "opacity-100");

    // Show menu
    this.sideMenu.classList.remove("-translate-x-full");
    this.sideMenu.classList.add("translate-x-0");

    // Update button aria-expanded
    if (this.menuButton) {
      this.menuButton.setAttribute("aria-expanded", "true");
    }

    // Focus trap - focus on close button
    const closeBtn = this.sideMenu.querySelector(".close-menu-btn");
    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 300);
    }
  }

  closeMenu() {
    this.isOpen = false;

    // Restore body scroll
    this.body.style.overflow = "";

    // Hide overlay
    this.overlay.classList.remove("visible", "opacity-100");
    this.overlay.classList.add("invisible", "opacity-0");

    // Hide menu
    this.sideMenu.classList.remove("translate-x-0");
    this.sideMenu.classList.add("-translate-x-full");

    // Update button aria-expanded
    if (this.menuButton) {
      this.menuButton.setAttribute("aria-expanded", "false");
    }

    // Return focus to menu button
    if (this.menuButton) {
      setTimeout(() => this.menuButton.focus(), 300);
    }
  }
}

/**
 * Scroll to Top Button Class
 */
class ScrollToTopButton {
  constructor() {
    this.button = null;
    this.isVisible = false;
    this.scrollThreshold = 500; // Show button after scrolling 500px
    this.isScrolling = false;

    this.init();
  }

  init() {
    this.button = document.getElementById("scrollToTopBtn");

    if (this.button) {
      this.bindEvents();
    }
  }

  bindEvents() {
    // Throttled scroll event listener for better performance
    let ticking = false;

    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          this.handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });

    // Button click event
    this.button.addEventListener("click", (e) => {
      e.preventDefault();
      this.scrollToTop();
    });

    // Add keyboard support
    this.button.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.scrollToTop();
      }
    });
  }

  handleScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollY > this.scrollThreshold && !this.isVisible) {
      this.showButton();
    } else if (scrollY <= this.scrollThreshold && this.isVisible) {
      this.hideButton();
    }
  }

  showButton() {
    this.isVisible = true;
    this.button.classList.add("show");

    // Add pulse animation on first appearance
    this.button.classList.add("pulse");
    setTimeout(() => {
      this.button.classList.remove("pulse");
    }, 600);
  }

  hideButton() {
    this.isVisible = false;
    this.button.classList.remove("show");
  }

  scrollToTop() {
    // Prevent multiple rapid clicks
    if (this.isScrolling) return;

    this.isScrolling = true;

    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Reset scrolling flag after animation completes
    setTimeout(() => {
      this.isScrolling = false;
    }, 1000);
  }
}

/**
 * Hero Buttons Class - Handles scroll functionality for hero section buttons
 */
class HeroButtons {
  constructor() {
    this.wantServiceBtn = null;
    this.viewProductsBtn = null;
    this.init();
  }

  init() {
    this.wantServiceBtn = document.getElementById("wantServiceBtn");
    this.viewProductsBtn = document.getElementById("viewProductsBtn");

    if (this.wantServiceBtn && this.viewProductsBtn) {
      this.bindEvents();
    }
  }

  bindEvents() {
    // "Want a service" button - scroll to contact section
    this.wantServiceBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.scrollToSection("contact");
    });

    // "View Products" button - scroll to products section
    this.viewProductsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.scrollToSection("products");
    });
  }

  scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      // Calculate offset to account for fixed header
      const headerHeight = 80; // Approximate header height
      const targetPosition = targetSection.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  }
}

/**
 * Video Player Class
 */
class VideoPlayer {
  constructor() {
    this.video = null;
    this.playButton = null;
    this.playButtonOverlay = null;
    this.isPlaying = false;
    this.isIOS = this.detectIOS();

    this.init();
  }

  /**
   * Detect if the device is iOS (iPhone, iPad, iPod)
   */
  detectIOS() {
    return (
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    );
  }

  init() {
    this.video = document.getElementById("mainVideo");
    this.playButton = document.getElementById("playButton");
    this.playButtonOverlay = document.querySelector(".play-button-overlay");

    if (this.video && this.playButton && this.playButtonOverlay) {
      // Hide play button on iOS devices
      if (this.isIOS) {
        this.playButtonOverlay.style.display = "none";
      }

      this.bindEvents();
    }
  }

  bindEvents() {
    // Play button click
    this.playButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.togglePlay();
    });

    // Video click to toggle play/pause
    this.video.addEventListener("click", () => {
      this.togglePlay();
    });

    // Video ended event
    this.video.addEventListener("ended", () => {
      this.showPlayButton();
      this.isPlaying = false;
    });

    // Video pause event
    this.video.addEventListener("pause", () => {
      // Only show play button if video is actually paused (not during seeking)
      if (this.video.paused) {
        this.showPlayButton();
        this.isPlaying = false;
      }
    });

    // Video play event
    this.video.addEventListener("play", () => {
      this.hidePlayButton();
      this.isPlaying = true;
    });

    // Video playing event (when video actually starts playing)
    this.video.addEventListener("playing", () => {
      this.hidePlayButton();
      this.isPlaying = true;
    });

    // Video loading events
    this.video.addEventListener("loadstart", () => {
      if (this.video.paused) {
        this.showPlayButton();
      }
    });

    this.video.addEventListener("canplay", () => {
      if (this.video.paused) {
        this.showPlayButton();
      }
    });
  }

  togglePlay() {
    if (this.video.paused) {
      this.playVideo();
    } else {
      this.pauseVideo();
    }
  }

  playVideo() {
    this.video
      .play()
      .then(() => {
        this.hidePlayButton();
        this.isPlaying = true;
      })
      .catch((error) => {
        console.error("Error playing video:", error);
        this.showPlayButton();
      });
  }

  pauseVideo() {
    this.video.pause();
    this.showPlayButton();
    this.isPlaying = false;
  }

  showPlayButton() {
    if (this.playButtonOverlay) {
      this.playButtonOverlay.classList.remove("hidden");
    }
  }

  hidePlayButton() {
    if (this.playButtonOverlay) {
      this.playButtonOverlay.classList.add("hidden");
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Remove the old mobile menu functionality
  const oldMobileMenu = document.querySelector(".mobile-menu");
  if (oldMobileMenu) {
    oldMobileMenu.remove();
  }

  // Initialize smooth scroll navigation
  new SmoothScrollNavigation();

  // Initialize new mobile menu
  new MobileMenu();

  // Initialize hero buttons
  new HeroButtons();

  // Initialize video player
  new VideoPlayer();

  // Initialize scroll to top button
  new ScrollToTopButton();
});

// Additional utility functions
const utils = {
  // Smooth scroll to element
  scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  },

  // Debounce function for performance
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
};

// Export for potential module use
if (typeof module !== "undefined" && module.exports) {
  module.exports = { MobileMenu, VideoPlayer, utils };
}
