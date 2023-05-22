document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector(".form-container");
	const background = document.querySelector(".background");
	const title = document.querySelector(".title");
	const description = document.querySelector(".description");

	form.addEventListener("submit", (event) => {
		event.preventDefault();

		if (form.checkValidity()) {
			background.style.backgroundImage = "none";
			background.style.backgroundColor = "var(--blue)";
			form.reset();

			title.style.color = "var(--black)";
			description.style.color = "var(--black)";

			const confirmationMessage = document.createElement("span");
			confirmationMessage.classList.add("confirmation-message");
			confirmationMessage.textContent = "Your handle has been reserved!";
			form.appendChild(confirmationMessage);

			setTimeout(() => {
				confirmationMessage.remove();
			}, 3000);
		} else {
			// Display an error message or handle the invalid form input
			alert("Please fill in all fields correctly");
		}
	});
});
