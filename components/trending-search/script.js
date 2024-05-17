

const movieList = [
   { title: "Turbo", subTitle: "Movies" },
   { title: "Aavesham", subTitle: "Movies" }, // Empty string for missing subtitle
   { title: "Aadujeevitham - The Goat Life", subTitle: "Movies" }, // Empty string for missing subtitle
   { title: "Perumani", subTitle: "Movies" },
   { title: "Thalavan", subTitle: "Movies" },
   { title: "Aranmanai 4", subTitle: "Movies" },
   { title: "Kingdom of the Planet of the Apes", subTitle: "Movies" },
   { title: "Varshangalkku Shesham", subTitle: "Movies" },
   { title: "Malayalee From India", subTitle: "Movies" },
];

const TrendingMovieCards = movieList.map((movie) => {
   return `<div class="bg-white rounded-lg pl-5 py-2 pr-24 w-fit shadow-sm border border-solid border-[rgb(238,238,238)]">
      <div class="mt-5 text-[17px] font-semibold text-[rgb(248,68,100)]">
         ${movie.title}
      </div>
      <div class="text-[rgb(102,102,102)] text-ellipsis text-[15px]">
         ${movie.subTitle}
      </div>
   </div>`;
});

document.getElementById("trending-movie-list").innerHTML =
   TrendingMovieCards.join("");