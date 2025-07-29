// News articles data
const newsArticles = {
  1: {
    nav: `    <!-- Breadcrumb Navigation -->
    <nav class="bg-background-100">
      <div class="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-14">
        <div class="flex items-center space-x-2 text-neutral-800">
          <a
            href="/"
            class="hover:text-primary-600 transition-colors duration-200 text-base sm:text-lg"
            >Home</a
          >
          <svg
            class="w-4 h-4 text-neutral-800"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="text-primary-600 font-medium text-base sm:text-lg"
            >Latest News</span
          >
        </div>
      </div>
    </nav>`,
    title:
      "Fresh Perspectives, Bright Futures: Tadawena Hosts Summer Interns 2025",
    image: "public/news-5.jpg",
    content: `
      <p class="text-lg sm:text-xl text-[#333232] leading-relaxed mb-6">
        This summer,
        <span class="text-primary-600 font-medium">Tadawena</span>
        welcomed a talented group of interns eager to learn and grow.
        Through hands-on experiences, mentorship, and real-world projects,
        they gained valuable insights into the pharmaceutical and
        nutrition supplement industry.
      </p>
      <p class="text-lg sm:text-xl text-[#333232] leading-relaxed mb-8">
        This year's internship opportunities are categorized by location,
        providing options both across all Egyptian governorates and
        specifically near Qaliub.
      </p>

      <!-- Summer Internship Image -->
      <div class="py-6">
        <div
          class="aspect-video w-full max-w-2xl mx-auto overflow-hidden rounded-2xl sm:rounded-[48px]"
        >
          <img
            src="public/news-5.jpg"
            alt="Summer Internship 2025 - Tadawena Hiring Positions"
            class="w-full h-full object-contain"
          />
        </div>
      </div>

      <!-- Available Internship Positions Section -->
      <div class="mt-12 mb-8">
        <h2
          class="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 font-ovo"
        >
          Available Internship Positions:
        </h2>

        <!-- All Governorates Section -->
        <div class="mb-8">
          <h3
            class="text-xl sm:text-2xl font-bold text-primary-600 mb-6 font-ovo"
          >
            All Governorates:
          </h3>

          <div class="space-y-6">
            <!-- SO-Medical Representative Intern -->
            <div class="p-6 rounded-lg">
              <h4 class="text-lg  font-semibold text-[#333232] sm:text-xl mb-3">
                • SO-Medical Representative Intern
              </h4>
              <p class="text-base sm:text-lg text-[#333232] font-light leading-relaxed">
                This role offers aspiring medical representatives a deep
                dive into pharmaceutical sales, customer interaction, and
                product education, providing real-world experience on the
                ground.
              </p>
            </div>
          </div>
        </div>

        <!-- Nearby Qaliub Section -->
        <div class="mb-8">
          <h3
            class="text-xl sm:text-2xl font-bold text-primary-600 mb-6 font-ovo"
          >
            Nearby Qaliub:
          </h3>

          <div class="space-y-6">
            <!-- SO-Accounting Intern -->
            <div class="p-6 rounded-lg">
              <h4 class="text-lg  font-semibold text-[#333232] sm:text-xl mb-3">
                • SO-Accounting Intern
              </h4>
              <p class="text-base sm:text-lg text-[#333232] font-light leading-relaxed">
                Perfect for finance or commerce students, this role
                involves working with the internal finance department to
                assist in accounting procedures and gain exposure to
                pharmaceutical industry standards.
              </p>
            </div>

            <!-- MF-Supply Chain Intern -->
            <div class="p-6 rounded-lg">
              <h4 class="text-lg  font-semibold text-[#333232] sm:text-xl mb-3">
                • MF-Supply Chain Intern
              </h4>
              <p class="text-base sm:text-lg text-[#333232] font-light leading-relaxed">
                Interns will assist in managing the flow of materials and
                products, learning about procurement, logistics, and the
                coordination needed to maintain an efficient supply chain
                system.
              </p>
            </div>

            <!-- MF-QA (Quality Assurance) Intern -->
            <div class="p-6 rounded-lg">
              <h4 class="text-lg  font-semibold text-[#333232] sm:text-xl mb-3">
                • MF-QA (Quality Assurance) Intern
              </h4>
              <p class="text-base sm:text-lg text-[#333232] font-light leading-relaxed">
                Ideal for students in pharmacy or science fields, this
                position focuses on maintaining product quality,
                regulatory compliance, and assisting in quality control
                processes within the manufacturing facility.
              </p>
            </div>
          </div>
        </div>

        <!-- Why Apply Section -->
        <div class="mt-12 mb-8">
          <h3
            class="text-xl sm:text-2xl font-bold text-gray-900 mb-6 font-ovo"
          >
            Why Apply?
          </h3>
          <p class="text-lg sm:text-xl text-[#333232] leading-relaxed mb-6">
            Tadawena's internship program is designed to provide students
            with a comprehensive introduction to the pharmaceutical
            industry. Interns will benefit from:
          </p>

          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <div
                class="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"
              ></div>
              <p class="text-lg sm:text-xl text-[#333232]">
                Practical, industry-relevant experience
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <div
                class="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"
              ></div>
              <p class="text-lg sm:text-xl text-[#333232]">
                Mentorship from professionals
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <div
                class="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"
              ></div>
              <p class="text-lg sm:text-xl text-[#333232]">
                Exposure to manufacturing, sales, and corporate operations
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <div
                class="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"
              ></div>
              <p class="text-lg sm:text-xl text-[#333232]">
                Potential opportunities for future employment
              </p>
            </div>
          </div>
        </div>

        <!-- How to Apply Section -->
        <div class="mt-12 mb-8">
          <h3
            class="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600 mb-6 font-ovo text-center"
          >
            How to Apply?
          </h3>
          <div class="flex justify-center">
            <a
              href="#"
              class="inline-block px-5 w-full sm:w-auto text-center sm:!px-56 bg-transparent border border-primary-600 text-primary-600 hover:text-[#B89B1B] hover:border-[#B89B1B] font-medium py-3 rounded transition-colors duration-200 text-lg"
            >
              Fill out this form
            </a>
          </div>
        </div>
      </div>
    `,
  },
  2: {
    title:
      "Faith, Food, and Fulfillment: Tadawena's Ramadan Iftar & Employee Awards Night",
    image: "public/news-6.jpg",
    content: `
      <p class="text-lg sm:text-xl text-[#333232] leading-relaxed mb-6">
        <span class="text-primary-600 font-medium">Tadawena</span> celebrated the spirit of Ramadan with a heartfelt Iftar gathering, bringing our team together in faith and gratitude. The evening honored our employees' dedication with special awards, recognizing their hard work and achievements. It was a night filled with good energy.
      </p>

          <div class="relative py-12">
            <div
              class="video-container relative rounded-lg max-w-2xl mx-auto overflow-hidden shadow-sm"
            >
              <!-- Video Element -->
              <video
                id="mainVideo"
                class="w-full h-auto"
                controls
                poster="public/video-image.png"
                preload="metadata"
              >
                <source
                  src="/public/slideshow.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <!-- Custom Play Button Overlay -->
              <div
                class="play-button-overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-5 transition-opacity duration-300"
              >
                <button
                  id="playButton"
                  class="play-button group relative flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg"
                  aria-label="Play video"
                >
                  <!-- Play Icon -->
                  <svg
                    class="w-12 h-12 text-primary-600 ml-1"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.25"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

      <!-- A Night of Togetherness Section -->
      <div class="mt-12 mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-primary-600 mb-6 font-ovo">
          A Night of Togetherness
        </h2>
        <p class="text-lg sm:text-xl text-[#333232] leading-relaxed font-light mb-6">
          Held during the holy month of Ramadan, the Iftar was more than just a shared meal. It was a reflection of the company's values—faith in purpose, respect for people, and appreciation for effort. The ambiance was filled with warmth and joy as colleagues broke their fast together and bonded over shared experiences and aspirations.
        </p>
      </div>

      <!-- Celebrating Excellence Section -->
      <div class="mt-12 mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-primary-600 mb-6 font-ovo">
          Celebrating Excellence
        </h2>
        <p class="text-lg sm:text-xl text-[#333232] leading-relaxed font-light mb-6">
          A highlight of the evening was the Employee Awards Ceremony, where Tadawena recognized high-performing individuals who went above and beyond in their roles. In a gesture of sincere appreciation, top achievers were rewarded with half a pound of gold—a prestigious and symbolic token reflecting the company’s belief in rewarding excellence with generosity.
        </p>
        <p class="text-lg sm:text-xl text-[#333232] leading-relaxed font-light mb-6">
          From operational teams to support departments, the awardees represented Tadawena’s commitment to quality, innovation, and continuous improvement. Their dedication contributed significantly to the company's growth and reputation in the pharmaceutical industry.
        </p>
      </div>

      <!-- Faith. Food. Fulfillment Section -->
      <div class="mt-12 mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-primary-900 mb-6 text-center">
          Faith. Food. Fulfillment.
        </h2>
        <div class="bg-gray-50 border-l-4 border-[#DDBF38] p-6 my-8">
          <p class="text-lg sm:text-xl text-[#333232] leading-relaxed italic">
            This year's Ramadan Iftar at Tadawena wasn't just an event—it was a reminder that when people come together with purpose and appreciation, they create something truly meaningful.
          </p>
        </div>
      </div>
    `,
  },
  3: {
    title:
      "Inside Tadawena: A Special Tour of Our Nutritional Supplement Factory",
    date: "July 12, 2024",
    image: "public/news-4.jpg",
    content: `
      <p class="text-lg sm:text-xl text-[#333232] leading-relaxed mb-6">
        Step inside <span class="text-primary-600 font-medium">Tadawena's</span> state-of-the-art factory and discover how our high-quality nutritional supplements come to life. From advanced manufacturing processes to rigorous quality control and expert formulation, this exclusive tour reveals our commitment to excellence.
      </p>

      <!-- Factory Tour Image -->
      <div class="py-6">
        <div
          class="aspect-video w-full max-w-2xl mx-auto overflow-hidden rounded-2xl sm:rounded-[48px]"
        >
          <img
            src="public/news-4.jpg"
            alt="Inside Tadawena's Nutritional Supplement Factory"
            class="w-full h-full object-contain"
          />
        </div>
      </div>

      <!-- Manufacturing Excellence Section -->
      <div class="mt-12 mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-primary-600 mb-6 font-ovo">
          Manufacturing Excellence
        </h2>
        <p class="text-lg sm:text-xl text-[#333232] leading-relaxed mb-6">
          Our factory represents the pinnacle of pharmaceutical manufacturing technology. Every step of our production process is carefully monitored and controlled to ensure that each supplement meets the highest standards of quality, purity, and effectiveness.
        </p>
        <p class="text-lg sm:text-xl text-[#333232] leading-relaxed mb-6">
          From raw material sourcing to final packaging, our facility operates under strict Good Manufacturing Practice (GMP) guidelines, ensuring that every product that leaves our factory is safe, effective, and reliable.
        </p>
      </div>

      <!-- Quality Control Section -->
      <div class="mt-12 mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-primary-600 mb-6 font-ovo">
          Rigorous Quality Control
        </h2>
        <p class="text-lg sm:text-xl text-[#333232] leading-relaxed mb-6">
          Quality is at the heart of everything we do. Our dedicated quality assurance team conducts comprehensive testing at every stage of production, from incoming raw materials to finished products. This multi-layered approach ensures that our supplements consistently meet or exceed industry standards.
        </p>

        <div class="space-y-4">
          <div class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"></div>
            <p class="text-lg sm:text-xl text-[#333232]">
              Advanced analytical testing equipment
            </p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"></div>
            <p class="text-lg sm:text-xl text-[#333232]">
              Microbiological safety testing
            </p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"></div>
            <p class="text-lg sm:text-xl text-[#333232]">
              Potency and purity verification
            </p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"></div>
            <p class="text-lg sm:text-xl text-[#333232]">
              Stability and shelf-life testing
            </p>
          </div>
        </div>
      </div>

      <!-- Innovation and Research Section -->
      <div class="mt-12 mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-primary-600 mb-6 font-ovo">
          Innovation and Research
        </h2>
        <p class="text-lg sm:text-xl text-[#333232] leading-relaxed mb-6">
          Our factory is not just a manufacturing facility—it's a center of innovation. Our research and development team works tirelessly to develop new formulations and improve existing products, ensuring that we stay at the forefront of nutritional science.
        </p>
        <p class="text-lg sm:text-xl text-[#333232] leading-relaxed mb-6">
          Through continuous investment in technology and expertise, we're able to bring cutting-edge nutritional solutions to market, helping individuals and families achieve their health and wellness goals.
        </p>
      </div>
    `,
  },
};

// Function to get URL parameter
function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Function to load article content
function loadArticleContent() {
  const articleId = getUrlParameter("id") || "1"; // Default to article 1
  const article = newsArticles[articleId];

  if (article) {
    // Update title
    document.title = `${article.title} - Tadawena`;

    // Update article title
    const titleElement = document.querySelector("h1");
    if (titleElement) {
      titleElement.textContent = article.title;
    }

    // Update date
    const dateElement = document.querySelector(".text-neutral-800");
    if (dateElement) {
      dateElement.textContent = article.date;
    }

    // Update content
    const contentElement = document.querySelector(".prose");
    if (contentElement) {
      contentElement.innerHTML = article.content;
    }
  }
}

// Load content when DOM is ready
document.addEventListener("DOMContentLoaded", loadArticleContent);
