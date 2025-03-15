// ✅ Correct Hashed Password for "qwer4321"
const correctHash =
  "08bed824361dfdd71ac42f5ff4fcb0c31575d06e313826dbe67580e88f10a50e"; // Replace with real hash

// ✅ Available exams list
const availableExams = [
  {
    name: "SAP Commerce Developer Basic",
    code: "sap_developer_basic",
    description:
      "Test your knowledge of SAP Commerce Cloud fundamentals and developer concepts.",
    questionCount: 25,
    icon: "fas fa-laptop-code",
  },
  {
    name: "SAP Commerce Developer Advanced",
    code: "sap_developer_advanced",
    description:
      "Advanced assessment of SAP Commerce Cloud development skills and best practices.",
    questionCount: 25,
    icon: "fas fa-code",
  },
  {
    name: "SAP Commerce Business User",
    code: "sap_commerce_business_user",
    description:
      "Evaluate your understanding of SAP Commerce from a business user perspective.",
    questionCount: 25,
    icon: "fas fa-user-tie",
  },
  // Add more exams here as you create them
];

// ✅ Initialize exam data - will be populated when files are loaded
let currentExam = {
  name: "SAP Commerce Developer Basic", // Default name
  code: "sap_developer_basic", // Default code
  questions: [],
  answers: [],
};

// Cache DOM elements to improve performance
const domCache = {
  examForm: null,
  examSelectionContainer: null,
  passwordScreen: null,
  container: null,
  examProgress: null,
  resultElement: null,
  errorMessage: null,
  loader: null,
  submitButton: null,
};

// Initialize DOM cache on page load
function initDomCache() {
  domCache.examForm = document.getElementById("examForm");
  domCache.examSelectionContainer = document.getElementById(
    "examSelectionContainer"
  );
  domCache.passwordScreen = document.getElementById("passwordScreen");
  domCache.container = document.querySelector(".container");
  domCache.errorMessage = document.getElementById("errorMessage");
  domCache.loader = document.getElementById("loader");
  domCache.submitButton = document.getElementById("submitButton");
}

// ✅ Function to initialize exam data after all scripts are loaded
function initExamData(examCode) {
  // Set the current exam code
  currentExam.code = examCode || "sap_developer_basic";

  // Find the exam in the available exams list
  const selectedExam = availableExams.find(
    (exam) => exam.code === currentExam.code
  );
  if (selectedExam) {
    currentExam.name = selectedExam.name;
  }

  // Update exam name and code if available from question file
  if (typeof window.examName !== "undefined") {
    currentExam.name = window.examName;
  }

  if (typeof window.examCode !== "undefined") {
    currentExam.code = window.examCode;
  }

  // Check if the variables from the question/answer files are available
  if (typeof window.questions !== "undefined") {
    currentExam.questions = window.questions;
  } else {
    console.error("No questions found for this exam!");
    currentExam.questions = [];
  }

  if (typeof window.answers !== "undefined") {
    currentExam.answers = window.answers;
    console.log(`Loaded ${currentExam.answers.length} answers`);
  } else {
    console.error("No answers found for this exam!");
    currentExam.answers = [];
  }

  // Now render the questions with the loaded data
  renderQuestions();
  updateScore();
}

// ✅ Render exam selection cards
function renderExamSelection() {
  // Create HTML string for better performance (avoid multiple DOM manipulations)
  let html = `
        <div class="text-center mb-4">
            <i class="fas fa-graduation-cap fa-3x mb-3 text-primary"></i>
            <h2 class="mb-3">Choose Your Exam</h2>
            <p class="text-muted">Select one of the available exams below to begin your assessment</p>
        </div>
        <div class="row justify-content-center">
    `;

  // Generate all card HTML at once
  availableExams.forEach((exam, index) => {
    html += `
            <div class="col-md-6 col-lg-4 col-xl-3 mb-4" style="animation-delay: ${
              index * 0.1
            }s">
                <div class="card h-100 exam-card" data-exam-code="${exam.code}">
                    <div class="card-body text-center">
                        <div class="icon-circle mb-3">
                            <i class="${exam.icon} fa-2x text-primary"></i>
                        </div>
                        <h5 class="card-title">${exam.name}</h5>
                        <p class="card-text">${exam.description}</p>
                        <div class="d-flex justify-content-center align-items-center mt-3">
                            <span class="badge badge-info"><i class="fas fa-question-circle mr-1"></i>${
                              exam.questionCount
                            } Questions</span>
                        </div>
                    </div>
                    <div class="card-footer bg-transparent border-top-0 text-center">
                        <button class="btn btn-primary start-exam-btn" data-exam-code="${
                          exam.code
                        }">
                            <i class="fas fa-play-circle mr-1"></i> Start Exam
                        </button>
                    </div>
                </div>
            </div>
        `;
  });

  html += `</div>`;

  // Set HTML all at once (single DOM update)
  domCache.examSelectionContainer.innerHTML = html;

  // Add event listeners using event delegation for better performance
  domCache.examSelectionContainer.addEventListener("click", function (e) {
    const button = e.target.closest(".start-exam-btn");
    if (button) {
      const examCode = button.getAttribute("data-exam-code");
      loadExam(examCode);
    }
  });
}

