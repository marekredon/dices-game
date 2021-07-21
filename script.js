/* On sélectionne la vidéo */
const video = document.querySelector('video');
/* On sélectionne le bouton "video" */
const btnVideo = document.getElementById('btn-roll');
/* Au clic*/ 
btnVideo.addEventListener('click', () => {
/* On affiche la video */
 video.style.visibility = 'visible';
/* La video est lancée */
  dice();
  video.play();
});
/* A la fin de la video, on peut cacher la video avec */
// video.onended = () => {
//  video.style.visibility = 'hidden';
// }


// const roll = document.getElementById('btn-roll'); ligne à supprimer
let faces = ["videos/1.mp4", "videos/2.mp4", "videos/3.mp4", "videos/4.mp4","videos/5.mp4","videos/6.mp4"];

// fonction donnant un chiffre aléatoire entre 1 et 6 et associé au dé
const dice = () => {
  let valueDice = Math.floor(Math.random() * faces.length);
  let pointsDice = faces.indexOf(faces[dice]) + 1;
// affichage des videos correspondantes
//lignes à supprimer ci-dessous
// }
// roll.addEventListener('click', dice);

};
  





