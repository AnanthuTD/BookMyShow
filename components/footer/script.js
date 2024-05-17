// document.addEventListener("DOMContentLoaded", () => {
	const data = {
		"Movies Now Showing in Kochi": [
			"Gutuntycorarobala Nadayil Sureshanteyum Sumatathayudeyam Hrudayshadyaya Pranayakadia",
			"Anvesham",
			"Malayalee Froon Jodie",
			"Marwillin Gopurangat",
			"Vanihangallika Sheshum",
			"Kingdom of the Planet of the Apes",
			"The Garfield Movie",
			"Perumani - Paul Caretaker",
		],
		upcomingInKochi: [
			"Guardian Angel",
			"Kiraathaka 2",
			"Je Jatt Vigarh Oya",
			"Bhondis",
			"Darshini",
			"The Surt",
			"Padikkadha Packangal Karmavirayan",
			"Switch (Case",
			"Dil Lagil Dupatta Wall Se",
		],
		genres: [
			"Drama Movies",
			"Comedy Movies",
			"Thiller Movies",
			"Action Movies",
			"Advertune Movies",
			"Horror Mowes",
			"Romatitic Moves",
			"Sci Fi Movies",
			"Come Movies",
			"Adaptation Movies",
		],
		languages: [
			"Movies in Malayalam",
			"Movies in English",
			"Movies in Tamil",
			"Movies in Hell", // Likely a typo, assuming Hindi instead
			"Moviesin Khan", // Likely a typo, assuming this category is empty
			"Movies in Assamese",
			"Mostes in Nepali",
			"Movies in French",
			"Movies in Konkan",
			"Moxies in Portuguese",
		],

		sportsInKochi: [
			"Chiclist",
			"Archery",
			"Attiletics",
			"Badminton",
			"Basketball",
			"Baseball",
			"Boat Race",
			"Bowling",
			"Boxing",
			"Card Games",
		],
		cities: [
			"Events in Mumbai",
			"Events in Delhi-NCR",
			"Events in Chermal",
			"Events in Bengalune",
			"Events in Hyderabait",
			"Events in Pune",
			"Eventa in Ahmedabad",
			"Events in Kolkata",
			"Evento 10 Kochi",
		],

		cinemas: [
			"Cinemas in Mumbai",
			"Cinemas in tehHNCR", // Likely a typo, assuming this category is empty
			"Cinemas in chennal",
			"Cinemas in Bengaluru",
			"Memas in Hyderabad", // Likely a typo, assuming this category is empty
			"Cinemas in Pune",
			"Cinemas in Almedabad",
			"Nema in Kolkata", // Likely a typo, assuming this category is empty
			"Cinemas in Koch",
		],
		showingInTopCities: [
			"Plays in Mumbai",
			"Plays in Delhi NCR",
			"Plays in Chennial",
			"Plays in Bengaluru",
			"Flays in Hyderabad",
			"Plays in Pune",
			"Plays in Ahmedabad",
			"Plays in Kolkata",
			"Plays in Kochi",
		],
		activities: [
			"Activities in Mumbai",
			"Activities in Delhi-NCR",
			"Activities in Chennai",
			"Activities in Bengaluru",
			"Activities in Hydentiad",
			"Activities in Pune",
			"Activities in Ahmedabad",
			"Activities in Kolkata",
			"Activities in Kochi",
		],
		countries: ["Indonesia", "Singapore", "UAE", "Sn Lanka", "West Indies"],
	};
	let footerMisc = ``;

	for (const key in data) {
		footerMisc += `
   <div class="w-full">
   <div style="font-size: 12px;
   line-height: 1.1;
   font-weight: 400;
   letter-spacing: 0.1px;
   text-transform: uppercase;
   margin: 20px 0px 20px;
   color: rgb(165, 165, 165);" >
   ${key}
   </div>
   <div class="flex flex-wrap">`;
		data[key].forEach((value) => {
			footerMisc += `<a class="hover:text-white text-[rgb(127,127,127)]"
      href = "#"
      style="font-size: 11px;
      letter-spacing: 0.1px;
      transition: color 0.25s ease-in-out 0s;
      margin: 0px 5px 5px 0px;
      padding-right: 5px;
      border-right: 1px solid rgb(127, 127, 127);"
      >${value}</a>`;
		});
		footerMisc += `</div>
   </div>`;
	}

	document.getElementById("footer-misc").innerHTML = footerMisc;
// });
