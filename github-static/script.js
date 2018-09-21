const elements = document.querySelectorAll("[data-toggle]");

elements.forEach( el => {
	el.addEventListener('click', e => {
		e.preventDefault();
		const attr = el.getAttribute("data-toggle"); // Manter um padrão se vai usar "" ou ''
		const target = document.querySelector(`#${attr}`); // Aqui ta fixo o id, sendo assim, da tranquilo pra usar um document.getElementById(attr)
		
		el.classList.toggle('actived');
		target.classList.toggle('actived');
		// Da pra eliminar essas linhas assim que nao são usadas
	});
}) // Manter um padrão se vai usar ";" ou não
