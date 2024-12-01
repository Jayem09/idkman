// Set today's date as the default value for the start date
const today = new Date().toISOString().split('T')[0];
document.getElementById('startDate').value = today;
document.getElementById('startDate').setAttribute('min', today);
document.getElementById('endDate').setAttribute('min', today);

// Handle form submission
document.getElementById("bookingForm").onsubmit = function (event) {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Validate dates
    const startDate = new Date(data.startDate);
    const endDate = new Date(data.endDate);
    if (startDate >= endDate) {
        alert('End date must be after the start date.');
        return;
    }

    // Send data to server
    fetch('/api/book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        // Optionally redirect or show a success message
        alert('Booking successful!');
        window.location.href = 'index.html'; // Redirect to main page
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error with your booking. Please try again.');
    });
}