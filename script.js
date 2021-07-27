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
// fonction donnant un chiffre aléatoire entre 0 et 5. cela permet de charger la vidéo correspondant au dé 
// sachant que 0 equivaut au dé 1 et 5 au dé 6 car le premier emplacement du tableau est l'emplacement 0.
let valueDice = Math.floor(Math.random() * faces.length);
//On affecte l'emplacement de la vidéo à point dice en fonction du lancer de dé
let pointsDice = faces[valueDice];
//On modifie la source de la vidéo grace à pointsDice
source.setAttribute('src', pointsDice)
/* La video est chargée */
video.load();
/* La video est lancée */
video.play();
/* A la fin de chaque video, on peut cacher la video avec
video.onended = () => {
  video.style.visibility = 'hidden';
  } */
	if (pointsDice == 1) {
	  if (activePlayer == player1) {
		currentP1.textContent = 0;
	  } else {
		currentP2.textContent = 0;
	  }
	  changePlayer();
	} else {
	  if (activePlayer == player1) {
		currentP1.textContent = parseInt(currentP1.textContent) + pointsDice;
	  } else {
		currentP2.textContent = parseInt(currentP2.textContent) + pointsDice;
	  }
	}
});

const changePlayer = () => {
	activePlayer.classList.remove("player active");
	activePlayer = activePlayer == player1 ? player2 : player1;
	activePlayer.classList.add(" player active");
}


 // 2. Bouton NEW GAME