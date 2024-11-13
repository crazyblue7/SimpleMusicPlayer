// List of tracks in the LocalAccessMusic folder
const tracks = [
    "LocalAccessMusic/Mas que nada (i like this version).mp3"
];

let currentTrackIndex = 0;
const audioPlayer = document.getElementById('audio-player');
const trackName = document.getElementById('track-name');

// Load the current track
function loadTrack(index) {
    audioPlayer.src = tracks[index];
    let trackDisplayName = tracks[index].split('/').pop().replace('.mp3', '');
    trackName.innerText = trackDisplayName;
    audioPlayer.load();
}

// Play the next track
function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audioPlayer.play();
}

// Play the previous track
function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audioPlayer.play();
}

// Initialize the player with the first track
loadTrack(currentTrackIndex);
