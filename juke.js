songlist = [["Underground Theme", "underground", "Super Mario Bros."],
            ["Beware the Forest Mushrooms", "forest", "Super Mario RPG"],
            ["Rainbow Road", "rainbow", "Mario Kart 64"],
            ["Gusty Garden Galaxy", "gusty", "Super Mario Galaxy"],
            ["Grand Finale", "grand", "M&L: Bowser's Inside Story"],
            ["Adventure's End", "end", "M&L: Dream Team"],
            ["The Dark World", "dark_world", "Zelda: A Link to the Past"],
            ["Title Theme", "title", "Zelda: Ocarina of Time"],
            ["Zelda's Lullaby", "lullaby", "Zelda: Ocarina of Time"],
            ["Song of Storms", "storms", "Zelda: Ocarina of Time"],
            ["Gerudo Valley", "gerudo", "Zelda: Ocarina of Time"],
            ["Song of Healing", "healing", "Zelda: Majora's Mask"],
            ["The Great Sea", "greatsea", "Zelda: The Wind Waker"],
            ["Dragon Roost Island", "dragonroost", "Zelda: The Wind Waker"],
            ["Hyrule Field", "hyrule_field", "Zelda: Twilight Princess"],
            ["Midna's Lament", "midna_lament", "Zelda: Twilight Princess"],
            ["Ballad of the Goddess", "ballad", "Zelda: Skyward Sword"],
            ["Fi's Theme", "fi", "Zelda: Skyward Sword"],
            ["Zero Two", "zerotwo", "Kirby 64: The Crystal Shards"],
            ["C-R-O-W-N-E-D", "crowned", "Kirby's Return to Dreamland"],
            ["Magnus's Theme", "magnus", "Kid Icarus Uprising"],
            ["Dark Pit's Theme", "dark_pit", "Kid Icarus Uprising"],
            ["Id (Purpose)", "purpose", "Fire Emblem Awakening"],
            ["Lost in Thoughts All Alone", "lost_thoughts", "Fire Emblem Fates"],
            ["Gaur Plains", "gaur", "Xenoblade Chronicles"],
            ["Dr. Wily's Castle: Stage 1", "wily", "Mega Man 2"],
            ["Casino Night Zone (1P)", "casino", "Sonic the Hedgehog 2"],
            ["Doomsday Zone", "doomsday", "Sonic 3 & Knuckles"],
            ["Open Your Heart", "perfect_chaos", "Sonic Adventure"],
            ["Escape from the City", "escape", "Sonic Adventure 2"],
            ["Live and Learn", "liveandlearn", "Sonic Adventure 2"],
            ["Solaris Phase 2", "solaris", "Sonic the Hedgehog (2006)"],
            ["Concept of Love", "concept", "Jet Set Radio Future"],
            ["Simple and Clean", "simple", "Kingdom Hearts"],
            ["Guardando nel Buio", "ansem", "Kingdom Hearts"],
            ["Sanctuary", "sanctuary", "Kingdom Hearts 2"],
            ["Roxas's Theme", "roxas", "Kingdom Hearts 2"],
            ["The 13th Struggle", "struggle", "Kingdom Hearts 2"],
            ["Sacred Moon", "sacred_moon", "Kingdom Hearts 2"],
            ["Xion's Theme", "xion", "Kingdom Hearts 358/2 Days"],
            ["Ray of Hope Mix", "rayofhope", "Kingdom Hearts 0.2"],
            ["Opening", "ff7opening", "Final Fantasy VII"],
            ["One Winged Angel", "onewinged", "Final Fantasy VII"],
            ["Apocalypsis Aquarius", "aquarius", "Final Fantasy XV"],
            ["Somnus", "somnus", "Final Fantasy XV"],
            ["Halo Main Theme", "halo", "Halo"],
            ["Mad World (Instrumental)", "madworld", "Gears of War 3"],
            ["Jingle Jangle Jingle", "jingle", "Fallout New Vegas"],
            ["Butcher Pete", "butcher_pete", "Fallout 3"],
            ["UN Owen Was Her?", "un_owen", "Touhou"],
            ["Still Alive", "still_alive", "Portal"],
            ["Undertale", "undertale", "Undertale"],
            ["Heartache", "heartache", "Undertale"],
            ["sans.", "sans", "Undertale"],
            ["Bonetrousle", "bonetrousle", "Undertale"],
            ["Spider Dance", "spider_dance", "Undertale"],
            ["The Core", "core", "Undertale"],
            ["Death by Glamour", "death_by_glamour", "Undertale"],
            ["Bergentrückung / ASGORE", "asgore", "Undertale"],
            ["Hopes and Dreams", "hopes_and_dreams", "Undertale"],
            ["His Theme", "his_theme", "Undertale"],
            ["Battle Against a True Hero", "battle_against", "Undertale"],
            ["Megalovania", "megalovania", "Undertale"],
            ["Hot Damned", "meatboy", "Super Meat Boy"],
            ["Last Battle", "cave_story", "Cave Story"],
            ["Hexagon", "hexagon", "Super Hexagon"],
            ["Main Theme", "batman", "Batman Arkham City"],
            ["Opening", "budokai", "DBZ: Budokai 3"]]

            // chemical plant
            // never turn back
            // perfect dark gaia
            // knight of the wind

            // save the world
            // snowdin
            // another medium

            // maybe: bayonetta? emerald hill zone?

