console.log("welcome to spotify");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio("C:/Users/Shree/.vscode/projects/music/images/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songs = [
    { songName: "Slient music - Alan Walker", filePath: "C:/Users/Shree/.vscode/projects/music/images/1.mp3", coverPath: "C:/Users/Shree/.vscode/projects/music/images/cover.jpg" },
    { songName: "Spectar - Alan Walker", filePath: "C:/Users/Shree/.vscode/projects/music/images/2.mp3", coverPath: "C:/Users/Shree/.vscode/projects/music/images/cover.jpg" },
    { songName: "Let me Love you - justin Beiber", filePath: "C:/Users/Shree/.vscode/projects/music/images/3.mp3", coverPath: "C:/Users/Shree/.vscode/projects/music/images/cover.jpg" },
    { songName: "Rolex South BGM", filePath: "C:/Users/Shree/.vscode/projects/music/images/4.mp3", coverPath: "C:/Users/Shree/.vscode/projects/music/images/cover.jpg" },
    { songName: "cartone on cartone - Alan Walker", filePath: "C:/Users/Shree/.vscode/projects/music/images/5.mp3", coverPath: "C:/Users/Shree/.vscode/projects/music/images/cover.jpg" },
]

// audioElement.play()

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})

//listen to Events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //update seekbar
})