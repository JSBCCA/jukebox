// new version of song list, 144 games, 324 songs
var jukebox = {
    "A Hat in Time": [
      ["Your Contract Has Expired", "contract"]
    ],
    "Animal Crossing": [
      ["Title (Animal Crossing)", "an_cross"]
    ],
    "Arms": [
      ["Main Theme (Arms)", "arms"]
    ],
    "Assassin\'s Creed 2": [
      ["Earth", "ac2_earth"],
      ["Venice Rooftops", "ac2_vr"],
      ["Ezio\'s Family", "ac2_ef"]
    ],
    "Assassin\'s Creed 3": [
      ["Main Theme (Assassin\'s Creed 3)", "ac3_maintheme"]
    ],
    "Assassin\'s Creed: Revelations": [
      ["Main Theme (AC: Revelations)", "acr_maintheme"]
    ],
    "Banjo-Kazooie": [
      ["Click Clock Wood (Spring)", "ccspring_bk"],
      ["Treasure Trove Cove", "ttcove_bk"],
      ["Mad Monster Mansion", "mmm_bk"]
    ],
    "Batman: Arkham City": [
      ["Main Theme (Batman: Arkham City)", "batman"]
    ],
    "Bayonetta": [
      ["Let\'s Dance, Boys!", "bayonetta"]
    ],
    "Bayonetta 2": [
      ["Tomorrow is Mine", "tomorrow_mine"]
    ],
    "Call of Duty: WWII": [
      ["A Brotherhood of Heroes", "cod_boh"]
    ],
    "Castlevania": [
      ["Vampire Killer (Stage 1)", "cv_vk"],
      ["Out of Time (Stage 6)", "cv_ot"]
    ],
    "Castlevania 2: Simon\'s Quest": [
      ["Bloody Tears", "cv2_bt"]
    ],
    "Castlevania: Harmony of Despair": [
      ["Vampire Killer (Remix)", "cvhd_vkr"]
    ],
    "Castlevania: Judgement": [
      ["Bloody Tears (Carmilla\'s Theme)", "cvj_bt"]
    ],
    "Cave Story+": [
      ["Last Battle", "cave_story"]
    ],
    "Chibi-Robo!": [
      ["Midday Majesty", "midday"],
      ["Drake Redcrest Theme", "drake_redcrest"],
      ["UFO Visitation", "ufo_visit"]
    ],
    "Crash Bandicoot": [
      ["Main Theme (Crash Bandicoot)", "cb1_theme"]
    ],
    "Crypt of the Necrodancer": [
      ["Mausoleum Mash (Shopkeeper)", "crypt"]
    ],
    "Devil May Cry 3": [
      ["Devils Never Cry", "devilsnevercry"]
    ],
    "Devil May Cry 4": [
      ["Shall Never Surrender", "dmc4_surrender"],
    ],
    "DISSIDIA FINAL FANTASY -Arcade-": [
      ["Massive Explosion", "dissidia"]
    ],
    "Doki Doki Literature Club!": [
      ["Okay, Everyone!", "ok_evone"],
      ["Your Reality", "ddlc_reality"]
    ],
    "Donkey Kong Country 2: Diddy\'s Kong Quest": [
      ["Stickerbush Symphony", "stickerbush"]
    ],
    "Donkey Kong Country: Tropical Freeze": [
      ["Big Top Bop", "big_top"]
    ],
    "DOOM": [
      ["E1M1 - At Doom\'s Gate", "doom_theme"]
    ],
    "Dragon Ball Z: Budokai 3": [
      ["Opening", "budokai"]
    ],
    "Dragon Ball Z: Budokai Tenkaichi 3": [
      ["Super Survivor (Instrumental)", "super_survivor"]
    ],
    "Dragon Ball FighterZ": [
      ["Future Trunks\'s Theme", "dbfztrunks"],
      ["Nappa\'s Theme", "nappa"],
      ["Frieza\'s Theme", "frieza"],
      ["Hit\'s Theme", "dbfzhit"]
    ],
    "Drawn to Life": [
      ["The End", "the_end"]
    ],
    "Drawn to Life: The Next Chapter": [
      ["Real Life", "real_life"]
    ],
    "DuckTales": [
      ["The Moon", "ducktales_moon"]
    ],
    "Earthbound": [
      ["Onett", "onett_eb"],
      ["Snowman", "snowman_eb"],
      ["Smiles and Tears", "smiles_tears"]
    ],
    "Fallout 3": [
      ["Butcher Pete", "butcher_pete"]
    ],
    "Fallout New Vegas": [
      ["Jingle Jangle Jingle", "jingle"]
    ],
    "FEZ": [
      ["Compass", "fez_compass"]
    ],
    "Final Fantasy VII": [
      ["Opening", "ff7opening"],
      ["Aerith\'s Theme", "aerith"],
      ["One Winged Angel", "onewinged"]
    ],
    "Final Fantasy X": [
      ["Battle Theme", "battle_ffx"],
      ["Otherworld", "otherworld_ffx"]
    ],
    "Final Fantasy XIII": [
      ["Blinded by Light", "blinded_light"]
    ],
    "Final Fantasy XV": [
      ["Apocalypsis Aquarius", "aquarius"],
      ["Hammerhead - The Last Bastion", "last_bastion"],
      ["Somnus", "somnus"]
    ],
    "Fire Emblem Awakening": [
      ["Id (Purpose)", "purpose"]
    ],
    "Fire Emblem Fates": [
      ["Lost in Thoughts All Alone", "lost_thoughts"],
      ["Thorn in You (Roar)", "thorn"],
      ["Perplexing Dreams", "perp_dream"],
      ["A Dark Fall", "dark_fall"]
    ],
    "Gears of War 3": [
      ["Mad World (Instrumental)", "madworld"]
    ],
    "Halo": [
      ["Main Theme (Halo)", "halo"]
    ],
    "Halo 2: Anniversary Edition": [
      ["Follow in Flight", "flight"],
      ["Breaking the Covenant", "covenant"]
    ],
    "Jet Set Radio Future": [
      ["Concept of Love", "concept"]
    ],
    "Kid Icarus Uprising": [
      ["Magnus\'s Theme", "magnus"],
      ["Dark Pit\'s Theme", "dark_pit"],
      ["Lightning Battle", "lightning"]
    ],
    "Kingdom Hearts": [
      ["Simple and Clean", "simple"],
      ["Hikari Orchestra", "kh1_open"],
      ["Night of Fate", "night_fate"],
      ["Traverse Town", "traverse"],
      ["Guardando nel Buio", "ansem"]
    ],
    "Kingdom Hearts 0.2 -A Fragmentary Passage-": [
      ["Simple and Clean -Ray of Hope MIX-", "rayofhope"],
      ["The Secret Whispers", "secret_whispers"],
      ["Wave of Darkness 1", "dark_wave_kh", " 0.2"]
    ],
    "Kingdom Hearts 2": [
      ["Dearly Beloved (KH2 Ver.)", "dearly_beloved2"],
      ["Sanctuary", "sanctuary"],
      ["Passion Orchestra",  "kh2_open"],
      ["Roxas\'s Theme", "roxas"],
      ["The 13th Struggle", "struggle"],
      ["Sacred Moon", "sacred_moon"],
      ["Fate of the Unknown", "fate_unknown"]
    ],
    "Kingdom Hearts 358/2 Days": [
      ["Xion\'s Theme", "xion"],
      ["Vector to the Heavens", "vector"],
      ["Riku Battle", "riku"]
    ],
    "Kingdom Hearts Birth by Sleep": [
      ["Dearly Beloved (BBS Ver.)", "dearly_beloved"],
      ["Aqua\'s Theme", "aqua"],
      ["Ventus", "ventus_bbs"],
      ["Dismiss", "dismiss_kh"]
    ],
    "Kingdom Hearts Dream Drop Distance": [
      ["L\'Impeto Oscuro", "young_x"]
    ],
    "Kingdom Hearts Re:Chain of Memories": [
      ["Naminé", "namine"],
      ["Hollow Bastion", "rcom_hollow_bastion"],
      ["Lord of the Castle", "lord_of_castle"]
    ],
    "Kingdom Hearts Union X": [
      ["Dearly Beloved (KHUX Ver.)", "khux"]
    ],
    "Kirby 64: The Crystal Shards": [
      ["Pop Star", "popstar64"],
      ["Rock Star", "kcs_rock"],
      ["Factory Inspection", "kcs_fi"],
      ["Miracle Matter", "mira_matt"],
      ["Zero Two", "zerotwo"]
    ],
    "Kirby Planet Robobot": [
      ["VS Star Dream", "stardream"],
      ["Virtual Space Manipulator", "star_dream_vsp"],
      ["P-R-O-G-R-A-M", "program"]
    ],
    "Kirby Star Allies": [
      ["Planet Popstar", "ksa_pop"]
    ],
    "Kirby Super Star": [
      ["King Dedede\'s Theme", "king_dedede"],
      ["Meta Knight\'s Revenge", "meta_knight"]
    ],
    "Kirby Triple Deluxe": [
      ["Dirty & Beauty", "sectonia"],
      ["Moonstruck Blossom", "moonstruck"]
    ],
    "Kirby\'s Adventure": [
      ["Rainbow Resort", "rainbow_resort"]
    ],
    "Kirby\'s Dream Land": [
      ["Green Greens", "greens"]
    ],
    "Kirby\'s Return to Dreamland": [
      ["Cookie Country", "cookie_c"],
      ["C-R-O-W-N-E-D", "crowned"]
    ],
    "Luigi\'s Mansion: Dark Moon": [
      ["Gloomy Manor", "gloomy"]
    ],
    "Mario & Luigi: Bowser\'s Inside Story": [
      ["Grand Finale", "grand"]
    ],
    "Mario & Luigi: Dream Team": [
      ["Adventure\'s End", "end"]
    ],
    "Mario & Luigi: Paper Jam": [
      ["Final Boss Phase 2", "doublebowser"]
    ],
    "Mario & Luigi: Partners in Time": [
      ["Final Battle", "shroob"]
    ],
    "Mario & Luigi: Superstar Saga": [
      ["Come On!", "come_on"]
    ],
    "Mario Kart 64": [
      ["Rainbow Road", "rainbow"]
    ],
    "Mario Kart 8": [
      ["Tick Tock Clock Remix", "tick_tock"]
    ],
    "Mega Man 2": [
      ["Dr. Wily\'s Castle: Stage 1", "wily"]
    ],
    "Metal Gear Rising: Revengeance": [
      ["Rules of Nature (Platinum Mix)", "mgsr_rules"],
      ["The Only Thing I Know for Real (M.A. Mix)", "mgsr_thingiknow"],
      ["The Stains of Time (Maniac Agenda Mix)", "mgsr_stains"],
      ["It Has to Be This Way (Platinum Mix)", "mgsr_hastobe"]
    ],
    "Metal Gear Solid 3: Snake Eater": [
      ["Snake Eater", "mgs3_se"]
    ],
    "Metal Gear Solid: Portable Ops": [
      ["Calling to the Night", "mgspo_calling"]
    ],
    "Metal Gear Solid V: The Phantom Pain": [
      ["Sins of the Father", "mgsv_sins"]
    ],
    "Metroid": [
      ["Brinstar", "brinstar"]
    ],
    "Metroid: Samus Returns": [
      ["Surface of SR388", "sr388"],
      ["Brinstar Red Soil", "redsoil"],
      ["VS Proteus Ridley", "proteus"]
    ],
    "Minecraft": [
      ["Haggstrom", "haggstrom"]
    ],
    "Minit": [
      ["Minit\'s Awakening", "minit_awaken"],
      ["Sabasaba Desert", "saba_des"],
      ["Sword Factory", "minit_swordfac"]
    ],
    "Nicktoons: Battle for Volcano Island": [
      ["Ancient\'s Peak", "nbfvi_ancientpeak"],
      ["Final Boss Theme", "nbfvi_finalboss"]
    ],
    "Nicktoons: Globs of Doom": [
      ["Zim\'s Town (1)", "ngod_zim"]
    ],
    "NieR": [
      ["Song of the Ancients - Fate", "song_ancients"]
    ],
    "NieR: Automata": [
      ["Birth of a Wish", "birth_wish"],
      ["City Ruins (Rays of Light)", "city_ruins_nier"],
      ["Amusement Park", "amusement"],
      ["A Beautiful Song", "opera_nier"],
      ["Copied City", "copied_city"],
      ["The Weight of the World", "weight_of_the_world"]
    ],
    "Night in the Woods": [
      ["Title (Night in the Woods)", "nitw_title"],
      ["Weird Autumn", "nitw_wa"],
      ["Fireflies on the Porch", "nitw_fotp"]
    ],
    "OneShot": [
      ["My Burden Is Light", "oneshot_burden"],
      ["Some Place I Know", "oneshot_placeiknow"],
      ["Phosphor", "oneshot_phosphor"],
      ["Geothermal", "oneshot_geo"]
    ],
    "Paper Mario: The Thousand Year Door": [
      ["Rogueport", "rogueport"],
      ["Battle Theme", "ttydbattle"],
      ["Macho Grubba Battle", "grubba"],
      ["Sadness and Happiness", "sad_happy_ttyd"],
      ["Excess Express at Dusk", "at_dusk"],
      ["Excess Express at Night", "at_night"],
      ["X-Naut Fortress", "xnaut"]
    ],
    "Persona 3": [
      ["Battle for Everyone\'s Souls", "persona3"]
    ],
    "Persona 5": [
      ["Last Suprise", "p5_ls"]
    ],
    "Plants vs Zombies": [
      ["Dr. Zomboss", "pvz"],
      ["Zombies on your Lawn", "zombie_lawn"]
    ],
    "Playerunknown's Battlegrounds": [
      ["Main Menu", "pubg_mm"]
    ],
    "Pokemon Omega Ruby & Alpha Sapphire": [
      ["Battle Lorekeeper Zinnia", "zinnia"]
    ],
    "Pokemon Ultra Sun & Ultra Moon": [
      ["Ultra Necrozma", "necrozma"]
    ],
    "Pokemon X & Y": [
      ["Lumiose City", "lumiose"],
      ["Battle Champion", "champxy"]
    ],
    "Portal": [
      ["Still Alive", "still_alive"]
    ],
    "Shadow the Hedgehog": [
      ["I am... All of Me", "i_am", "Shadow the Hedgehog"],
      ["Westopolis", "shadow_westopolis"],
      ["Final Haunt", "final_haunt", "Shadow the Hedgehog"],
      ["Chosen One", "chosen_one", "Shadow the Hedgehog"],
      ["Never Turn Back", "never_turn", "Shadow the Hedgehog"]
    ],
    "Shovel Knight": [
      ["Strike the Earth!", "strike_earth"]
    ],
    "Sonic & Knuckles": [
      ["Mushroom Hill Zone Act 1", "mushroom_andknuckles"]
    ],
    "Sonic Adventure": [
      ["It Doesn\'t Matter (SA1)", "sa1_sonictheme"],
      ["Believe in Myself", "sa1_tailstheme"],
      ["My Sweet Passion", "sa1_amytheme"],
      ["Welcome to Station Square", "sa1_stasquare"],
      ["Azure Blue World", "sa1_emcoast"],
      ["Run Through the Speed Highway", "sa1_speedhigh"],
      ["The Dreamy Stage", "sa1_casino"],
      ["Dilapidated Way", "sa1_undercasino"],
      ["Tornado Scramble", "sa1_skychase"],
      ["Sky Deck a Go Go", "sa1_skydeck"],
      ["Mt. Red, A Symbol of Thrill", "sa1_redmount"],
      ["Red Hot Skull", "sa1_underredmount"],
      ["Mechanical Resonance", "sa1_egglevel"],
      ["Open Your Heart", "perfect_chaos"]
    ],
    "Sonic Adventure 2": [
      ["Escape from the City", "escape", "Sonic Adventure 2"],
      ["Vengeance is Mine", "sa2_radhigh"],
      ["That\'s the Way I Like It", "sa2_metalharbor"],
      ["Won\'t Stop, Just Go", "sa2_greenforest"],
      ["A Ghost\'s Pumpkin Soup", "sa2_pumpkin"],
      ["Masters of the Desert", "sa2_desert"],
      ["Supporting Me", "biolizard", "Sonic Adventure 2"],
      ["Live and Learn", "liveandlearn"]
    ],
    "Sonic and the Black Knight": [
      ["Knight of the Wind", "wind"]
    ],
    "Sonic CD": [
      ["Sonic Boom", "sonicboomcd"]
    ],
    "Sonic Colors": [
      ["Reach for the Stars", "colors_stars"],
      ["Planet Wisp (Act 1)", "colors_wisp"],
      ["Aquarium Park (Act 1)", "colors_aqua"],
      ["Terminal Velocity (Act 1)", "colors_termvelo"],
      ["Vs. Nega-Wisp Armor (Phase 2)", "colors_nega2"]
    ],
    "Sonic Forces": [
      ["Fist Bump", "fist_bump"],
      ["Avatar Menu", "avatar_menu"],
      ["Battle with Metal Sonic", "metal_sonic"],
      ["Infinite", "infinite"]
    ],
    "Sonic Heroes": [
      ["Sonic Heroes", "sonic_heroes"],
      ["Egg Emperor", "egg_emp"],
      ["What I\'m Made Of", "made_of"]
    ],
    "Sonic Mania": [
      ["Studiopolis Act Zone 1", "studiopolis"], 
      ["Titanic Monarch Zone Act 2", "titanic_monarch"]
    ],
    "Sonic the Hedgehog": [
      ["Green Hill Zone", "green_hill"]
    ],
    "Sonic the Hedgehog (2006)": [
      ["Wave Ocean - The Waters Edge", "s06_waveedge"],
      ["Wave Ocean - The Inlet", "s06_waveinlet"],
      ["Crisis City - The Flame", "crisis"],
      ["Crisis City - Skyscraper", "s06_crisis_skyscraper"],
      ["Aquatic Base - Level 1", "s06_aquabase"],
      ["Kingdom Valley - The Wind", "s06_kvwind"],
      ["Kingdom Valley - Water", "s06_kvwater"],
      ["Mephiles", "s06_mephiles"],
      ["Solaris Phase 2", "solaris"]
    ],
    "Sonic the Hedgehog 2": [
      ["Emerald Hill Zone", "emerald"],
      ["Chemical Plant Zone", "chemical"],
      ["Casino Night Zone (1P)", "casino"]
    ],
    "Sonic the Hedgehog 3 & Knuckles": [
      ["Doomsday Zone", "doomsday"]
    ],
    "Sonic Unleashed": [
      ["Rooftop Run", "rooftop"],
      ["Perfect Dark Gaia Phase 2", "dark_gaia"]
    ],
    "Splatoon": [
      ["Splattack!", "splattack"]
    ],
    "Spyro the Dragon": [
      ["Title Screen", "spyro_title"]
    ],
    "Super Hexagon": [
      ["Hexagon", "hexagon"]
    ],
    "Super Mario 3D World": [
      ["World Bowser", "world_bowser"]
    ],
    "Super Mario 64": [
      ["Main Theme (Super Mario 64)", "mario_64"]
    ],
    "Super Mario Bros.": [
      ["Main Theme (Super Mario Bros.)", "mario_theme"],
      ["Underground Theme", "underground"],
      ["Underwater Theme", "underwater"]
    ],
    "Super Mario Galaxy": [
      ["Comet Observatory", "observ"],
      ["Gusty Garden Galaxy", "gusty"]
    ],
    "Super Mario Odyssey": [
      ["Jump Up Superstar!", "jump_superstar"],
      ["Break Free", "break_free"]
    ],
    "Super Mario RPG: Legend of the Seven Stars": [
      ["Beware the Forest Mushrooms", "forest"]
    ],
    "Super Mario Sunshine": [
      ["Ricco Harbor", "ricco_harbor"]
    ],
    "Super Mario World": [
      ["Overworld", "smw_ow"]
    ],
    "Super Meat Boy": [
      ["Hot Damned", "meatboy"]
    ],
    "Super Paper Mario": [
      ["Flipside", "flipside"],
      ["Lineland Road", "lineland"],
      ["Merlee\'s Mansion", "merlee"],
      ["Sammer\'s Kingdom", "sammers"],
      ["Champion of Destruction", "champ_destruction"],
      ["Bounding Through Time", "bound_time"],
      ["The Ultimate Show", "spm_ultimate"],
      ["Proof of Existence", "proof_exist"]
    ],
    "Super Smash Bros.": [
      ["Meta Crystal", "metal_ssb"]
    ],
    "Super Smash Bros. Brawl": [
      ["Main Theme (Luigi\'s Mansion)", "luigis_mansion"],
      ["Bramble Blast", "bramble_brawl"],
      ["Encounter", "ssbb_mgencounter"],
      ["Theme of Tara", "ssbb_mgtara"]
    ],
    "Super Smash Bros. Melee": [
      ["Brinstar (Melee)", "brinstar_melee"],
      ["Fountain of Dreams", "fountain_dreams_ssbm"],
      ["Fire Emblem", "melee_fe"]
    ],
    "Super Smash Land": [
      ["Tower of Heaven", "tower_heaven"]
    ],
    "The Elder Scrolls V: Skyrim": [
      ["Main Theme (Skyrim)", "skyrim"]
    ],
    "The Legend of Zelda": [
      ["Main Theme (The Legend of Zelda)", "zelda_intro"]
    ],
    "The Legend of Zelda: A Link Between Worlds": [
      ["Forest of Mystery", "mys_forest_albw"]
    ],
    "The Legend of Zelda: A Link to the Past": [
      ["The Dark World", "dark_world"]
    ],
    "The Legend of Zelda: Breath of the Wild": [
      ["Main Theme (Breath of the Wild)", "breath_wild"],
      ["Rito Village (Day)", "botw_rvd"],
      ["Hyrule Castle (Outside w/ enemies)", "botw_castle"],
      ["The Divine Trial (Final Battle)", "botw_divine"]
    ],
    "The Legend of Zelda: Majora\'s Mask": [
      ["Song of Healing", "healing"]
    ],
    "The Legend of Zelda: Ocarina of Time": [
      ["Title Theme", "title"],
      ["Zelda\'s Lullaby", "lullaby"],
      ["Song of Storms", "storms"],
      ["Gerudo Valley", "gerudo"]
    ],
    "The Legend of Zelda: Skyward Sword": [
      ["Ballad of the Goddess", "ballad"],
      ["Skyloft", "skyloft"],
      ["Fi\'s Theme", "fi"]
    ],
    "The Legend of Zelda: Twilight Princess": [
      ["Hyrule Field", "hyrule_field"],
      ["Hyrule Field Night", "night_hyrule_field"],
      ["Midna\'s Lament", "midna_lament"]
    ],
    "The Legend of Zelda: The Wind Waker": [
      ["The Great Sea", "greatsea"],
      ["Dragon Roost Island", "dragonroost"]
    ],
    "The World Ends With You": [
      ["Calling", "calling"],
      ["Long Dream", "long_dream"],
      ["Three Minutes Clapping", "three_minutes_clapping"],
      ["Detonation", "detonation"],
      ["Game Over", "game_over"],
      ["Emptiness and", "emptiness_and"],
      ["Lullaby for You", "lullaby_for_you"]
    ],
    "Touhou": [
      ["UN Owen Was Her?", "un_owen"],
      ["Necrofantasia", "necrof"]
    ],
    "Transistor": [
      ["The Spine", "trans_spine"],
      ["Coasting", "trans_coast"]
    ],
    "Undertale": [
      ["Your Best Friend", "best_friend"],
      ["Undertale (OST)", "undertale"],
      ["Heartache", "heartache"],
      ["sans.", "sans"],
      ["Snowdin Town", "snowdin"],
      ["Bonetrousle", "bonetrousle"],
      ["Waterfall", "waterfall"],
      ["Temmie Village", "tem"],
      ["Spear of Justice", "spear_justice"],
      ["Alphys", "alphys"],
      ["Another Medium", "medium"],
      ["Spider Dance", "spider_dance"],
      ["The Core", "core"],
      ["Metal Crusher", "m_crusher"],
      ["Death by Glamour", "death_by_glamour"],
      ["Bergentrückung / ASGORE", "asgore"],
      ["Finale", "ut_finale"],
      ["Amalgam", "amalgam"],
      ["Hopes and Dreams", "hopes_and_dreams"],
      ["SAVE the World", "save_world"],
      ["His Theme", "his_theme"],
      ["Battle Against a True Hero", "battle_against"],
      ["Megalovania", "megalovania"]
    ],
    "VVVVVV": [
      ["Positive Force", "vvvvvv"]
    ],
    "Xenoblade Chronicles": [
      ["Gaur Plains", "gaur"]
    ]
}

