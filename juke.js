songlist = [["Megalovania", "megalovania"],
            ["Spider Dance", "spider_dance"],
            ["Death by Glamour", "death_by_glamour"],
            ["Hopes and Dreams", "hopes_and_dreams"],
            ["Bergentrückung / ASGORE", "asgore"],
            ["Battle Against a True Hero", "battle_against"],
            ["Undertale", "undertale"],
            ["His Theme", "his_theme"],
            ["sans.", "sans"],
            ["Heartache", "heartache"]]

var current_item = 0;

function change_track(song_info) {
    audio.pause();
    $("#title").text(song_info[0]);
    $("#songsource").attr("src", "song/" + song_info[1] + ".mp3");
    audio.load();
};

function pauseplay() {
  $('#pause').css('display', 'none');
  $('#play').css('display', 'inline-block');
};

$("#button2").on("click", function() {
    current_item = (current_item + 1) % songlist.length;
    change_track(songlist[current_item]);
    pauseplay();
});

$("#button1").on("click", function() {
    current_item = (current_item - 1);
    if (current_item < 0) {current_item = songlist.length - 1;};
    change_track(songlist[current_item]);
    pauseplay();
});

$("#play").on("click", function() {
    audio.play();
    $('#play').css('display', 'none');
    $('#pause').css('display', 'inline-block');
});

$("#pause").on("click", function() {
    audio.pause();
    pauseplay();
});