var current_item = 0;
var placehold = null;

// changing track
function change_track(song_info) {
  $("#title").text(song_info[2]);
  $("#music").text(song_info[0]);
  if (audio.duration === 0 || audio.paused) {
    $("#songsource").attr("src", "song/" + song_info[1] + ".mp3");
    audio.load();
  };
};

// changing pause to play
function pauseplay() {
  if (audio.duration > 0 && current_item === placehold && !audio.paused) {
    $('#pause').css('display', 'inline-block');
    $('#play').css('display', 'none');
  }
  else {
    $('#pause').css('display', 'none');
    $('#play').css('display', 'inline-block');
  };
};

// moving right
$("#buttonright").on("click", function() {
    current_item = (current_item + 1) % songlist.length;
    change_track(songlist[current_item]);
    pauseplay();
});

// moving right between games
$("#buttonright2").on("click", function() {
    game = songlist[current_item][2];
    current_item = (current_item + 1) % songlist.length;
    while (songlist[current_item][2] === game) {
      current_item = (current_item + 1) % songlist.length;
    };
    change_track(songlist[current_item]);
    pauseplay();
});

// moving left
$("#buttonleft").on("click", function() {
    current_item = (current_item - 1);
    if (current_item < 0) {current_item = songlist.length - 1;};
    change_track(songlist[current_item]);
    pauseplay();
});

// moving left between games
$("#buttonleft2").on("click", function() {
    game = songlist[current_item][2];
    current_item = (current_item - 1);
    if (current_item < 0) {current_item = songlist.length - 1;};
    while (songlist[current_item][2] === game) {
      current_item = (current_item - 1);
      if (current_item < 0) {current_item = songlist.length - 1;};
    };
    change_track(songlist[current_item]);
    pauseplay();
});

// playing
$("#play").on("click", function() {
    if (audio.duration > 0 && !audio.paused) {
      audio.pause();
      $("#songsource").attr("src", "song/" + songlist[current_item][1] + ".mp3");
      audio.load();
    }
    placehold = current_item;
    audio.play();
    $('#play').css('display', 'none');
    $('#pause').css('display', 'inline-block');
});

// pausing
$("#pause").on("click", function() {
    audio.pause();
    pauseplay();
});

// loop switch
$('#loop_switch').on("click", function() {
  if (audio.loop === true) {
    audio.loop = false;
    $('#loop_switch').text("Loop Song: Off");
  }
  else if (audio.loop === false) {
    audio.loop = true;
    $('#loop_switch').text("Loop Song: On");
  }
});

// if loop is off
$('audio').on("ended", function() {
  if (audio.loop === false) {
    audio.duration = 0;
    pauseplay();
    current_item = (current_item + 1) % songlist.length;
    change_track(songlist[current_item]);
  };
});

