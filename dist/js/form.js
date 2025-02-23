document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Serialize the form data into a JSON object
        const formData = {};
        const inputs = form.querySelectorAll('input');
        inputs.forEach((input) => {
            formData[input.name] = input.value;
        });

        // Perform client-side validation if needed
        if (!isValid(formData)) {
            return;
        }

        // Send the data securely to the server (e.g., using HTTPS) or store it in a secure way
        // You can use the Fetch API or another method for sending the data

        // Redirect to another page (e.g., process.html)
        window.location.href = `successPay.html?data=${encodeURIComponent(JSON.stringify(formData))}`;
    });

    function isValid(formData) {
        // Implement your client-side validation logic here
        // Return true if the data is valid, otherwise return false
        // For example, you can validate email format or check other constraints
        return true;
    }
});
