const video = document.querySelector('.flex');
const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');

speed.addEventListener('mousemove', function(e) {
  const y = e.pageY - speed.offsetTop;
  const percent = y / speed.offsetHeight;
  const min = 0.5; // Minimum playback speed
  const max = 2.0; // Maximum playback speed
  const height = Math.round(percent * 100) + '%';
  const playbackRate = percent * (max - min) + min;
  speedBar.style.height = height;
  speedBar.textContent = playbackRate.toFixed(2) + '×';
  video.playbackRate = playbackRate;
});
