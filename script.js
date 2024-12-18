document.addEventListener('DOMContentLoaded', () => {
    const player = document.querySelector('.player');
    const video = player.querySelector('.viewer');
    const toggle = player.querySelector('.toggle');
    const progress = player.querySelector('.progress');
    const progressFilled = player.querySelector('.progress__filled');
    const skipButtons = player.querySelectorAll('[data-skip]');
    const volumeSlider = player.querySelector('input[name="volume"]');
    const playbackSpeedSlider = player.querySelector('input[name="playbackSpeed"]');

    // Add event listeners and functions here
    function togglePlay() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }

    function updateButton() {
        const icon = video.paused ? '►' : '❚ ❚';
        toggle.textContent = icon;
    }

    function skip() {
        video.currentTime += parseFloat(this.dataset.skip);
    }

    function handleVolume() {
        video.volume = volumeSlider.value;
    }

    function handlePlaybackSpeed() {
        video.playbackRate = playbackSpeedSlider.value;
    }

    function updateProgress() {
        const percent = (video.currentTime / video.duration) * 100;
        progressFilled.style.width = `${percent}%`;
    }

    function seek(e) {
        const seekTime = (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = seekTime;
    }

    toggle.addEventListener('click', togglePlay);
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);
    skipButtons.forEach(button => button.addEventListener('click', skip));
    volumeSlider.addEventListener('input', handleVolume);
    playbackSpeedSlider.addEventListener('input', handlePlaybackSpeed);
    video.addEventListener('timeupdate', updateProgress);
    progress.addEventListener('click', seek);
});
