const elements = document.querySelectorAll("[data-toggle]");

elements.forEach( el => {
	el.addEventListener('click', e => {
		e.preventDefault();
		el.classList.toggle('actived');
		document.getElementById(el.getAttribute('data-toggle')).classList.toggle('actived');
	});
});
