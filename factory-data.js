// Factory Production Lines Data
const factoryData = {
  1: {
    id: 1,
    title: "Production line of Hard gelatin capsules (blister packs - jars)",
    breadcrumbTitle: "Production Line - Capsules",
    image: "public/factory-1.jpg",
    gallery: ["public/fac-1.png", "public/fac-2.jpg", "public/fac-3.jpg"],
  },
  2: {
    id: 2,
    title: "Production line of Capsules (blister packs - jars)",
    breadcrumbTitle: "Production Line - Tablets",
    image: "public/factory-2.jpg",
    gallery: [
      "public/fac-4.png",
      "public/fac-5.jpg",
      "public/fac-6.jpg",
      "public/fac-7.jpg",
    ],
  },
  3: {
    id: 3,
    title: "Production line of Tablets (blister packs - jars)",
    breadcrumbTitle: "Production Line - Tablets",
    image: "public/factory-3.jpg",
    gallery: ["public/fac-8.jpg", "public/fac-9.jpg"],
  },
};

// Function to get factory data by ID
function getFactoryById(id) {
  return factoryData[id] || null;
}

// Function to get all factory data
function getAllFactories() {
  return Object.values(factoryData);
}

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = { factoryData, getFactoryById, getAllFactories };
}
