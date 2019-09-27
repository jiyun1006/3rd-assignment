window.onload = async () => {
	const app = document.querySelector("#app");
	const loading = document.createElement("p");
	loading.innerText = "Loading...";
	app.appendChild(loading);
	const main = async () => {
		const {
			data: {
				data: { movies : data }
				// json명 : 변수명
			}
		} = await axios.get(
			"https://yts.lt/api/v2/list_movies.json?quality=3D"
		);

		// axios.get 이곳에다가 사용하고자하는 api 주소를 쓴다.

		console.log(data);
		const title = document.createElement("p");
		const img = document.createElement("img");
		const desc = document.createElement("p");
		title.innerText = data[0].title_long;
		img.src = data[0].medium_cover_image;
		desc.innerText = data[0].description_full;
		const card = document.createElement("p");
		card.append(img, title, desc);
		app.removeChild(loading);
		app.appendChild(card);
	};

	await main();
};


