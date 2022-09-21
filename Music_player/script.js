//  Music Player using HTML CSS JAVASCRIPT

const wrapper = document.querySelector(".wrapper"),
    musicImg = wrapper.querySelector(".img_area img"),
    musicName = wrapper.querySelector(".song_details .name"),
    musicArtist = wrapper.querySelector(".song_details .artist"),
    mainAudio = wrapper.querySelector("#main-audio"),
    playPauseBtn = wrapper.querySelector(".play_pause");

let musicIndex = 2;

window.addEventListener("load", () => {
    loadMusic(musicIndex);
});

function loadMusic(indexNumb) {
    musicName.innerText = music_list[indexNumb - 1].name;
    musicArtist.innerText = music_list[indexNumb - 1].artist;
    musicImg.src = `imgs/${music_list[indexNumb - 1].img}.jpg`;
    mainAudio.src = `assets/${music_list[indexNumb - 1].src}.m4a`;
}



function playMusic() {
    wrapper.classList.add("paused");
    mainAudio.play();
}

function pauseMusic() {
    wrapper.classList.remove("paused");
    // playPauseBtn.querySelector("i").innerHTML = "play_arrow"
    mainAudio.pause();
}

playPauseBtn.addEventListener('click', () => {
    const isMusicPause = wrapper.classList.contains("paused");
    isMusicPause ? pauseMusic() : playMusic();
});