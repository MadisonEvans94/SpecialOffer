document.addEventListener("DOMContentLoaded", function () {
	const form = document.querySelector(".form-container");
	const background = document.querySelector(".background");
	const title = document.querySelector(".title");
	const description = document.querySelector(".description");

	form.addEventListener("submit", function (event) {
		event.preventDefault();

		if (form.checkValidity()) {
			background.style.backgroundImage = "none";
			background.style.backgroundColor = "#90ee90";
			form.reset();

			// Update text color to black
			title.style.color = "black";
			description.style.color = "black";

			// Create and append the confirmation message
			const confirmationMessage = document.createElement("span");
			confirmationMessage.classList.add("confirmation-message");
			confirmationMessage.textContent = "Your handle has been reserved!";
			form.appendChild(confirmationMessage);

			// Remove the confirmation message after a delay
			setTimeout(function () {
				confirmationMessage.remove();
			}, 3000);
		}
	});
});
