function passwordVisibility(toggleEl, fieldId, showId, hideId) {
	const field = document.getElementById(fieldId);
	const showPass = document.getElementById(showId);
	const hidePass = document.getElementById(hideId);
	
	hidePass.classList.remove("d-none");
	
	if (field.type === "password") {
		field.type = "text";
		showPass.style.display = "none";
		hidePass.style.display = "block";
		toggleEl.setAttribute("aria-label", "Hide password");
		toggleEl.setAttribute("aria-pressed", "true");
	} else {
		field.type = "password";
		showPass.style.display = "block";
		hidePass.style.display = "none";
		toggleEl.setAttribute("aria-label", "Show password");
		toggleEl.setAttribute("aria-pressed", "false");
	}
}
