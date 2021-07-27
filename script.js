// On sélectionne la vidéo 
const video = document.querySelector('video');
// On sélectionne la source
const source = document.querySelector('source')
// on selectionne le bouton roll
const btnVideo = document.getElementById('btn-roll');
// Au clic
btnVideo.addEventListener('click', () => {

//liste des vidéos
let faces = ["videos/de1.mp4", "videos/de2.mp4", "videos/de3.mp4", "videos/de4.mp4","videos/de5.mp4","videos/de6.mp4"];

// fonction donnant un chiffre aléatoire entre 0 et 5. cela permet de charger la vidéo correspondant au dé 
// sachant que 0 equivaut au dé 1 et 5 au dé 6 car le premier emplacement du tableau est l'emplacement 0.
let valueDice = Math.floor(Math.random() * faces.length);

//On affecte l'emplacement de la vidéo à point dice en fonction du lancer de dé
let pointsDice = faces[valueDice];

//On modifie la source de la vidéo grace a pointsDice
source.setAttribute('src', pointsDice)
  /* La video est chargée */
  video.load();
  /* La video est lancée */
  video.play();
});

 /* A la fin de la video, on peut cacher la video avec
 video.onended = () => {
 video.style.visibility = 'hidden';
 }
  */