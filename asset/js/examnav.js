// Cache DOM elements
let navbarElement = null;

// Initialize navbar when DOM is ready
$(function () {
  // Cache the navbar element
  navbarElement = document.getElementById("examnavbar");

  // Initial render
  renderNavbar();

  // Add active class to current page
  var id = getValueByName("id");
  if (id) {
    $("#" + id).addClass("active");
  }
});

// Render navbar function - can be called to update the navbar
function renderNavbar() {
  if (!navbarElement) return;

  // Check if we're on the exam selection screen
  const examSelectionContainer = document.getElementById(
    "examSelectionContainer"
  );
  const isExamSelectionActive =
    examSelectionContainer &&
    !examSelectionContainer.classList.contains("hidden");

  // Check if we're on an active exam
  const examForm = document.getElementById("examForm");
  const isExamActive = examForm && !examForm.classList.contains("hidden");

  // Check if we're on the login screen
  const passwordScreen = document.getElementById("passwordScreen");
  const isLoginActive =
    passwordScreen && !passwordScreen.classList.contains("hidden");

  // Build navbar HTML
  const navbarHtml = buildNavbarHtml(
    isExamSelectionActive,
    isExamActive,
    isLoginActive
  );

  // Update the navbar HTML directly
  navbarElement.innerHTML = navbarHtml;

  // Add event listeners using jQuery for better cross-browser compatibility
  setupNavbarButtons();

  // Add event listener to the navbar toggler button for mobile
  const navbarToggler = document.querySelector(".navbar-toggler");
  if (navbarToggler) {
    $(navbarToggler)
      .off("click")
      .on("click", function (e) {
        e.stopPropagation();
        const target = $("#navbarNavAltMarkup");
        if (target.length) {
          target.toggleClass("show");
        }
        return false;
      });
  }
}

// Setup navbar buttons with jQuery
function setupNavbarButtons() {
  // Logout button - using jQuery for better compatibility
  $("#logoutButton")
    .off("click")
    .on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      location.reload();
      return false;
    });
}

// Build navbar HTML - separated for better organization
function buildNavbarHtml(isExamSelectionActive, isExamActive, isLoginActive) {
  let bar = "";
  bar += "<!-- Navbar -->";
  bar += ' <nav class="navbar navbar-expand-lg navbar-dark bg-dark">';
  bar += '    <div class="container-fluid">';
  bar +=
    '        <a class="navbar-brand" href="https://yourstanmay.github.io">';
  bar +=
    '            <img style="width: 40px; height: 40px; margin-right: 8px; border-radius: 50%;"';
  bar +=
    '                src="https://yourstanmay.github.io/Asset/img/logo.jpg">YoursTanmay Exam';
  bar += "        </a>";
  bar +=
    '        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"';
  bar +=
    '            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">';
  bar += '            <span class="navbar-toggler-icon"></span>';
  bar += "        </button>";
  bar +=
    '        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">';

  // Empty div for spacing - removed exam title
  bar += '            <div class="navbar-nav mx-auto"></div>';

  bar += '            <div class="navbar-nav ml-auto navbar-buttons">'; // ✅ Right align buttons with a class for styling

  // Only show logout button if not on login screen - simple button with no inline handlers
  if (!isLoginActive) {
    bar +=
      '                <button class="btn btn-outline-light" type="button" id="logoutButton"><i class="fas fa-sign-out-alt mr-1"></i>Logout</button>';
  }

  bar += "            </div>";
  bar += "        </div>";
  bar += "    </div>";
  bar += "</nav>";

  return bar;
}

// Get value from URL
function getValueByName(name) {
  const footerBar = document.getElementById("footer-bar");
  if (!footerBar) return "";

  const url = footerBar.getAttribute("src");
  if (!url || url.indexOf("?") === -1) return "";

  const source = url.split("?")[1];
  const items = source.split("&");

  for (let i = 0; i < items.length; i++) {
    const parameters = items[i].split("=");
    if (parameters[0] === name) {
      return parameters[1];
    }
  }

  return "";
}
