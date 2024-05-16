import { addPrevNextBtnsClickHandlers } from "./EmblaCarouselArrowButtons.js";
import { addDotBtnsAndClickHandlers } from "./EmblaCorouselDotButton.js";
import Autoplay from "./autoPlay.js";
document.addEventListener("DOMContentLoaded", function () {
	const emblaNode = document.querySelector(".embla_banner");
	const viewportNode = emblaNode.querySelector(".embla__viewport_banner");
	const prevBtnNode = emblaNode.querySelector(".embla__button_banner--prev");
	const nextBtnNode = emblaNode.querySelector(".embla__button_banner--next");
	const dotsNode = emblaNode.querySelector(".embla__dots");

	const emblaApi = EmblaCarousel(viewportNode, { loop: true }, [Autoplay()]);

	const onNavButtonClick = (emblaApi) => {
		const autoplay = emblaApi?.plugins()?.autoplay;
		if (!autoplay) return;

		const resetOrStop =
			autoplay.options.stopOnInteraction === false
				? autoplay.reset
				: autoplay.stop;

		resetOrStop();
	};

	addPrevNextBtnsClickHandlers(emblaApi, prevBtnNode, nextBtnNode);

	const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
		emblaApi,
		prevBtnNode,
		nextBtnNode,
		onNavButtonClick
	);
	const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
		emblaApi,
		dotsNode,
		onNavButtonClick
	);

	emblaApi.on("destroy", removePrevNextBtnsClickHandlers);
	emblaApi.on("destroy", removeDotBtnsAndClickHandlers);
});
