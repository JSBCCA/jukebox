songlist = [["Gusty Garden Galaxy", "gusty", "Super Mario Galaxy"],
            ["Underground Theme", "underground", "Super Mario Bros."],
            ["Title Theme", "title", "Zelda: Ocarina of Time"],
            ["Zelda's Lullaby", "lullaby", "Zelda: Ocarina of Time"],
            ["Song of Storms", "storms", "Zelda: Ocarina of Time"],
            ["Gerudo Valley", "gerudo", "Zelda: Ocarina of Time"],
            ["Song of Healing", "healing", "Zelda: Majora's Mask"],
            ["The Great Sea", "greatsea", "Zelda: The Wind Waker"],
            ["Dragon Roost Island", "dragonroost", "Zelda: The Wind Waker"],
            ["Hyrule Field", "hyrule_field", "Zelda: Twilight Princess"],
            ["Midna's Lament", "midna_lament", "Zelda: Twilight Princess"],
            ["Zero Two", "zerotwo", "Kirby 64: The Crystal Shards"],
            ["Dr. Wily's Castle: Stage 1", "wily", "Mega Man 2"],
            ["Simple and Clean", "simple", "Kingdom Hearts"],
            ["Guardando nel Buio", "ansem", "Kingdom Hearts"],
            ["Sanctuary", "sanctuary", "Kingdom Hearts 2"],
            ["Roxas' Theme", "roxas", "Kingdom Hearts 2"],
            ["Sacred Moon", "sacred_moon", "Kingdom Hearts 2"],
            ["Ray of Hope Mix", "rayofhope", "Kingdom Hearts 0.2"],
            ["Opening", "ff7opening", "Final Fantasy VII"],
            ["One Winged Angel", "onewinged", "Final Fantasy VII"],
            ["Apocalypsis Aquarius", "aquarius", "Final Fantasy XV"],
            ["Somnus", "somnus", "Final Fantasy XV"],
            ["Halo Main Theme", "halo", "Halo"],
            ["Jingle Jangle Jingle", "jingle", "Fallout New Vegas"],
            ["Butcher Pete", "butcher_pete", "Fallout 3"],
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
            // play while looking through songs
            // search by game

            // fire emblem oceans gray waves
            // fe awakening final boss
            // ballad of the goddess
            // 13th struggle
            // xion's theme
            // bonetrousle
            // doomsday zone
            // open your heart
            // live and learn
            // solaris theme
            // perfect dark gaia
            // dbz


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
    // if (audio.duration > 0 && !audio.paused) {
    //   audio.pause();
    //   audio.load();
    // };
    audio.play();
    $('#play').css('display', 'none');
    $('#pause').css('display', 'inline-block');
});

// if (myAudio.duration > 0 && !myAudio.paused) {

$("#pause").on("click", function() {
    audio.pause();
    pauseplay();
});



//
// var current_item = 0;
// var placehold = 0;
//
// function change_track(song_info) {
//     // audio.pause();
//     $("#title").text(song_info[2]);
//     $("#music").text(song_info[0]);
//     $("#songsource").attr("src", "song/" + song_info[1] + ".mp3");
//     // audio.load();
// };
//
// function pauseplay() {
//   $('#pause').css('display', 'none');
//   $('#play').css('display', 'inline-block');
// };
//
// $("#button2").on("click", function() {
//     if ($('pause').css('display') == 'inline-block') {placehold = current_item;};
//     current_item = (current_item + 1) % songlist.length;
//     change_track(songlist[current_item]);
//     pauseplay();
//     if (current_item == placehold) {
//       $('#play').css('display', 'none');
//       $('#pause').css('display', 'inline-block')
//     ;}
// });
//
// $("#button1").on("click", function() {
//     if ($('pause').css('display') == 'inline-block') {placehold = current_item;};
//     current_item = (current_item - 1);
//     if (current_item < 0) {current_item = songlist.length - 1;};
//     change_track(songlist[current_item]);
//     pauseplay();
//     if (current_item == placehold) {
//       $('#play').css('display', 'none');
//       $('#pause').css('display', 'inline-block')
//     ;}
// });
//
// $("#play").on("click", function() {
//     if (audio.duration > 0 && !audio.paused) {
//       audio.pause();
//       audio.load();
//     };
//     audio.play();
//     $('#play').css('display', 'none');
//     $('#pause').css('display', 'inline-block');
// });
//
// $("#pause").on("click", function() {
//     audio.pause();
//     pauseplay();
// });