// ✅ Load the selected exam
function loadExam(examCode) {
  // Reset any previous exam data if an exam was already loaded
  if (!domCache.examForm.classList.contains("hidden")) {
    // Reset the exam form first
    if (typeof window.resetExam === "function") {
      window.resetExam();
    }
  }

  // Hide the exam selection container
  domCache.examSelectionContainer.classList.add("hidden");

  // Show the exam form
  domCache.examForm.classList.remove("hidden");

  // Load the exam scripts dynamically
  loadExamScripts(examCode, function () {
    // Initialize the exam data after scripts are loaded
    initExamData(examCode);

    // Refresh the navbar to show exam title and score
    refreshNavbar();
  });
}

// ✅ Load exam scripts dynamically
function loadExamScripts(examCode, callback) {
  // Remove any previously loaded exam scripts
  const oldScripts = document.querySelectorAll("script[data-exam-script]");
  oldScripts.forEach((script) => script.remove());

  // Reset global variables to prevent using data from previous exams
  window.examName = undefined;
  window.examCode = undefined;
  window.questions = undefined;
  window.answers = undefined;

  // Create a document fragment for better performance
  const fragment = document.createDocumentFragment();

  // Load the question script
  const questionScript = document.createElement("script");
  questionScript.src = `module/sap/questions/${examCode}_que.js`;
  questionScript.setAttribute("data-exam-script", "question");

  // Load the answer script
  const answerScript = document.createElement("script");
  answerScript.src = `module/sap/answerkey/${examCode}_anskey.js`;
  answerScript.setAttribute("data-exam-script", "answer");

  // Set up event listeners
  questionScript.onload = function () {
    document.body.appendChild(answerScript);
  };

  answerScript.onload = function () {
    if (callback) callback();
  };

  // Append to fragment first
  fragment.appendChild(questionScript);

  // Append fragment to body (single DOM operation)
  document.body.appendChild(fragment);
}