// searchbar
var song_searchbar = {
    searchitem: null,
    val_func: function() {
        searchitem = $('#songsearch').val();
        return searchitem;
    },
}

// keep track of song currently playing and song currently located on
var current_item = [0, 0]; // first game, first song
var placehold = null;

// returns array of all song names and game names: list_of_search_suggestions(jukebox);
function list_of_search_suggestions(jbx) {
  var gameindex;
  var gamename;
  var songs = [];
  for (gameindex in Object.keys(jbx)) { 
    gamename = Object.keys(jbx)[gameindex];
    songs = songs.concat(jbx[gamename].map(songinfo => songinfo[0]));
  };
  songs = songs.concat(Object.keys(jukebox));
  return songs;
};

// changing track
function change_track(jbx, gameindex, songindex) { 
  $("#title").text(Object.keys(jbx)[gameindex]);
  $("#music").text(jbx[Object.keys(jbx)[gameindex]][songindex][0]);
  current_item = [gameindex, songindex];
  if (audio.duration === 0 || audio.paused) {
      $("#songsource").attr("src", "song/" + jbx[Object.keys(jbx)[gameindex]][songindex][1] + ".mp3");
      audio.load();
  };
  pauseplay();
  return false;
};

// changing track in background
function change_track_in_background(jbx, gameindex, songindex) {
  if (audio.duration === 0 || audio.paused) {
      $("#songsource").attr("src", "song/" + jbx[Object.keys(jbx)[gameindex]][songindex][1] + ".mp3");
      audio.load();
  };
  pauseplay();
  return false;
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

// findsearch(searched item, jukebox, current location) finds [game, song] indices in jukebox
function findsearch(searched, jbx, curr_loc) {
  var gameindex;
  var game;
  var trackindex;
  if ($.inArray(searched, Object.keys(jbx)) !== -1) {
    // if game in jukebox, return [game index, 0]
    return [$.inArray(searched, Object.keys(jbx)), 0];
  } else if ($.inArray(searched, list_of_search_suggestions(jbx)) !== -1) {
      // if song in jukebox, return [game index, song index]
      for (gameindex in Object.keys(jbx)) {
        game = jbx[Object.keys(jbx)[gameindex]];
        for (trackindex in game) {
          if ($.inArray(searched, jbx[Object.keys(jbx)[gameindex]][trackindex]) !== -1) {
            return [gameindex, trackindex];
          }; 
        };
      };
  } else { return curr_loc; }
};

// moving right
$("#buttonright").on("click", function() {
  current_item[1] = (current_item[1] + 1);
  if (current_item[1] > (jukebox[Object.keys(jukebox)[current_item[0]]].length - 1)) {
    current_item[0] = (current_item[0] + 1);
    if (current_item[0] > (Object.keys(jukebox).length - 1)) {
      current_item[0] = 0;
    };
    current_item[1] = 0;
  };
  change_track(jukebox, current_item[0], current_item[1]);
  pauseplay();
});

// moving right between games
$("#buttonright2").on("click", function() {
  current_item[0] = (current_item[0] + 1) % Object.keys(jukebox).length;
  current_item[1] = 0;
  change_track(jukebox, current_item[0], current_item[1]);
  pauseplay();
});

// moving left
$("#buttonleft").on("click", function() {
  current_item[1] = (current_item[1] - 1);
  if (current_item[1] < 0) {
    current_item[0] = (current_item[0] - 1);
    if (current_item[0] < 0) {
      current_item[0] = (Object.keys(jukebox).length - 1);
    }
    current_item[1] = jukebox[Object.keys(jukebox)[current_item[0]]].length - 1;
  };
  change_track(jukebox, current_item[0], current_item[1]);
  pauseplay();        
});

// moving left between games
$("#buttonleft2").on("click", function() {
  current_item[0] = current_item[0] - 1;
  if (current_item[0] < 0) {
    current_item[0] = Object.keys(jukebox).length - 1;
  };
  current_item[1] = jukebox[Object.keys(jukebox)[current_item[0]]].length - 1;
  change_track(jukebox, current_item[0], current_item[1]);
  pauseplay();        
});

// playing
$("#play").on("click", function() {
    if (audio.duration > 0 && !audio.paused) {
      audio.pause();
      $("#songsource").attr("src", "song/" + jukebox[Object.keys(jukebox)[current_item[0]]][current_item[1]][1] + ".mp3");
      audio.load();
    }
    placehold = current_item;
    audio.play();
    pauseplay();
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
    $('#loop_switch').html('<i id="noloop" class="fas fa-redo"></i>');
    $("noloop::before").css("content", "\f01e");
  }
  else if (audio.loop === false) {
    audio.loop = true;
    $('#loop_switch').html('<i id="loopbutton" class="fa fa-refresh" aria-hidden="true"></i>');
    $("loopbutton::before").css("content", "\f021");
  }
});

