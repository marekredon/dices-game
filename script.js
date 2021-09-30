// 1. Bouton ROLL DICE
// On sélectionne la vidéo 
const video = document.querySelector('video');
// On sélectionne la source
const source = document.querySelector('source')
// on selectionne le bouton roll
const btnVideo = document.getElementById('btn-roll');

// Variables
let activePlayer = player1;
let currentP1 = document.getElementById('currentScoreOne');
let currentP2 = document.getElementById('currentScoreTwo');

// Au clic 
btnVideo.addEventListener('click', () => {
	//liste des vidéos
	let faces = ["videos/de1.mp4", "videos/de2.mp4", "videos/de3.mp4", "videos/de4.mp4", "videos/de5.mp4", "videos/de6.mp4"];
	video.style.visibility = 'visible';
	
	let valueDice = Math.floor(Math.random() * faces.length) +1;
	//On affecte l'emplacement de la vidéo à point dice en fonction du lancer de dé
	let videoDice = faces[valueDice -1];
	//On modifie la source de la vidéo grace à pointsDice
	source.setAttribute('src', videoDice)
	/* La video est chargée */
	video.load();
	/* La video est lancée */
	video.play();
	/* A la fin de chaque video, on peut cacher la video avec
	video.onended = () => {
		video.style.visibility = 'hidden';
		} */
	if (valueDice == 1) {
	  if (activePlayer == player1) {
			currentP1.textContent = 0;
	  } else {
			currentP2.textContent = 0;
	  }
	  changePlayer();
	} else {
	  if (activePlayer == player1) {
			currentP1.textContent = parseInt(currentP1.textContent) + valueDice;
	  } else {
			currentP2.textContent = parseInt(currentP2.textContent) + valueDice;
	  }
	}
});

const changePlayer = () => {
  activePlayer.classList.remove("active");
	activePlayer.classList.add("non-active");
	activePlayer = activePlayer == player1 ? player2 : player1;
	activePlayer.classList.remove("non-active");
	activePlayer.classList.add("active");
}


 // 2. Bouton HOLD DICE
 let globalP1 = document.getElementById('globalScoreOne');
 let globalP2 = document.getElementById('globalScoreTwo');
 const hold = document.getElementById('btn-hold');
 let result = document.getElementById('result');
 const winModal = document.getElementById('winModal'); // appel de la modale de fin
 const closeModal = document.getElementById('closeModal');

 const holdDice = () => {
	if (activePlayer == player1) {
		globalP1.textContent = parseInt(globalP1.textContent) + parseInt(currentP1.textContent);
		currentP1.textContent =  0;
		globalP1.textContent >= 100 ? endGame(): changePlayer();
	} else {
		globalP2.textContent = parseInt(globalP2.textContent) + parseInt(currentP2.textContent);
		currentP2.textContent =  0;
		globalP2.textContent >= 100 ? endGame(): changePlayer();
	} 
}

 // Fin de PARTIE
const endGame = () => {
	activePlayer = (activePlayer == player1) ? player1 : player2;
	 winner.innerHTML = (activePlayer == player1 ? player1.id : player2.id) +" a gagné !";
	 winModal.style.display = "flex"; 
}

hold.addEventListener('click', holdDice);


// 3. Bouton NEW GAME
let newGame = document.getElementById('btn-new');

const zero = () => {
	if (confirm("Nouvelle partie?") == true) {   //modal qui s'éxécute avant de renouveler la partie (pas obligé)
	  globalP1.textContent = "0";
	  globalP2.textContent = "0";
	  currentP1.textContent = "0";
	  currentP2.textContent = "0";
		winModal.style.display = "none";
		if (activePlayer == player2) {
			changePlayer()
		};
	}
}

newGame.addEventListener("click", zero);

// 4 modale de winner
const winner = document.getElementById('winner');

closeModal.onclick = () => {
	winModal.style.display = "none"; 
}

window.onclick = (event) => {
	if (event.target == winModal) winModal.style.display = "none"; 
}