// Render Questions
function renderQuestions() {
  // Create a title element outside the container and below navbar
  const examTitleHtml = `
        <div class="exam-title-container">
            <div class="container" style="background: none !important; background-image: none !important;">
                <div class="exam-title-row">
                    <h3><i class="fas fa-clipboard-list"></i>${currentExam.name}</h3>
                    <div class="exam-title-buttons">
                        <button class="btn btn-success" id="result"><i class="fas fa-star"></i> Score: 0/${currentExam.questions.length}</button>
                        <button class="btn btn-warning" id="resetExamButton"><i class="fas fa-redo-alt"></i> Reset</button>
                        <button class="btn btn-danger" id="exitExamButton"><i class="fas fa-sign-out-alt"></i> Exit</button>
                    </div>
                </div>
            </div>
        </div>
    `;

  // Insert the title after the navbar
  const navbarElement = document.getElementById("examnavbar");
  if (navbarElement) {
    // Remove existing title container if it exists
    const existingTitle = document.getElementById("examTitleContainer");
    if (existingTitle) {
      existingTitle.remove();
    }

    // Create a new div for the title
    const titleDiv = document.createElement("div");
    titleDiv.id = "examTitleContainer";
    titleDiv.innerHTML = examTitleHtml;

    // Insert after navbar
    navbarElement.after(titleDiv);

    // Setup event listeners for the buttons in the title bar
    setupTitleBarButtons();
  }

  // Create HTML string for the questions container (without the title)
  let html = `
        <div class="text-center mb-5">
            <div class="row align-items-center justify-content-center">
                <div class="col-md-12">
                    <p class="text-muted mb-3">Answer all questions to complete the exam</p>
                    <div class="progress" style="height: 10px;">
                        <div class="progress-bar" role="progressbar" style="width: 0%;" id="exam-progress"></div>
                    </div>
                </div>
            </div>
        </div>
    `;

  // Generate all questions HTML at once
  currentExam.questions.forEach((q, index) => {
    html += `
            <div class="question-card" id="question-${index}" style="animation-delay: ${
      index * 0.05
    }s">
                <div class="question-number">Q${index + 1} of ${
      currentExam.questions.length
    }</div>
                <div class="question-text">${q.question}</div>
                <ul class="options">
                    ${q.options
                      .map(
                        (option, i) => `
                        <li>
                            <label class="d-flex align-items-start">
                                <input type="${
                                  q.multiselect ? "checkbox" : "radio"
                                }" 
                                       name="q${index}" value="${i}" class="answer-input mt-1 mr-2">
                                <span>${option}</span>
                            </label>
                        </li>
                    `
                      )
                      .join("")}
                </ul>
                ${
                  q.multiselect
                    ? '<div class="text-muted small mt-2"><i class="fas fa-info-circle"></i>Multiple answers may be correct</div>'
                    : ""
                }
            </div>
        `;
  });

  // Add the "Go to Top" button at the end of the form
  html += `
        <button onclick="examScrollToTop()" id="examTopBtn" title="Go to top">
            <i class="fas fa-arrow-up"></i>
        </button>
    `;

  // Set HTML all at once (single DOM update)
  domCache.examForm.innerHTML = html;

  // Cache the progress bar element
  domCache.examProgress = document.getElementById("exam-progress");

  // Use event delegation for better performance
  domCache.examForm.addEventListener("change", function (e) {
    if (e.target.classList.contains("answer-input")) {
      updateScore();
      updateProgress();
    }
  });

  // Add responsive class to the form container
  domCache.examForm.classList.add("responsive-form");
}

// Update progress bar
function updateProgress() {
  if (!domCache.examProgress) return;

  const totalQuestions = currentExam.questions.length;

  // Count questions with at least one selected answer
  let answeredCount = 0;
  for (let i = 0; i < totalQuestions; i++) {
    const selectedInputs = document.querySelectorAll(
      `input[name="q${i}"]:checked`
    );
    if (selectedInputs.length > 0) {
      answeredCount++;
    }
  }

  const progressPercent = (answeredCount / totalQuestions) * 100;

  // Use requestAnimationFrame for smoother animations
  requestAnimationFrame(() => {
    domCache.examProgress.style.width = `${progressPercent}%`;

    // Change color based on progress
    if (progressPercent < 30) {
      domCache.examProgress.className = "progress-bar bg-danger";
    } else if (progressPercent < 70) {
      domCache.examProgress.className = "progress-bar bg-warning";
    } else {
      domCache.examProgress.className = "progress-bar bg-success";
    }
  });
}

