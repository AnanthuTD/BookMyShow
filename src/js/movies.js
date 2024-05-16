document.addEventListener("DOMContentLoaded", function () {
	const emblaNodes = document.querySelectorAll(".embla");
	emblaNodes.forEach((emblaNode) => {
		const viewportNode = emblaNode.querySelector(".embla__viewport");
		const prevBtnNode = emblaNode.querySelector(".embla__button--prev");
		const nextBtnNode = emblaNode.querySelector(".embla__button--next");

		prevBtnNode.style.display = "none";

		const emblaApi = EmblaCarousel(viewportNode, { slidesToScroll: "auto" });

		const addPrevNextBtnsClickHandlers = (
			emblaApi,
			prevBtnNode,
			nextBtnNode
		) => {
			const scrollPrev = () => {
				emblaApi.scrollPrev();
				prevBtnNode.style.display = "none";
				nextBtnNode.style.display = "block";
			};
			const scrollNext = () => {
				emblaApi.scrollNext();
				prevBtnNode.style.display = "block";
				nextBtnNode.style.display = "none";
			};

			prevBtnNode.addEventListener("click", scrollPrev);
			nextBtnNode.addEventListener("click", scrollNext);

			return () => {
				prevBtnNode.removeEventListener("click", scrollPrev);
				nextBtnNode.removeEventListener("click", scrollNext);
			};
		};

		const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
			emblaApi,
			prevBtnNode,
			nextBtnNode
		);

		emblaApi.on("destroy", removePrevNextBtnsClickHandlers);
	});
});
