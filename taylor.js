$(function(){
  $('.cat').draggable();
});

$(document).ready(function() {
  loadData();
})

function TaylorHit(name, views, video) {
    this.name = name;
    this.views = views;
    this.video = video;
}

function intoList(song) {
    return " " + song.name + " " + song.views + " " + song.video + " ";
  }

var oneSong = document.createElement("li");                 // Create a <li> node
var textnode = document.createTextNode(intoList());         // Create a text node


function loadData(songs) {
  for (i = 0; i < Songs.length; i++) {
    oneSong.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("unsorted").appendChild(oneSong); 
  }
}

var Songs = [
    {"name" : "22", "views" :  213507122, "video" :"youtubelink"},
    {"name" : "You Belong With Me", "views" : 375570552, "video" :"youtubelink"},
    {"name" : "White Horse", "views" :80765302, "video" : "youtubelink"},
    {"name" : "Mean", "views" : 93379046, "video" : "youtubelink"},
    {"name" : "Blank Space", "views" : 381752997, "video" : "youtubelink"},
    {"name" : "I Knew You Were Trouble", "views" : 215056550, "video" : "youtubelink"},
    {"name" : "Our Song", "views" : 87846339, "video" : "youtubelink"},
    {"name" : "Back to December", "views" : 81403180, "video" : "youtubelink"},
    {"name" : "Everything Has Changed", "views" : 103995741, "video" : "youtubelink"},
    {"name" : "Shake It Off", "views" : 496095050, "video" : "youtubelink"},
    {"name" : "We Are Never Ever Getting Back Together", "views" : 267063544, "video" : "youtubelink"},
    {"name" : "Mine", "views" : 156647608, "video" : "youtubelink"},
    {"name" : "Love Story", "views" : 198150341, "video" : "youtubelink"}
  ];

  //   $.each(thisSongs.list, function() {
  //     var addSong = new TaylorHit(this.name, this.views, this.video);
  //     $("#unsorted").append(addTeam.table());
  //   });

function insertionSort() {
    
  var len, $current, i;
  
  len = Songs.length;
  console.log(len);
  for (i = 0; i < length; i++) {
    $current = $("li").eq(i);
    console.log($current);
    while ($current.data("value") < $current.prev().data("value")){
        $current.prev().insertAfter($current);
      }
    function move($current) {
      
    }
    // setTimeout(move, i * 1000, $current);
  }
}


  $("#sort").on("click", insertionSort);
 





