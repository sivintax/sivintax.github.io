document.querySelector('.php-email-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Show the loading message
  var loadingMessage = document.querySelector('.loading');
  loadingMessage.style.display = 'block';

  // Disable the submit button while submitting
  var submitButton = document.querySelector('button[type="submit"]');
  submitButton.disabled = true;

  // Simulate form submission delay with setTimeout
  setTimeout(function() {
    // Check if there was an internet connectivity issue
    var isInternetError = Math.random() < 0.5; // Simulating a random chance of internet error (50% chance)

    // Hide the loading message
    loadingMessage.style.display = 'none';

    if (isInternetError) {
      // Show the error message
      var errorMessage = document.querySelector('.error-message');
      errorMessage.style.display = 'block';
    } else {
      // Show the success message
      var successMessage = document.querySelector('.sent-message');
      successMessage.style.display = 'block';

      // Reset the form data
      document.querySelector('.php-email-form').reset();
    }
	      // Refresh the page after a delay (3 seconds)
      setTimeout(function() {
        window.location.reload();
      }, 3000);

    // Re-enable the submit button
    submitButton.disabled = false;
  }, 2000); // Delay of 2000 milliseconds (2 seconds)
});




 function submitForm(event) {
	   console.log('Form submitted');
    event.preventDefault(); // Prevent the form from submitting normally

    var form = event.target;
    var formData = new FormData(form);

     fetch(form.action, {
      method: 'POST',
      body: formData
    })

  }
  