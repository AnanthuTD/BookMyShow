import { events, movies, fun, laughterTherapy, popularEvent, gamesAndSports } from './data.js';

document.addEventListener("DOMContentLoaded", async () => {
	await createSlides("movies", movies, "Recomended Movies");
	await createSlides("fun", fun, "Explore Fun Activities");
	await createSlides("outdoor-events", events, "Outdoor Events");
	await createSlides("laughter-therapy", laughterTherapy, "Laughter Therapy");
	await createSlides("popular-event", popularEvent, "Popular Events");
	await createSlides(
		"games-sports",
		gamesAndSports,
		"Top Games & Sport Events"
	);

	loadScript("src/js/slides.js");

	const emblas = document.querySelectorAll(".embla");

	emblas.forEach((embla) => {
		const emblaContainers = embla.querySelectorAll(".embla__container");
		emblaContainers.forEach((emblaContainer) => {
			const slides = emblaContainer.querySelectorAll(".embla__slide");
			const prevBtnNode = embla.querySelector(".embla__button--prev");
			const nextBtnNode = embla.querySelector(".embla__button--next");

			if (slides.length <= 5) {
				prevBtnNode.style.display = "none";
				nextBtnNode.style.display = "none";
			}
		});
	});
});

document.addEventListener("DOMContentLoaded", function () {
	loadComponents(
		"header",
		"./components/header",
	);
	loadComponents(
		"footer",
		"./components/footer",
		"./components/footer/script.js"
	);
	loadComponents(
		"trending-search",
		"./components/trending-search",
		"./components/trending-search/script.js"
	);
});

async function loadComponents(id, componentPath, scriptUrl) {
	const component = await fetch(componentPath).then((data) => data.text());
	if (!component) return;
	const node = document.getElementById(id);
	node.innerHTML = component;
	if (scriptUrl) loadScript(scriptUrl);
}

function loadScript(url) {
	const script = document.createElement("script");
	script.src = url;
	document.body.appendChild(script);
}


async function createSlides(id, content = [], title) {
	const componentString = await fetch("components/slide").then((data) =>
		data.text()
	);

	const component = new DOMParser().parseFromString(
		componentString,
		"text/html"
	);

	component.querySelector("h2").innerHTML = title;

	const eventComponents = content.map((event) => {
		return `<div class="embla__slide">
                     <div class="w-[222.400px] hover:cursor-pointer">
                        <div class="embla__slide__number flex">
                           <img
                              class="h-full w-full"
                              src="${event.imgSrc}"
                           />
                        </div>
                        <div
                           class="mt-5 text-[17px] font-semibold text-[rgb(34,34,34)] mb-2 text-ellipsis line-clamp-2"
                        >
                           ${event.title}
                        </div>
                        <div
                           class="text-[rgb(102,102,102)] text-ellipsis text-[15px]"
                        >
                           ${event.location}
                        </div>
                     </div>
            </div>`;
	});
	component.querySelector(".embla__container").innerHTML =
		eventComponents.join(" ");

	document.getElementById(id).innerHTML = component.body.innerHTML;
}