// Update Score
function updateScore() {
  let score = 0;

  currentExam.questions.forEach((q, index) => {
    let selectedValues = [...document.getElementsByName(`q${index}`)]
      .filter((input) => input.checked)
      .map((input) => parseInt(input.value));

    let correctAnswers = Array.isArray(currentExam.answers[index])
      ? currentExam.answers[index]
      : [currentExam.answers[index]];

    // ✅ Select the question div
    let questionDiv = document.getElementById(`question-${index}`);
    if (!questionDiv) return;

    if (selectedValues.length === 0) {
      // ✅ No selection made, keep default color
      questionDiv.style.backgroundColor = "white";
      questionDiv.style.border = "2px solid #ddd";
      // Reset watermark color
      questionDiv.style.setProperty("--watermark-opacity", "0.05");
      questionDiv.querySelector(".question-number").innerHTML = `Q${
        index + 1
      } of ${currentExam.questions.length}`;
    } else if (
      JSON.stringify(selectedValues.sort()) ===
      JSON.stringify(correctAnswers.sort())
    ) {
      // ✅ Correct answer, turn green
      questionDiv.style.backgroundColor = "#d4edda";
      questionDiv.style.border = "2px solid #28a745";
      // Adjust watermark for green background
      questionDiv.style.setProperty("--watermark-opacity", "0.07");
      questionDiv.querySelector(
        ".question-number"
      ).innerHTML = `<i class="fas fa-check-circle text-success mr-2"></i>Q${
        index + 1
      } of ${currentExam.questions.length}`;
      score++;
    } else {
      // ❌ Incorrect answer, turn red
      questionDiv.style.backgroundColor = "#f8d7da";
      questionDiv.style.border = "2px solid #dc3545";
      // Adjust watermark for red background
      questionDiv.style.setProperty("--watermark-opacity", "0.07");
      questionDiv.querySelector(
        ".question-number"
      ).innerHTML = `<i class="fas fa-times-circle text-danger mr-2"></i>Q${
        index + 1
      } of ${currentExam.questions.length}`;
    }
  });

  // Update progress
  updateProgress();

  // ✅ Update score dynamically in the title bar
  const resultElement = document.getElementById("result");
  if (resultElement) {
    resultElement.innerHTML = `<i class="fas fa-star"></i> Score: ${score}/${currentExam.questions.length}`;
  }
}

