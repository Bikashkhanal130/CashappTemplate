document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form values
        const amount = document.getElementById("amount").value;

        // You can perform client-side validation here if needed

        // Send the data to the server (you can use AJAX for this)

        // Display the submitted data on the same page
        resultDiv.innerHTML = `
            <p>You have Successfully withdrawl $${amount}. It may take a few minutes.</p>
            <p>Thank You <i class="bi bi-balloon-heart"></i></p>
        `;

        // Clear the form
        form.reset();
    });
});
