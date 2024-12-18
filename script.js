const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const progress = player.querySelector('.progress');
const progressFilled = player.querySelector('.progress__filled');
const skipButtons = player.querySelectorAll('[data-skip]');
const volumeSlider = player.querySelector('input[name="volume"]');
const playbackSpeedSlider = player.querySelector('input[name="playbackSpeed"]');

// Toggle play and pause
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Update play/pause button
function updateButton() {
    const icon = video.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

// Skip forward or backward
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

// Update video volume
function handleVolume() {
    video.volume = volumeSlider.value;
}

// Update video playback speed
function handlePlaybackSpeed() {
    video.playbackRate = playbackSpeedSlider.value;
}

// Handle progress bar update
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
}

// Seek in the video by clicking the progress bar
function seek(e) {
    const seekTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = seekTime;
}

// Event listeners
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
skipButtons.forEach(button => button.addEventListener('click', skip));
volumeSlider.addEventListener('input', handleVolume);
playbackSpeedSlider.addEventListener('input', handlePlaybackSpeed);
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('click', seek);
