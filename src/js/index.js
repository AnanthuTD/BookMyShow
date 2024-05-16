document.addEventListener("DOMContentLoaded", () => {
	const emblas = document.querySelectorAll(".embla");

	emblas.forEach((embla) => {
		const emblaContainers = embla.querySelectorAll(".embla__container");
		console.log(emblaContainers);
		emblaContainers.forEach((emblaContainer) => {
			const slides = emblaContainer.querySelectorAll(".embla__slide");
			const prevBtnNode = embla.querySelector(".embla__button--prev");
			const nextBtnNode = embla.querySelector(".embla__button--next");

			console.log(slides);

			if (slides.length <= 5) {
				prevBtnNode.style.display = "none";
				nextBtnNode.style.display = "none";
			}
		});
	});
});
