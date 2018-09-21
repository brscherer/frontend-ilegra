const elements = document.querySelectorAll("[data-toggle]");

elements.forEach( el => {
	el.addEventListener('click', e => {
		e.preventDefault();
		const attr = el.getAttribute("data-toggle");
		const target = document.querySelector(`#${attr}`);
		
		el.classList.toggle('actived');
		target.classList.toggle('actived');

	});
})