// if loop is off and audio just ended
$('audio').on("ended", function() {
  if (audio.loop === false) {
    audio.duration = 0;
    placehold[1] = (placehold[1] + 1);
    if (placehold[1] > (jukebox[Object.keys(jukebox)[current_item[0]]].length - 1)) {
      placehold[0] = (placehold[0] + 1);
      if (placehold[0] > (Object.keys(jukebox).length - 1)) {
        placehold[0] = 0;
      };
      placehold[1] = 0;
    };
    change_track_in_background(jukebox, placehold[0], placehold[1]);
    audio.play();
    pauseplay();
  };
});

// should change big play to pause if second play was pressed
$('audio').on("play", function() {
  pauseplay();
  console.log("playing");
});

// if loop is on and you're on the audio that is playing
$('audio').on("playing", function() {
  pauseplay();
});

// clicking second pause button should change first pause to play
$('audio').on("pause", function() {
  pauseplay();
  console.log("paused");
});

// searchbar submit
var jbx_indices;
$("#songsearch_form").submit(function () { 
  jbx_indices = findsearch(song_searchbar.val_func(), jukebox, current_item);
  return change_track(jukebox, jbx_indices[0], jbx_indices[1]);
});

// autocomplete
$("#songsearch").autocomplete({source: list_of_search_suggestions(jukebox)});


// notes & suggestions:

// changing song src won't work if you switch songs while first song isn't paused, then pause, then play (change_track: audio.paused)
// clicking second play on a second song while first song is playing shouldn't change button (change_track: audio.paused)

// audio title box shouldn't change size or shape, keep buttons in place (on mobile)

// searching song then going right instead of left resets position

// play button no longer remains pause when shifting through songs
