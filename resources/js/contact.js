// Grab the form
const contactForm = document.querySelector('form[name="contact"]');

// Grab all the services checkboxes
const serviceCheckboxes = document.querySelectorAll('input[name="services"]');

// Grab the hidden field
const hiddenServicesField = document.getElementById('services_list');

/**
 * Update hidden field with only selected services as bullet list
 */
function updateServicesHiddenField() {
  const selected = Array.from(serviceCheckboxes)
    .filter(cb => cb.checked)
    .map(cb => `- ${cb.value}`); // bullet formatting

  hiddenServicesField.value = selected.join('\n'); // Join bullets with single newline
}

// Listen for checkbox changes
serviceCheckboxes.forEach(cb => cb.addEventListener('change', updateServicesHiddenField));

// Ensure hidden field is updated before submitting
contactForm.addEventListener('submit', updateServicesHiddenField);

// Initialize hidden field on page load
updateServicesHiddenField();
