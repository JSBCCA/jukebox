songlist = [["Megalovania", "megalovania"],
            ["Spider Dance", "spider_dance"],
            ["Death by Glamour", "death_by_glamour"]]

var current_item = 0;

function change_track(song_info) {
  $("#title").text(song_info[0]);
  $("#songsource").attr("src", "song/" + song_info[1] + ".mp3");
}

$("#button2").on("click", function() {
    change_track(songlist[current_item + 1]);
    current_item = (current_item + 1) % songlist.length;
  });

$("#button1").on("click", function() {
  change_track(songlist[current_item - 1]);
  current_item = (current_item - 1);
  if (current_item < 0) {
    current_item = songlist.length - 1;
  };
});