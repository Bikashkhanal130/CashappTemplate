document.addEventListener('DOMContentLoaded', function () {
    const outputDiv = document.getElementById('output');

    // Retrieve the form data from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const formDataParam = urlParams.get('data');

    if (formDataParam) {
        try {
            // Parse the JSON data from the query parameter
            const formData = JSON.parse(decodeURIComponent(formDataParam));

            // Display the form data on the processing page
            outputDiv.innerHTML = `
            <p class="fw-semibold">${formData.sender} <br>Payment to ${formData.reciever} <br> Purpose : ${formData.purpose}</p>
            <p class="lead">You have Successfully sent $${formData.amount} USD</p>
            <p><i class="bi bi-check-circle-fill text-success"></i> <br> Completed</p>
            <p class="lead text-center">Transaction will be made in a few minutes. It may take a few minutes.</p>
            `;
        } catch (error) {
            console.error('Error parsing form data:', error);
        }
    } else {
        outputDiv.innerHTML = '<p>No data received.</p>';
    }
});
