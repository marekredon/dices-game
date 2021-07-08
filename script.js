/* On sélectionne la vidéo */
const video = document.querySelector('video');
/* On sélectionne le bouton "video" */
const btnVideo = document.getElementById('btn-send');

/* Au clic*/ 
btnVideo.addEventListener('click', () => {
/* On affiche la video */
 video.style.visibility = 'visible';
/* On lance la video */
  video.play();
});

/* A la fin de la video, on cache la video */
// video.onended = () => {
//     video.style.visibility = 'hidden';
//   }