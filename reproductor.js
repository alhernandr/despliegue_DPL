const videoPlayer = document.getElementById('videoPlayer');
const audioPlayer = document.getElementById('audioPlayer');
const volumeControl = document.getElementById('volumeControl');
const progressBar = document.getElementById('progressBar');
const playlist = document.getElementById('playlist');
const videos = document.getElementById('contenido');

function playPause() {
  if (videoPlayer.paused || videoPlayer.ended) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
}

function stop() {
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
}

function rewind() {
  videoPlayer.currentTime -= 10;
}

function forward() {
  videoPlayer.currentTime += 10;
}

function goToStart() {
  videoPlayer.currentTime = 0;
}

function goToEnd() {
  videoPlayer.currentTime = videoPlayer.duration;
}

function changeVolume() {
  videoPlayer.volume = volumeControl.value;
  audioPlayer.volume = volumeControl.value;
}

function toggleFullScreen() {
  if (videoPlayer.requestFullscreen) {
    videoPlayer.requestFullscreen();
  } else if (videoPlayer.mozRequestFullScreen) {
    videoPlayer.mozRequestFullScreen();
  } else if (videoPlayer.webkitRequestFullscreen) {
    videoPlayer.webkitRequestFullscreen();
  } else if (videoPlayer.msRequestFullscreen) {
    videoPlayer.msRequestFullscreen();
  }
}

function updateProgressBar() {
  const value = (videoPlayer.currentTime / videoPlayer.duration) * 100;
  progressBar.value = value;
}

videoPlayer.addEventListener('timeupdate', updateProgressBar);

function changeMedia() {
  const selectedMedia = playlist.value;
  if (selectedMedia.endsWith('.mp4')) {
    videoPlayer.src = selectedMedia;
    videoPlayer.style.display = 'block';
    audioPlayer.style.display = 'none';
    videoPlayer.play();
  } else if (selectedMedia.endsWith('.mp3')) {
    audioPlayer.src = selectedMedia;
    audioPlayer.style.display = 'block';
    videoPlayer.style.display = 'none';
    audioPlayer.play();
  }
}

changeMedia(); // Load default media

function bleed(){
  videoPlayer.src="videos/Bleed - The Kid Laroi.mp4"
}
function tear(){
  videoPlayer.src="videos/Tear Me Apart - The Kid Laroi.mp4"
}
function heaven(){
  videoPlayer.src="videos/Heaven - The Kid Laroi.mp4"
}
function tooMuch(){
  videoPlayer.src="videos/Too Much - The Kid Laroi.mp4"
}
function alex(){
  audioPlayer.src="audios/Alex Warren - Before You Leave Me.mp3"
}
