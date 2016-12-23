songlist = [["Gusty Garden Galaxy", "gusty", "Super Mario Galaxy"],
            ["Song of Storms", "storms", "Ocarina of Time"],
            ["Gerudo Valley", "gerudo", "Ocarina of Time"],
            ["Song of Healing", "healing", "Majora's Mask"],
            ["Hyrule Field", "hyrule_field", "Twilight Princess"],
            ["Midna's Lament", "midna_lament", "Twilight Princess"],
            ["Halo Main Theme", "halo", "Halo"],
            ["Jingle Jangle Jingle", "jingle", "Fallout New Vegas"],
            ["Butcher Pete", "butcher_pete", "Fallout 3"],
            ["Simple and Clean", "simple", "Kingdom Hearts"],
            ["Guardando nel Buio", "ansem", "Kingdom Hearts"],
            ["Sanctuary", "sanctuary", "Kingdom Hearts 2"],
            ["Sacred Moon", "sacred_moon", "Kingdom Hearts 2"],
            ["Simple and Clean (Ray of Hope)", "rayofhope", "Kingdom Hearts 0.2"],
            ["Apocalypsis Aquarius", "aquarius", "Final Fantasy 15"],
            ["Somnus", "somnus", "Final Fantasy 15"],
            ["Undertale", "undertale", "Undertale"],
            ["Heartache", "heartache", "Undertale"],
            ["sans.", "sans", "Undertale"],
            ["Spider Dance", "spider_dance", "Undertale"],
            ["Death by Glamour", "death_by_glamour", "Undertale"],
            ["Bergentrückung / ASGORE", "asgore", "Undertale"],
            ["Hopes and Dreams", "hopes_and_dreams", "Undertale"],
            ["His Theme", "his_theme", "Undertale"],
            ["Battle Against a True Hero", "battle_against", "Undertale"],
            ["Megalovania", "megalovania", "Undertale"],
            ["Hot Damned", "meatboy", "Super Meat Boy"],
            ["Last Battle", "cave_story", "Cave Story"],
            ["Hexagon", "hexagon", "Super Hexagon"],
            ["Main Theme", "batman", "Batman Arkham City"]]
            // ocarina opening
            // final fantasy 7 main theme, one winged angel
            // kirby zero two
            // mega man 2 dr. wily's castle
            // wind waker great sea, dragon roost
            // open your heart, live and learn, perfect dark gaia
            // roxas theme?


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
