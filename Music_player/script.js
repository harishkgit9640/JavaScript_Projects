//  Music Player using HTML CSS JAVASCRIPT

const wrapper = document.querySelector(".wrapper"),
    musicImg = wrapper.querySelector(".img_area img"),
    musicName = wrapper.querySelector(".song_details .name"),
    musicArtist = wrapper.querySelector(".song_details .artist"),
    mainAudio = wrapper.querySelector("#main-audio"),
    playPauseBtn = wrapper.querySelector(".play_pause"),
    play_icon = wrapper.querySelector('.play_pause i'),
    preBtn = wrapper.querySelector("#prev"),
    nextBtn = wrapper.querySelector("#next"),
    progressBar = wrapper.querySelector(".progress_bar"),
    progressArea = wrapper.querySelector(".progress_area"),
    playLoop = wrapper.querySelector('#repeat');


let musicIndex = 2;


// Load Music function
window.addEventListener("load", () => {
    loadMusic(musicIndex);
});

function loadMusic(indexNumb) {
    musicName.innerText = music_list[indexNumb - 1].name;
    musicArtist.innerText = music_list[indexNumb - 1].artist;
    musicImg.src = `imgs/${music_list[indexNumb - 1].img}.jpg`;
    mainAudio.src = `assets/${music_list[indexNumb - 1].src}.m4a`;
}


// play Function
function playMusic() {
    wrapper.classList.add("paused");
    play_icon.classList.add('active');
    mainAudio.play();
}

// Pause Function
function pauseMusic() {
    wrapper.classList.remove("paused");
    play_icon.classList.remove('active');
    mainAudio.pause();
}


// pre btn Function
function preMusic() {
    musicIndex--;
    musicIndex < 1 ? musicIndex = music_list.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}
// next btn Function
function nextMusic() {
    musicIndex++;
    musicIndex > music_list.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}


// play pause click function
playPauseBtn.addEventListener('click', () => {
    const isMusicPause = wrapper.classList.contains("paused");
    isMusicPause ? pauseMusic() : playMusic();
});


// call the preMusic function
preBtn.addEventListener('click', () => {
    preMusic();
});

// call the nextMusic function
nextBtn.addEventListener('click', () => {
    nextMusic();
});

mainAudio.addEventListener('timeupdate', (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`


    let musicCurrentTime = wrapper.querySelector('.current'),
        musicDuration = wrapper.querySelector('.duration');

    mainAudio.addEventListener('loadeddata', () => {
        let audioDuration = mainAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if (totalSec < 10) {
            totalSec = `0${totalSec}`;
        }
        musicDuration.innerHTML = `${totalMin}:${totalSec}`;

    });

    let totalMin = Math.floor(currentTime / 60);
    let totalSec = Math.floor(currentTime % 60);
    if (totalSec < 10) {
        totalSec = `0${totalSec}`;
    }
    musicCurrentTime.innerHTML = `${totalMin}:${totalSec}`;

});

// update playing song according to the user
progressArea.addEventListener('click', (e) => {
    let progressWidthVal = progressArea.clientWidth;
    let clickedOffSetX = e.offsetX;
    let songDuration = mainAudio.duration;

    mainAudio.currentTime = (clickedOffSetX / progressWidthVal) * songDuration;
    playMusic();
});


// repeat, shuffle song according to the icon

const repeatBtn = wrapper.querySelector('#repeat');

repeatBtn.addEventListener('click', () => {
    playLoop.classList.add('repeat');
});
