window.onload = async () => {
	const app = document.querySelector("#app");
	const loading = document.createElement("p");
	loading.innerText = "Loading...";
	app.appendChild(loading);
	const main = async () => {
		const {
			data: {
				data: { movies : movies }
				// json명 : 변수명
			}
		} = await axios.get(
			"https://yts.lt/api/v2/list_movies.json?quality=3D"
		);

		// axios.get 이곳에다가 사용하고자하는 api 주소를 쓴다.
		movies.forEach(function(data){
			const img = document.createElement("img");
			const title = document.createElement("h1");
			const genres = document.createElement("span");
			
			const desc = document.createElement("p");
			img.src = data.medium_cover_image;
			title.innerText = data.title_long;

			genres.innerText = data.genres.join(" ");

			// data.genres.forEach(function(genre){
			// 	genreSpan = document.createElement('span');
			// 	genreSpan.innerText = genre + " ";
			// 	genres.append(genreSpan);
			// })
			desc.innerText = data.description_full;
			const card = document.createElement("p");
			card.append(img, title,genres, desc);
			
			app.appendChild(card);
		})
		app.removeChild(loading);
	};

	await main();
};


