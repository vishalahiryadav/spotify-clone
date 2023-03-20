let masterPlay = document.getElementById('masterPlay');
let music = new Audio('songs/1.mp3');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));
let next = document.getElementById("next");
let previous = document.getElementById("previous");

let index = 0;
let songs = [
    { img: "covers/1.jpg", name: "song1", songName: "songs/0.mp3", time: "3:54" },
    { img: "covers/2.jpg", name: "song2", songName: "songs/1.mp3", time: "4:36" },
    { img: "covers/3.jpg", name: "song3", songName: "songs/2.mp3", time: "5:23" },
    { img: "covers/4.jpg", name: "song4", songName: "songs/3.mp3", time: "6:53" }
]

songItems.forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].img;
    e.getElementsByClassName('songName')[0].innerHTML = songs[i].name;
});


masterPlay.addEventListener('click', () => {
    if (music.paused && music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else if (music.paused && music.currentTime >= 0) {
        music.play().currentTime;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        music.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }

});

setInterval(() => {
    let progress = parseInt(music.currentTime / music.duration * 100);
    myProgressBar.value = progress;
}, 1000);

myProgressBar.addEventListener('change', () => {
    music.currentTime = myProgressBar.value * music.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


songItemPlay.forEach((element, i) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        index = parseInt(e.target.id);
        music.src = songs[i].songName;
        masterSongName.innerText = songs[index].songName;
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            music.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        
            // if(music.paused && music.currentTime <= 0){
        //     e.target.classList.remove('fa-play-circle');
        //     e.target.classList.add('fa-pause-circle');
        //     music.currentTime = 0;
        //     music.play();
        //     masterPlay.classList.remove('fa-play-circle');
        //     masterPlay.classList.add('fa-pause-circle');
        
        // }else if(music.paused && music.currentTime >= 0){
        //     e.target.classList.remove('fa-play-circle');
        //     e.target.classList.add('fa-pause-circle');
        //     music.play().currentTime;
        //     masterPlay.classList.remove('fa-play-circle');
        //     masterPlay.classList.add('fa-pause-circle');
        
        // }else if(index == e.target.id && music.played){
        //     music.pause();
        //     e.target.classList.remove('fa-pause-circle');
        //     e.target.classList.add('fa-play-circle');
        //     gif.style.opacity = 0;
        //     masterPlay.classList.remove('fa-pause-circle');
        //     masterPlay.classList.add('fa-play-circle');
        // }else{
        //     console.log("jai hind");
        // }
        
    });
});

next.addEventListener('click', () => {
    if (index == 3) {  // or if(index >= 3){
        index = 0;
    } else {
        index += 1;
    }
    music.src = songs[index].songName;
    masterSongName.innerText = songs[index].songName;
    music.currentTime = 0;
    music.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

previous.addEventListener('click', () => {
    if (index == 0) {  // or if(index >= 0){
        index = 3;
    } else {
        index -= 1;
    }
    music.src = songs[index].songName;
    masterSongName.innerText = songs[index].songName;
    music.currentTime = 0;
    music.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});