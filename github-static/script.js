const el = document.querySelector("[data-toggle]");

el.addEventListener('click', e => {
	e.preventDefault();
	const attr = el.getAttribute("data-toggle");
	const target = document.querySelector(`#${attr}`);

	target.classList.toggle('actived');
});
