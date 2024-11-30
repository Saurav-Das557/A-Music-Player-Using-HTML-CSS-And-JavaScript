// Select elements
const progress = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrlIcon");
const playPauseBtn = document.getElementById("playPauseBtn");

// Set up initial metadata
song.addEventListener('loadedmetadata', () => {
    progress.max = song.duration;
    progress.value = 0;
});

// Play/Pause functionality
function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

// Add click event to play/pause button
playPauseBtn.addEventListener('click', playPause);

// Update progress bar while playing
song.addEventListener('timeupdate', () => {
    progress.value = song.currentTime;
});

// Allow seeking in the song
progress.addEventListener('input', () => {
    song.currentTime = progress.value;
    
    // Ensure play when seeking
    if (song.paused) {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
});

// Optional: Reset play button when song ends
song.addEventListener('ended', () => {
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
    progress.value = 0;
});