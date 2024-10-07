let currentSection = 1;
const totalSections = 8; // Updated to 8 sections

// Initialize the form and set up event listeners for all sections
function initializeForm() {
    for (let i = 1; i <= totalSections; i++) {
        const fields = document.querySelectorAll(`#section-${i} input, #section-${i} select, #section-${i} textarea`);
        fields.forEach(field => {
            field.addEventListener('input', () => updateProgressBar(i));
        });
    }
    updateProgressBar(1); // Initialize the first section's progress bar
}

// Update progress bar for a specific section
function updateProgressBar(sectionNumber) {
    const fields = document.querySelectorAll(`#section-${sectionNumber} input, #section-${sectionNumber} select, #section-${sectionNumber} textarea`);
    let filledFields = 0;
    
    // Check if fields are filled
    fields.forEach(field => {
        if (field.type === 'radio') {
            const radioGroup = document.getElementsByName(field.name);
            if (Array.from(radioGroup).some(radio => radio.checked)) {
                filledFields++;
            }
        } else if (field.value.trim() !== '') {
            filledFields++;
        }
    });
    
    const progress = (filledFields / fields.length) * 100;
    const progressBar = document.getElementById(`progressBar${sectionNumber}`);
    progressBar.style.width = progress + '%';
    progressBar.textContent = Math.round(progress) + '%';
}

// Handle next section
function nextSection() {
    if (currentSection < totalSections) {
        document.getElementById('section-' + currentSection).style.display = 'none';
        currentSection++;
        document.getElementById('section-' + currentSection).style.display = 'block';
        updateProgressBar(currentSection);
    }
}

// Handle previous section
function prevSection() {
    if (currentSection > 1) {
        document.getElementById('section-' + currentSection).style.display = 'none';
        currentSection--;
        document.getElementById('section-' + currentSection).style.display = 'block';
        updateProgressBar(currentSection);
    }
}

// Initialize the form when the page loads
window.onload = initializeForm;

// Initialize
document.getElementById('section-1').style.display = 'block';
updateProgressBar();