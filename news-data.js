// News articles data
const newsArticles = {
  1: {
    title:
      "Fresh Perspectives, Bright Futures: Tadawena Hosts Summer Interns 2025",
    date: "April 22, 2025",
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
    date: "March 15, 2025",
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
      "Inside Tadawena: A Special Tour of Our Nutritional Supplement Factory",
    date: "July 12, 2024",
    image: "public/news-4.jpg",
    content: `
      <p class="text-lg sm:text-xl text-[#333232] leading-relaxed mb-8">
        Step inside Tadawena's state-of-the-art factory and discover how our high-quality nutritional supplements come to life. From advanced manufacturing processes to rigorous quality control and expert formulation, this exclusive tour reveals our commitment to excellence.
      </p>

      <!-- Factory Tour Images - Asymmetric Layout -->
      <div class="py-6">
        <div class="max-w-xl mx-auto">
          <div>
            <div class="aspect-[4/3] w-full overflow-hidden">
              <img
                src="public/news-4.jpg"
                alt="Tadawena Factory Tour - Production Line"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- A Glimpse into Certified Excellence Section -->
      <div class="mt-12 mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-primary-600 mb-6 font-ovo">
          A Glimpse into Certified Excellence
        </h2>
        <p class="text-lg sm:text-xl text-[#333232] leading-relaxed font-light mb-6">
          The factory, located near Qaliub, proudly operates under NSFA (National Food Safety Authority) approval, meeting Egypt's top safety and manufacturing standards. From raw material inspection to packaging and labeling, every step is monitored with meticulous care to ensure that only safe, effective, and compliant products reach the market.
        </p>
        <p class="text-lg sm:text-xl text-[#333232] leading-relaxed font-light mb-8">
          Visitors walked through high-tech production lines, witnessed rigorous lab testing, and engaged with the quality assurance team to understand how Tadawena upholds the trust it has built in the pharmaceutical and nutritional supplement sectors.
        </p>
      </div>

      <!-- Supporting Startups and Supplement Entrepreneurs Section -->
      <div class="mt-12 mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-primary-600 mb-6 font-ovo">
          Supporting Startups and Supplement Entrepreneurs
        </h2>
        <p class="text-lg sm:text-xl text-[#333232] leading-relaxed font-light mb-6">
          One of the most exciting takeaways from the tour was Tadawena's open-door policy for collaborating with startup supplement and pharmaceutical businesses. If you have a supplement or medication idea but lack the infrastructure to bring it to market, Tadawena can help manufacture your product at its certified facility, offering:
        </p>

        <div class="space-y-4 mb-6">
          <div class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"></div>
            <p class="text-lg sm:text-xl text-[#333232] font-light">
              Full production services (capsules, tablets, syrups, powders, etc.)
            </p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"></div>
            <p class="text-lg sm:text-xl text-[#333232] font-light">
              Packaging and private labeling
            </p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"></div>
            <p class="text-lg sm:text-xl text-[#333232] font-light">
              Guidance on compliance and approvals
            </p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"></div>
            <p class="text-lg sm:text-xl text-[#333232] font-light">
              Scalable solutions from pilot batches to mass production
            </p>
          </div>
        </div>

        <p class="text-lg sm:text-xl text-[#333232] font-light leading-relaxed mb-8">
          Whether you're a pharmacist, nutritionist, wellness entrepreneur, or startup founder, Tadawena offers you a reliable production partner backed by years of experience and national-level certifications.
        </p>
      </div>

      <!-- Call to Action Section -->
      <div class="mt-12 mb-8 text-center">
        <h2 class="text-2xl sm:text-3xl font-semibold text-primary-600 mb-6">
          Have a formula in mind? Let Tadawena bring it to life.
        </h2>
      </div>

      <section id="contact" class="bg-background-100 py-8">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Contact Container with Border -->
        <div class="border border-primary-500 rounded-3xl p-8 md:p-12 lg:p-16 bg-white/50 backdrop-blur-sm">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <!-- Left Side - Content and Image -->
            <div class="space-y-8">
              <!-- Header Text -->
              <div class="space-y-4">
                <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-600 font-ovo leading-tight">
                  Get In Touch
                </h2>
                <p class="text-lg md:text-xl text-neutral-800 leading-relaxed">
                  Contact us with your feedback or inquiries and we'll get back to you!
                </p>
              </div>

              <!-- Contact Illustration -->
              <div class="flex justify-center lg:justify-start">
                <img
                  src="public/contact.svg"
                  alt="Contact Us Illustration"
                  class="w-full max-w-md h-auto object-contain"
                />
              </div>
            </div>

            <!-- Right Side - Contact Form -->
            <div class="space-y-6">
              <form class="space-y-6" id="contactForm">
                <!-- Full Name Field -->
                <div class="space-y-2">
                  <label for="fullName" class="block text-lg font-medium text-neutral-800">
                    Full Name
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg class="h-5 w-5 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Ahmed Kamil"
                      class="w-full pl-12 pr-4 py-4 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none text-neutral-800 placeholder-neutral-800/60 text-base lg:text-lg bg-white/80"
                      required
                    />
                  </div>
                </div>

                <!-- Email Field -->
                <div class="space-y-2">
                  <label for="email" class="block text-lg font-medium text-neutral-800">
                    Email
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg class="h-5 w-5 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="user@mail.com"
                      class="w-full pl-12 pr-4 py-4 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none text-neutral-800 placeholder-neutral-800/60 text-base lg:text-lg bg-white/80"
                      required
                    />
                  </div>
                </div>

                <!-- Message Field -->
                <div class="space-y-2">
                  <label for="message" class="block text-lg font-medium text-neutral-800">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Your message"
                    class="w-full px-4 py-4 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none text-neutral-800 placeholder-neutral-800/60 text-base lg:text-lg bg-white/80 resize-none"
                    required
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  class="w-full bg-primary-600 hover:bg-transparent text-white hover:text-primary-600 border border-transparent hover:border-primary-600 py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
                >
                  Send your message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
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

    // Update date - find the date span specifically
    const dateSpan = document.querySelector(".flex.items-center.gap-2 span");
    if (dateSpan && article.date) {
      dateSpan.textContent = article.date;
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