// ✅ SHA-256 Hash Function
async function sha256(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// ✅ Show Loader Before Checking Password
function startLoading() {
  domCache.submitButton.style.display = "none"; // ✅ Hide Submit Button
  domCache.loader.style.display = "block"; // ✅ Show Loader

  // ✅ Wait for 1 second, then check the password
  setTimeout(checkPassword, 1000);
}

// ✅ Function to Check Password
async function checkPassword() {
  const enteredPassword = document.getElementById("examPassword").value;
  const enteredHash = await sha256(enteredPassword);

  if (enteredPassword === "") {
    domCache.errorMessage.innerText = "Please enter a password";
    domCache.submitButton.style.display = "block"; // ✅ Show Submit Button again
    domCache.loader.style.display = "none"; // ✅ Hide Loader after check
    return;
  }

  if (enteredHash === correctHash) {
    // Apply CSS changes before changing display to prevent flickering
    domCache.container.style.height = "auto";
    domCache.container.style.minHeight = "70vh";

    // Use requestAnimationFrame to ensure smooth transitions
    requestAnimationFrame(() => {
      domCache.passwordScreen.classList.add("hidden");
      domCache.examSelectionContainer.classList.remove("hidden");

      // Render the exam selection cards
      renderExamSelection();

      // Refresh the navbar to show "Select Exam"
      refreshNavbar();
    });
  } else {
    domCache.errorMessage.innerText = "Incorrect password. Try again!";
    domCache.submitButton.style.display = "block"; // ✅ Show Submit Button again
  }

  domCache.loader.style.display = "none"; // ✅ Hide Loader after check
}

// ✅ Ensure only the password screen is visible initially
document.addEventListener("DOMContentLoaded", () => {
  // Initialize DOM cache
  initDomCache();

  // Hide elements initially
  domCache.examForm.classList.add("hidden");
  domCache.examSelectionContainer.classList.add("hidden");

  // Handle mobile viewport height issues
  updateViewportHeight();

  // Listen for resize events to update the viewport height variable
  window.addEventListener(
    "resize",
    debounce(function () {
      updateViewportHeight();
      adjustContainerHeight();

      // Refresh the navbar when the screen size changes
      // This ensures the navbar is properly responsive
      refreshNavbar();
    }, 100)
  );

  // Remove any existing event listeners to avoid duplicates
  // We're now using jQuery for button handling in examnav.js
});

// Clean implementation of the reset exam functionality
function resetExam(fromExit = false) {
  // Check if already processing
  if (resetExam.isProcessing) {
    return;
  }

  // Set processing flag
  resetExam.isProcessing = true;

  try {
    // Validate exam data
    if (
      !currentExam ||
      !currentExam.questions ||
      currentExam.questions.length === 0
    ) {
      console.log("No exam to reset");
      return;
    }

    // Reset all questions
    for (let index = 0; index < currentExam.questions.length; index++) {
      // Reset selected answers
      const inputs = document.getElementsByName(`q${index}`);
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
      }

      // Reset question styling
      const questionDiv = document.getElementById(`question-${index}`);
      if (questionDiv) {
        questionDiv.style.backgroundColor = "white";
        questionDiv.style.border = "2px solid #ddd";
        questionDiv.style.setProperty("--watermark-opacity", "0.05");
        questionDiv.querySelector(".question-number").innerHTML = `Q${
          index + 1
        } of ${currentExam.questions.length}`;
      }
    }

    // Reset progress bar
    const examProgress = document.getElementById("exam-progress");
    if (examProgress) {
      examProgress.style.width = "0%";
      examProgress.className = "progress-bar bg-danger";
    }

    // Reset score display in the title bar
    const resultElement = document.getElementById("result");
    if (resultElement) {
      resultElement.innerHTML = `<i class="fas fa-star"></i> Score: 0/${currentExam.questions.length}`;
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Only show toast if not called from exit button
    if (!fromExit && !document.getElementById("examForm").classList.contains("hidden")) {
      // Show confirmation message
      showToast("Exam has been reset.");
    }
  } catch (error) {
    console.error("Error resetting exam:", error);
    showToast("There was an error resetting the exam. Please try again.");
  } finally {
    // Clear processing flag after a delay
    setTimeout(() => {
      resetExam.isProcessing = false;
    }, 500);
  }
}

// Initialize the processing flag
resetExam.isProcessing = false;

// Make the function available globally
window.resetExam = resetExam;

// Update viewport height CSS variable
function updateViewportHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

// Debounce function to limit resize event firing
function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

// Adjust container height based on content
function adjustContainerHeight() {
  if (
    !domCache.examForm.classList.contains("hidden") ||
    !domCache.examSelectionContainer.classList.contains("hidden")
  ) {
    domCache.container.style.height = "auto";
  }
}

// ✅ Refresh the navbar
function refreshNavbar() {
  // Use the optimized navbar rendering function from examnav.js
  if (typeof renderNavbar === "function") {
    renderNavbar();
  }
}

// Show a toast message
function showToast(message) {
  // Create toast container if it doesn't exist
  let toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  // Create toast element
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
        <div class="toast-content">
            <i class="fas fa-info-circle mr-2"></i>
            ${message}
        </div>
    `;

  // Add to container
  toastContainer.appendChild(toast);

  // Show toast
  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  // Remove after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// Setup event listeners for the buttons in the title bar
function setupTitleBarButtons() {
  // Reset button
  const resetButton = document.getElementById("resetExamButton");
  if (resetButton) {
    resetButton.addEventListener("click", function (e) {
      e.preventDefault();
      if (typeof window.resetExam === "function") {
        window.resetExam();
      }
    });
  }

  // Exit Exam button
  const exitButton = document.getElementById("exitExamButton");
  if (exitButton) {
    exitButton.addEventListener("click", function (e) {
      e.preventDefault();

      // Show confirmation dialog
      if (
        confirm(
          "Are you sure you want to exit this exam? Your progress will be lost."
        )
      ) {
        // Reset the exam form first, passing true to indicate it's from exit
        if (typeof window.resetExam === "function") {
          window.resetExam(true);
        }
        
        // Hide the exam form
        const examForm = document.getElementById("examForm");
        if (examForm) {
          examForm.classList.add("hidden");
        }

        // Remove the exam title container
        const examTitleContainer =
          document.getElementById("examTitleContainer");
        if (examTitleContainer) {
          examTitleContainer.remove();
        }

        // Show the exam selection container
        const examSelectionContainer = document.getElementById(
          "examSelectionContainer"
        );
        if (examSelectionContainer) {
          examSelectionContainer.classList.remove("hidden");
        }

        // Refresh the navbar
        if (typeof refreshNavbar === "function") {
          refreshNavbar();
        }

        // Show confirmation message
        showToast("Exam exited successfully");
      }
    });
  }
}

// Function to scroll to the top of the exam form
function examScrollToTop() {
  const examForm = document.getElementById("examForm");
  if (examForm) {
    examForm.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

// Make examScrollToTop function globally accessible
window.examScrollToTop = examScrollToTop;
