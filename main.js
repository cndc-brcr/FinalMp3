const songs = [
  "Audios/[Lyrics] Luke Chiang - Home.mp3", // Replace with the actual file paths
  "Audios/[Lyrics] Paragraphs - Luke Chiang.mp3",
  "Audios/BINI - _Lagi_ Color-coded Lyrics.mp3",
  "Audios/BINI - Salamin Salamin (Lyrics).mp3", 
  "Audios/bini_pantropiko_lyrics_mp3_30602.mp3", // Replace with the actual file paths
  "Audios/Huwag Muna Tayong Umuwi - BINI (Color Coded Lyrics).mp3",
  "Audios/JHIN - Blue Butterflies.mp3",
  "Audios/JHIN - Heavenmade (Official Music Video).mp3", 
  "Audios/luke chiang  - used to me (lyric video).mp3", // Replace with the actual file paths
  "Audios/Luke Chiang - May I Ask (ft. Alexis Kim)  Lyric Video.mp3",
  "Audios/Pink Sweat$ - Call Me.mp3",
  "Audios/Pink Sweat$ - Coffee (Lyrics).mp3", 
  "Audios/Pink Sweat$ - Guitar [Official Audio].mp3", // Replace with the actual file paths
  "Audios/Pink Sweat$ - Run Through Fire [Official Audio].mp3",
  "Audios/shae - Half of Me (official lyric video) [mvM0hLbLMzw].mp3",
  "Audios/shae, WIMY - Anybody (official lyric video).mp3", 
  "Audios/SIMPLE.mp3"
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById("audioPlayer");

// Load the first song initially
audioPlayer.src = songs[currentSongIndex];

// Auto-play the next song when the current song ends
audioPlayer.addEventListener("ended", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop back to the first song
  audioPlayer.src = songs[currentSongIndex];
  audioPlayer.play(); // Automatically play the next song
});

// Play a specific song when triggered
function playSong(songIndex) {
  currentSongIndex = songIndex;
  audioPlayer.src = songs[currentSongIndex];
  audioPlayer.play();
}

// Toggle visibility of songs in an album 
function toggleSongs (albumId) {
  const album = document.getElementById (albumId);
  album.style.display = album.style.display === 'block' ? 'none' : 'block';
}

// Play the selected song 
function playSong (song) {
  const autoPlayer = document.getElementById ('audioPlayer');
  audioPlayer.src = song;
  audioPlayer.play();
}