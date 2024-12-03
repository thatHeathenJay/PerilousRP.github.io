// Page Load Performance
console.log("%cPage Loading...", "color:#2ecc71");
((t) => {
  ["DOM Content Loaded", "Full Page Load"].forEach((e, i) =>
    addEventListener(i ? "load" : "DOMContentLoaded", () =>
      console.log(
        `%c${e}: %c${((performance.now() - t) / 1e3).toFixed(2)}s`,
        "color:#2ecc71",
        `color:${(performance.now() - t) / 1e3 < 1 ? "#3498db" : "#e74c3c"}`
      )
    )
  );
})(performance.now());

// Initialize Bootstrap 5.3 dropdowns
document.addEventListener("DOMContentLoaded", function () {
  var dropdowns = document.querySelectorAll(".dropdown-toggle");
  dropdowns.forEach(function (dropdown) {
    new bootstrap.Dropdown(dropdown);
  });
});

// Background Transition
const images = [
  'url("/assets/images/city_backdrop_sunset.png")',
  'url("/assets/images/orange_car_speeding.png")',
  'url("/assets/images/wet_city_street.png")',
  'url("/assets/images/Dirt_Road.png")',
  'url("/assets/images/Bike_Chase.png")',
];

let currentIndex = 0;
const bgContainer = document.getElementById("bg-container");

function createBgElement(url, opacity) {
  const bgElement = document.createElement("div");
  bgElement.className = "bg-image";
  bgElement.style.backgroundImage = url;
  bgElement.style.opacity = opacity;
  return bgElement;
}

function changeBackground() {
  const nextIndex = (currentIndex + 1) % images.length;
  const nextBg = createBgElement(images[nextIndex], 0);

  bgContainer.appendChild(nextBg);

  setTimeout(() => {
    nextBg.style.opacity = 1;
    bgContainer.children[0].style.opacity = 0;
  }, 50);

  setTimeout(() => {
    bgContainer.removeChild(bgContainer.children[0]);
    currentIndex = nextIndex;
  }, 1000);
}

// Character Overlay Transition
const charImages = [
  "/assets/images/cop_crim_opp.png",
  "/assets/images/corpolady_streetlady_opp.png",
  "/assets/images/biker_corpo_opp.png",
  "/assets/images/oldman_lady_opp.png",
  "/assets/images/gang_members_opp.png",
];

let currentCharIndex = 0;
const charOverlayContainer = document.getElementById("char-overlay-container");

function createCharOverlay(url, opacity) {
  const img = document.createElement("img");
  img.className = "char-overlay";
  img.src = url;
  img.alt = "Character Overlay";
  img.style.opacity = opacity;
  return img;
}

function changeCharOverlay() {
  const nextIndex = (currentCharIndex + 1) % charImages.length;
  const nextOverlay = createCharOverlay(charImages[nextIndex], 0);

  charOverlayContainer.appendChild(nextOverlay);

  setTimeout(() => {
    nextOverlay.style.opacity = 1;
    charOverlayContainer.children[0].style.opacity = 0;
  }, 50);

  setTimeout(() => {
    charOverlayContainer.removeChild(charOverlayContainer.children[0]);
    currentCharIndex = nextIndex;
  }, 1000);
}

// Initial character overlay setup
charOverlayContainer.appendChild(createCharOverlay(charImages[0], 1));

// Start the character overlay transition
setInterval(changeCharOverlay, 20000); // Change every 20 seconds

// Initial background setup
bgContainer.appendChild(createBgElement(images[0], 1));

// Start the background transition
setInterval(changeBackground, 10000);

// Content Switching and Hash Navigation
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const contentSections = document.querySelectorAll(".content-section");

  function showSection(sectionId) {
    console.log("Showing section:", sectionId); // Debug log
    const targetSection = document.getElementById(sectionId);

    if (!targetSection) {
      console.error(`Section with id "${sectionId}" not found`);
      return;
    }

    // Remove active class from all nav links and add to the correct link
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
      if (navLink.getAttribute("section") === sectionId) {
        navLink.classList.add("active");
      }
    });

    // Fade out all sections
    contentSections.forEach((section) => {
      section.style.opacity = "0";
      section.classList.remove("active");
    });

    // Fade in target section
    setTimeout(() => {
      contentSections.forEach((section) => {
        section.style.display = "none";
      });
      targetSection.style.display = "block";
      targetSection.classList.add("active");
      setTimeout(() => {
        targetSection.style.opacity = "1";
      }, 50);
    }, 250); // This timeout should match the transition time in CSS
  }

  function handleHashChange() {
    let hash = window.location.hash.substring(1); // Remove the # symbol
    if (hash === "") {
      hash = "about-us"; // Default to About Us if no hash is present
    }
    showSection(hash);
  }

  // Handle clicks on nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSectionId = this.getAttribute("section");
      window.location.hash = targetSectionId;
    });
  });

  // Listen for hash changes
  window.addEventListener("hashchange", handleHashChange);

  // Check hash on initial page load
  handleHashChange();

  // Debug log to check all content sections
  console.log(
    "Content sections:",
    Array.from(contentSections).map((section) => section.id)
  );
});

// Rules Toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggles = [
    { buttonId: "grp-toggle", contentId: "rules-grp" },
    { buttonId: "gang-toggle", contentId: "rules-gang" },
    { buttonId: "business-toggle", contentId: "rules-business" },
  ];

  function hideAllContent() {
    toggles.forEach((toggle) => {
      const content = document.getElementById(toggle.contentId);
      content.classList.remove("show");
    });
  }

  toggles.forEach((toggle) => {
    const button = document.getElementById(toggle.buttonId);
    const content = document.getElementById(toggle.contentId);

    content.classList.add("rule-content");

    button.addEventListener("click", function () {
      if (!content.classList.contains("show")) {
        hideAllContent();
        content.classList.add("show");
      } else {
        content.classList.remove("show");
      }
    });
  });

  // Initially hide all content
  hideAllContent();
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.onclick = function () {
  scrollToTop();
};

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Department Toggles
document.addEventListener("DOMContentLoaded", function () {
  const deptToggles = [
    { buttonId: "sasp-toggle", contentId: "dept-sasp" },
    { buttonId: "safr-toggle", contentId: "dept-safr" },
    { buttonId: "doj-toggle", contentId: "dept-doj" },
  ];

  function hideAllDeptContent() {
    deptToggles.forEach((toggle) => {
      const content = document.getElementById(toggle.contentId);
      content.classList.remove("show");
    });
  }

  deptToggles.forEach((toggle) => {
    const button = document.getElementById(toggle.buttonId);
    const content = document.getElementById(toggle.contentId);

    content.classList.add("rule-content");

    button.addEventListener("click", function () {
      if (!content.classList.contains("show")) {
        hideAllDeptContent();
        content.classList.add("show");
      } else {
        content.classList.remove("show");
      }
    });
  });

  // Initially hide all content
  hideAllDeptContent();
});
