// Render Questions
function renderQuestions() {
    const form = document.getElementById("examForm");
    form.innerHTML = ""; // ✅ Clears previous questions before adding new ones

    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question-card");
        questionDiv.id = `question-${index}`; // ✅ Assign an ID for styling

        questionDiv.innerHTML = `
            <div class="question-number">Q${index + 1} of ${questions.length}</div>
            <div class="question-text">${q.question}</div>
            <ul class="options">
                ${q.options.map((option, i) => `
                    <li>
                        <label>
                            <input type="${q.multiselect ? "checkbox" : "radio"}" 
                                   name="q${index}" value="${i}" class="answer-input">
                            ${option}
                        </label>
                    </li>
                `).join("")}
            </ul>
        `;

        form.appendChild(questionDiv);
    });

    // ✅ Attach event listeners dynamically after rendering questions
    document.querySelectorAll(".answer-input").forEach(input => {
        input.addEventListener("change", updateScore);
    });
}

// Update Score
function updateScore() {
    let score = 0;

    questions.forEach((q, index) => {
        let selectedValues = [...document.getElementsByName(`q${index}`)]
            .filter(input => input.checked)
            .map(input => parseInt(input.value));

        let correctAnswers = Array.isArray(answers[index]) ? answers[index] : [answers[index]];
        
        // ✅ Select the question div
        let questionDiv = document.getElementById(`question-${index}`);

        if (selectedValues.length === 0) {
            // ✅ No selection made, keep default color
            questionDiv.style.backgroundColor = "white";
            questionDiv.style.border = "2px solid #ddd";
        } else if (JSON.stringify(selectedValues.sort()) === JSON.stringify(correctAnswers.sort())) {
            // ✅ Correct answer, turn green
            questionDiv.style.backgroundColor = "#d4edda";
            questionDiv.style.border = "2px solid #28a745";
        } else {
            // ❌ Incorrect answer, turn red
            questionDiv.style.backgroundColor = "#f8d7da";
            questionDiv.style.border = "2px solid #dc3545";
        }

        if (JSON.stringify(selectedValues.sort()) === JSON.stringify(correctAnswers.sort())) {
            score++;
        }
    });

    // ✅ Update score dynamically in the navbar - Check if element exists first
    const resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerHTML = `Score: ${score}/${questions.length}`;
    }
}

// ✅ Ensure Everything Loads Properly
document.addEventListener("DOMContentLoaded", () => {
    renderQuestions();  // ✅ First, load the questions
    updateScore();      // ✅ Display initial score (0/total)
});


//=================================
// ✅ SHA-256 Hash Function
async function sha256(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}

// ✅ Correct Hashed Password for "qwer4321"
const correctHash = "08bed824361dfdd71ac42f5ff4fcb0c31575d06e313826dbe67580e88f10a50e"; // Replace with real hash

// ✅ Show Loader Before Checking Password
function startLoading() {
    document.getElementById("submitButton").style.display = "none"; // ✅ Hide Submit Button
    document.getElementById("loader").style.display = "block"; // ✅ Show Loader

    // ✅ Wait for 1 second, then check the password
    setTimeout(checkPassword, 1000);
}

// ✅ Function to Check Password
async function checkPassword() {
    const enteredPassword = document.getElementById("examPassword").value;
    const enteredHash = await sha256(enteredPassword);

    if (enteredHash === correctHash) {
        document.getElementById("passwordScreen").classList.add("hidden"); // ✅ Hide password screen
        document.getElementById("examForm").classList.remove("hidden"); // ✅ Show exam form

        renderQuestions(); // ✅ Render questions
    } else {
        document.getElementById("errorMessage").innerText = "Incorrect password. Try again!";
        document.getElementById("submitButton").style.display = "block"; // ✅ Show Submit Button again
    }

    document.getElementById("loader").style.display = "none"; // ✅ Hide Loader after check
}

// ✅ Ensure only the password screen is visible initially
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("examForm").classList.add("hidden"); // ✅ Hide exam initially
});

//=================================
// Water Mark
//=================================
