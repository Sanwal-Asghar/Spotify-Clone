
console.log("well come to spotify")

let songindex = 0;
let audioElement = new Audio("songs[0].filepath");
let masterPlay = document.getElementById("masterplay")
let myprogressBar = document.getElementById("myprogressBar")
let gif = document.getElementById("gif")
let mastersongname = document.getElementById("mastersongname")
let songitem = Array.from(document.getElementsByClassName("songitem"))

let songs = [
    {songName: "Jo tum mere ho", filepath: "jo tum mere ho.mpeg", coverpath: "jo tum mere hoo.jfif"},
    {songName: "Goat", filepath: "Goat.mpeg", coverpath: "Goat cover.jpg"},
    {songName: "Jhool", filepath: "Jhool.mpeg", coverpath: "jhol cover.jfif"},
    {songName: "Maxico", filepath: "Maxico.mpeg", coverpath: "Maxico cover.jpg"},
    {songName: "Dont look 2", filepath: "Dont look 2.mpeg", coverpath: "dont look 2.jpg"}
];

    songitem.forEach((element,i)=>{
     console.log(element,i)
     element.getElementsByTagName("img")[0].src = songs[i].coverpath;        
     element.getElementsByClassName("songname")[0].innerText = songs[i].songName;        

    })
// audioElement.play();

// handle play/pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
        gif.style.opacity = 1;
    }else{
         audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause")
        masterPlay.classList.add("fa-circle-play")
        gif.style.opacity = 0;
    }
    
     
})

// listen to event
audioElement.addEventListener('timeupdate',()=>{
    // update seek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100 )
    myprogressBar.value = progress;
})
myprogressBar.addEventListener("change",()=>{
    audioElement.currentTime = myprogressBar.value * audioElement.duration/100;

} )

    const makeAllPlays = ()=>{
        
        Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
         
         element.classList.remove("fa-circle-pause")
         element.classList.add("fa-circle-play")

        })
    }



Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{

         makeAllPlays();
          
          
         songindex = parseInt(e.target.id)

         e.target.classList.remove("fa-circle-play")
         e.target.classList.add("fa-circle-pause")
         audioElement.src = songs[songindex].filepath;
         mastersongname.innerHTML = songs[songindex].songName;
         audioElement.currentTime = 0;

         audioElement.play();
        
         masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
         gif.style.opacity = 1;

    })
}
)
document.getElementById("next").addEventListener("click",()=>{
      if(songindex >= 4){
        songindex = 0
      }
      else{
         songindex +=1;
      }
      audioElement.src = songs[songindex].filepath;
       mastersongname.innerHTML = songs[songindex].songName;
         audioElement.play();
         audioElement.currentTime = 0;
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
})



document.getElementById("previous").addEventListener("click",()=>{
      if(songindex <=0 ){
        songindex = 0
      }
      else{
         songindex -=1;
      }
      audioElement.src = songs[songindex].filepath;
         mastersongname.innerHTML = songs[songindex].songName;
         audioElement.play();
         audioElement.currentTime = 0;
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
})




































