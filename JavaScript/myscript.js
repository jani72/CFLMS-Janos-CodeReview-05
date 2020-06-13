//const songs = JSON.parse(data);
const songs = data
let container = document.querySelector(".container");

for(let i = 0; i<songs.length; i++)
{
	container.innerHTML += `
	<div class="songs">
		<div class="picture">
			<img src="${songs[i].cover}" alt="picture" >
		</div>
		<div class="content">
			<div class="title">
				<h3>${songs[i].title}</h3>
			</div>
			<div class="text">
				<p>${songs[i].artist}</p>
				<p>${songs[i].publish}</p>
				<p>${songs[i].chart}</p> 
				
			</div>
			

			<div class="counter-row">
				<button class="like" type="button" onclick="return incrementLikes('${songs[i].ID}')">Like</button>
				<span class="counter" id="counter_${songs[i].ID}">${songs[i].likes}</span> 
			</div
		</div>
	</div>
	`;
}

function incrementLikes(ID)
{
	let elem = document.querySelector("#counter_" + ID);
	let value = parseInt(elem.innerHTML);
	elem.innerHTML = value + 1;
}