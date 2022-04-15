// storing Songs
var songs={
movie:["kgf","kgf","kgf","kgf","99","kgf-2","kgf-2","kgf-2"],
source:["audio/Dheera Dheera.mp3","audio/Garbadhi.mp3","audio/Jokae Song.mp3","audio/Salaam Rocky Bhai.mp3","audio/Aagide Aagide.mp3","audio/Gagana Nee.mp3","audio/Toofan.mp3","audio/Sulthana.mp3"],
songname:["Dheera Dheera","Garbadhi","Jokae","Salaam Rocky Bhai","Aagide Aagide","Gagana Nee","Toofan","Sulthana"]
}

// Display song list
var myAudio = new Audio("audio/Dheera Dheera.mp3");
var songDisplay = "";
for(var i=0;i<songs.movie.length;i++){
  songDisplay+="<div class='song-item'>\
    <img src=images/"+ songs.movie[i]+".jfif alt='movie-image'>\
    <h2>Movie-name "+songs.movie[i]+"</h2>\
    <h3>Song-name: "+songs.songname[i]+"</h3>\
    <a  name='Play' href ='#' class="+i+">Play</a>\
  </div>";
}
document.querySelector("#song-display").innerHTML=songDisplay;
playClick();
playNext();
playPrevious();
// Change Song functionality

var playButtonList = document.querySelectorAll(".song-item a");
for(var i=0;i<playButtonList.length;i++){
  playButtonList[i].addEventListener("click",function(){
    index = this.classList;
    document.querySelector("#playing").innerHTML="<div class='play-space'>\
      <img src=images/"+songs.movie[index]+".jfif alt='movie-image'>\
      <div class='music-control'>\
      <i class='fa fa-backward music-control play-previous' ></i>\
      <i class='fa fa-play music-control play-button'></i>\
      <i class='fa fa-forward music-control play-next' ></i>\
       </div>\
      <h2>Movie-name:"+songs.movie[index]+"</h2>\
      <h3>Song-name: "+songs.songname[index]+"</h3>\
    </div>";
    myAudio.src=songs.source[index];
    playClick();
    myAudio.play();
    playNext();
    playPrevious();
    document.querySelector(".play-button").classList.add("fa-pause");
  });
}

// playing Music functionality

function playClick(){
  document.querySelector(".play-button").addEventListener("click",function(){

      if(myAudio.paused==true){
        myAudio.play();
        this.classList.add("fa-pause");
        console.log(myAudio);
      }
      else{
        myAudio.pause();
        this.classList.remove("fa-pause");
      }


  });

}

// next and previous Song
function playNext(){
  document.querySelector(".play-next").addEventListener("click",function(){
      var nxtSong = Math.floor(Math.random()*songs.movie.length);
      myAudio.src = songs.source[nxtSong];
      myAudio.play();
      document.querySelector("#playing").innerHTML="<div class='play-space'>\
        <img src=images/"+songs.movie[nxtSong]+".jfif alt='movie-image'>\
        <div class='music-control'>\
        <i class='fa fa-backward music-control play-previous' ></i>\
        <i class='fa fa-play music-control play-button'></i>\
        <i class='fa fa-forward music-control play-next' ></i>\
         </div>\
        <h2>Movie-name:"+songs.movie[nxtSong]+"</h2>\
        <h3>Song-name: "+songs.songname[nxtSong]+"</h3>\
      </div>";
      playClick();
      playNext();
      playPrevious();
      document.querySelector(".play-button").classList.add("fa-pause");
});
}

function playPrevious(){
  document.querySelector(".play-previous").addEventListener("click",function(){
      var nxtSong = Math.floor(Math.random()*songs.movie.length);
      myAudio.src = songs.source[nxtSong];
      myAudio.play();
      document.querySelector("#playing").innerHTML="<div class='play-space'>\
        <img src=images/"+songs.movie[nxtSong]+".jfif alt='movie-image'>\
        <div class='music-control'>\
        <i class='fa fa-backward music-control play-previous' ></i>\
        <i class='fa fa-play music-control play-button'></i>\
        <i class='fa fa-forward music-control play-next' ></i>\
         </div>\
        <h2>Movie-name:"+songs.movie[nxtSong]+"</h2>\
        <h3>Song-name: "+songs.songname[nxtSong]+"</h3>\
      </div>";
      playClick();
      playNext();
      playPrevious();
      document.querySelector(".play-button").classList.add("fa-pause");
});
}
