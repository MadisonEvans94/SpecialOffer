document.addEventListener("DOMContentLoaded", function () {
	const form = document.querySelector(".form-container");
	const background = document.querySelector(".background");

	form.addEventListener("submit", function (event) {
		event.preventDefault();

		if (form.checkValidity()) {
			background.style.backgroundImage = "none";
			background.style.backgroundColor = "#90ee90";
			form.reset();

			// Create and append the confirmation message
			const confirmationMessage = document.createElement("span");
			confirmationMessage.classList.add("confirmation-message");
			confirmationMessage.textContent = "Your handle has been reserved!";
			form.appendChild(confirmationMessage);

			// Remove the confirmation message after a delay (e.g., 3 seconds)
			setTimeout(function () {
				confirmationMessage.remove();
			}, 3000);
		}
	});
});
