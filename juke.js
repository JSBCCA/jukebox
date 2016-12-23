songlist = [["Undertale", "undertale", "Undertale:"],
            ["Heartache", "heartache", "Undertale:"],
            ["sans.", "sans", "Undertale:"],
            ["Spider Dance", "spider_dance", "Undertale:"],
            ["Death by Glamour", "death_by_glamour", "Undertale:"],
            ["Bergentrückung / ASGORE", "asgore", "Undertale:"],
            ["Hopes and Dreams", "hopes_and_dreams", "Undertale:"],
            ["His Theme", "his_theme", "Undertale:"],
            ["Battle Against a True Hero", "battle_against", "Undertale:"],
            ["Megalovania", "megalovania", "Undertale:"],
            ["Jingle Jangle Jingle", "jingle", "Fallout New Vegas"],
            ["Apocalypsis Aquarius", "aquarius", "Final Fantasy 15:"],
            ["Somnus", "somnus", "Final Fantasy 15:"]]

var current_item = 0;

function change_track(song_info) {
    audio.pause();
    $("#title").text(song_info[2]);
    $("#music").text(song_info[0]);
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
