document.addEventListener("DOMContentLoaded", function () {
	const form = document.querySelector(".form-container");
	const pageContainer = document.querySelector(".page-container");

	form.addEventListener("submit", function (event) {
		if (form.checkValidity()) {
			event.preventDefault();
			pageContainer.style.backgroundImage = "none";
			pageContainer.style.backgroundColor = "#90ee90";
			form.reset();
		}
	});
});
