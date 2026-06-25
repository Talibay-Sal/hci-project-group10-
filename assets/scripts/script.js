function toggleCustomTimeInput(select) {
    const customTimeInput = document.getElementById('customPickupTime');
    if (select.value === 'Other') {
        customTimeInput.style.display = 'block';
        customTimeInput.required = true; // Make it required when visible
    } else {
        customTimeInput.style.display = 'none';
        customTimeInput.required = false; // Not required if hidden
    }
}

function toggleFAQ(faqId) {
    const content = document.getElementById(`faq-${faqId}`);
    const arrow = content.previousElementSibling.querySelector('.arrow');
    
    if (content.style.display === "block") {
        content.style.display = "none"; // Hide content
        arrow.style.transform = "rotate(0deg)"; // Reset arrow
    } else {
        content.style.display = "block"; // Show content
        arrow.style.transform = "rotate(180deg)"; // Rotate arrow
    }
}
