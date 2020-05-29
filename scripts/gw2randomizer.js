var gw2plants = ["Peashooter", "Fire Pea", "Ice Pea", "Toxic Pea", "Commando Pea", "Agent Pea", "Law Pea", "Plasma Pea",
                "Rock Pea", "Electro Pea", "Chomper", "Fire Chomper", "Hot-Rod Chomper", "Power Chomper", "Count Chompula",
                "Toxic Chomper", "Armor Chomper", "Chomp Thing", "Yeti Chomper", "Disco Chomper", "Unicorn Chomper",
                "Twilight Chomper", "Sunflower", "Fire Flower", "Power Flower", "Shadow Flower", "Mystic Flower",
                "Metal Petal", "Sun Pharaoh", "Alien Flower", "Vampire Flower", "Stuffy Flower", "Cactus", "Fire Cactus", 
                "Power Cactus", "Future Cactus", "Power Cactus", "Camo Cactus", "Bandit Cactus", "Jade Cactus", "Zen Cactus",
                "Petrified Cactus", "Citron", "Ice Citron", "Electro Citron", "Iron Citron", "Party Citron", "Toxic Citron",
                "Rose", "Druid Rose", "Fire Rose", "Frost Rose", "Party Rose", "Nec'Rose", "Kernel Corn", "BBQ Corn",
                "Pops Corn", "Mob Cob", "Party Corn", "Commando Corn", "Torchwood"];

var gw2zombies = ["Foot Soldier", "Arctic Trooper", "Super Commando", "Tank Commander", "General Supremo", "Camo Ranger",
                "Sky Trooper", "Centurion", "Park Ranger", "Scuba Soldier", "Engineer", "Welder", "Electrician", "Mechanic", 
                "Plumber", "Painter", "Landscaper", "Sanitation Expert", "Roadie-Z", "A.C-Perry", "Scientist", "Marine Biologist", 
                "Physicist", "Dr. Toxic", "Astronaut", "Chemist", "Archaeologist", "Paleontologist", "Zoologist", 
                "Computer Scientist", "All-Star", "Cricket Star", "Hocky Star", "Goalie Star", "Rugby Star", 
                "Baseball Star", "Wrestling Star", "Golf Star", "Tennis Star", "Moto-X Star", "Imp", "Lil' Drake", "Pylon Imp",
                "S.H.R.Imp", "Party Imp", "Z7 Imp", "Scallywag Imp", "Super Brainz", "Cozmic Brainz", "Electro Brainz",
                "Toxic Brainz", "Party Brainz", "Breakfast Brainz", "Captain Deadbeard", "Captain Cannon", "Captain Flameface",
                "Captain Sharkbite", "Captain Partyman", "Captain Squawk", "Hovergoat-3000"];

function randomgw2plant () {
    var randomPlant = Math.floor(Math.random()*gw2plants.length);

    switch (randomPlant) {
        case 0:
            document.getElementById("gw2_random_character").innerHTML = "Peashooter";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/pea.png";
            break;
        case 1:
            document.getElementById("gw2_random_character").innerHTML = "Fire Pea";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/firepea.png";
            break;
        case 2:
            document.getElementById("gw2_random_character").innerHTML = "Ice Pea";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/icepea.png";
            break;
        case 3:
            document.getElementById("gw2_random_character").innerHTML = "Toxic Pea";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/toxicpea.png";
            break;
        case 4:
            document.getElementById("gw2_random_character").innerHTML = "Commando Pea";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/commandopea.png";
            break;
        case 5:
            document.getElementById("gw2_random_character").innerHTML = "Agent Pea";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/agentpea.png";
            break;
        case 6:
            document.getElementById("gw2_random_character").innerHTML = "Law Pea";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/lawpea.png";
            break;
        case 7:
            document.getElementById("gw2_random_character").innerHTML = "Plasma Pea";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/plasmapea.png";
            break;
        case 8:
            document.getElementById("gw2_random_character").innerHTML = "Rock Pea";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/rockpea.png";
            break;
        case 9:
            document.getElementById("gw2_random_character").innerHTML = "Electro Pea";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/electropea.png";
            break;
        case 10:
            document.getElementById("gw2_random_character").innerHTML = "Chomper";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/chomper.png";
            break;
        case 11:
            document.getElementById("gw2_random_character").innerHTML = "Fire Chomper";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/firechomper.png";
            break;
        case 12:
            document.getElementById("gw2_random_character").innerHTML = "Hot-Rod Chomper";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/hotrodchomper.png";
            break;
        case 13:
            document.getElementById("gw2_random_character").innerHTML = "Power Chomper";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/powerchomper.png";
            break;
        case 14:
            document.getElementById("gw2_random_character").innerHTML = "Count Chompula";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/countchompula.png";
            break;
        case 15:
            document.getElementById("gw2_random_character").innerHTML = "Toxic Chomper";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/toxicchomper.png";
            break;
        case 16:
            document.getElementById("gw2_random_character").innerHTML = "Armor Chomper";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/armorchomper.png";
            break;
        case 17:
            document.getElementById("gw2_random_character").innerHTML = "Chomp Thing";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/chompthing.png";
            break;
        case 18:
            document.getElementById("gw2_random_character").innerHTML = "Yeti Chomper";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/yetichomper.png";
            break;
        case 19:
            document.getElementById("gw2_random_character").innerHTML = "Disco Chomper";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/discochomper.png";
            break;
        case 20:
            document.getElementById("gw2_random_character").innerHTML = "Unicorn Chomper";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/unicornchomper.png";
            break;
        case 21:
            document.getElementById("gw2_random_character").innerHTML = "Twilight Chomper";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/twilightchomper.png";
            break;
        case 22:
            document.getElementById("gw2_random_character").innerHTML = "Sunflower";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/sunflower.png";
            break;
        case 23:
            document.getElementById("gw2_random_character").innerHTML = "Fire Flower";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/fireflower.png";
            break;
        case 24:
            document.getElementById("gw2_random_character").innerHTML = "Power Flower";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/powerflower.png";
            break;
        case 25:
            document.getElementById("gw2_random_character").innerHTML = "Shadow Flower";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/shadowflower.png";
            break;
        case 26:
            document.getElementById("gw2_random_character").innerHTML = "Mystic Flower";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/mystic.png";
            break;
        case 27:
            document.getElementById("gw2_random_character").innerHTML = "Metal Petal";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/metalpetal.png";
            break;
        case 28:
            document.getElementById("gw2_random_character").innerHTML = "Sun Pharaoh";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/sunpharaoh.png";
            break;
        case 29:
            document.getElementById("gw2_random_character").innerHTML = "Alien Flower";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/alienflower.png";
            break;
        case 30:
            document.getElementById("gw2_random_character").innerHTML = "Vampire Flower";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/vampireflower.png";
            break;
        case 31:
            document.getElementById("gw2_random_character").innerHTML = "Stuffy Flower";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/stuffyflower.png";
            break;
        case 32:
            document.getElementById("gw2_random_character").innerHTML = "Cactus";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/cactus.png";
            break;
        case 33:
            document.getElementById("gw2_random_character").innerHTML = "Fire Cactus";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/firecactus.png";
            break;
        case 34:
            document.getElementById("gw2_random_character").innerHTML = "Ice Cactus";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/icecactus.png";
            break;
        case 35:
            document.getElementById("gw2_random_character").innerHTML = "Power Cactus";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/powercactus.png";
            break;
        case 36:
            document.getElementById("gw2_random_character").innerHTML = "Future Cactus";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/futurecactus.png";
            break;
        case 37:
            document.getElementById("gw2_random_character").innerHTML = "Camo Cactus";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/camocactus.png";
            break;
        case 38:
            document.getElementById("gw2_random_character").innerHTML = "Bandit Cactus";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/banditcactus.png";
            break;
        case 39:
            document.getElementById("gw2_random_character").innerHTML = "Jade Cactus";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/jadecactus.png";
            break;
        case 40:
            document.getElementById("gw2_random_character").innerHTML = "Zen Cactus";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/zencactus.png";
            break;
        case 41:
            document.getElementById("gw2_random_character").innerHTML = "Petrified Cactus";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/petrifiedcactus.png";
            break;
        case 42:
            document.getElementById("gw2_random_character").innerHTML = "Citron";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/citron.png";
            break;
        case 43:
            document.getElementById("gw2_random_character").innerHTML = "Frozen Citron";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/frozencitron.png";
            break;
        case 44:
            document.getElementById("gw2_random_character").innerHTML = "Electro Citron";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/electrocitron.png";
            break;
        case 45:
            document.getElementById("gw2_random_character").innerHTML = "Iron Citron";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/ironcitron.png";
            break;
        case 46:
            document.getElementById("gw2_random_character").innerHTML = "Party Citron";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/partycitron.png";
            break;
        case 47:
            document.getElementById("gw2_random_character").innerHTML = "Toxic Citron";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/toxiccitron.png";
            break;
        case 48:
            document.getElementById("gw2_random_character").innerHTML = "Rose";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/rose.png";
            break;
        case 49:
            document.getElementById("gw2_random_character").innerHTML = "Druid Rose";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/druidrose.png";
            break;
        case 50:
            document.getElementById("gw2_random_character").innerHTML = "Fire Rose";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/firerose.png";
            break;
        case 51:
            document.getElementById("gw2_random_character").innerHTML = "Frost Rose";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/frostrose.png";
            break;
        case 52:
            document.getElementById("gw2_random_character").innerHTML = "Party Rose";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/partyrose.png";
            break;
        case 53:
            document.getElementById("gw2_random_character").innerHTML = "Nec'Rose";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/necrose.png";
            break;
        case 54:
            document.getElementById("gw2_random_character").innerHTML = "Kernel Corn";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/corn.png";
            break;
        case 55:
            document.getElementById("gw2_random_character").innerHTML = "BBQ Corn";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/bbqcorn.png";
            break;
        case 56:
            document.getElementById("gw2_random_character").innerHTML = "Pops Corn";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/popscorn.png";
            break;
        case 57:
            document.getElementById("gw2_random_character").innerHTML = "Mob Cob";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/mobcob.png";
            break;
        case 58:
            document.getElementById("gw2_random_character").innerHTML = "Party Corn";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/partycorn.png";
            break;
        case 59:
            document.getElementById("gw2_random_character").innerHTML = "Commando Corn";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/commandocorn.png";
            break;
        case 60:
            document.getElementById("gw2_random_character").innerHTML = "Torchwood";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/plants/torchwood.png";
            break;
    }
}

function randomgw2zombie () {
    var randomZombie = Math.floor(Math.random()*gw2zombies.length);

    switch(randomZombie) {
        case 0:
            document.getElementById("gw2_random_character").innerHTML = "Foot Soldier";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/soldier.png";
            break;
        case 1:
            document.getElementById("gw2_random_character").innerHTML = "Arctic Trooper";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/arctictrooper.png";
            break;
        case 2:
            document.getElementById("gw2_random_character").innerHTML = "Super Commando";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/supercommando.png";
            break;
        case 3:
            document.getElementById("gw2_random_character").innerHTML = "Tank Commander";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/tankcommander.png";
            break;
        case 4:
            document.getElementById("gw2_random_character").innerHTML = "General Supremo";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/generalsupremo.png";
            break;
        case 5:
            document.getElementById("gw2_random_character").innerHTML = "Camo Ranger";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/camoranger.png";
            break;
        case 6:
            document.getElementById("gw2_random_character").innerHTML = "Sky Trooper";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/skytrooper.png";
            break;
        case 7:
            document.getElementById("gw2_random_character").innerHTML = "Centurion";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/centurion.png";
            break;
        case 8:
            document.getElementById("gw2_random_character").innerHTML = "Park Ranger";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/parkranger.png";
            break;
        case 9:
            document.getElementById("gw2_random_character").innerHTML = "Scuba Soldier";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/scuba.png";
            break;
        case 10:
            document.getElementById("gw2_random_character").innerHTML = "Engineer";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/engineer.png";
            break;
        case 11:
            document.getElementById("gw2_random_character").innerHTML = "Welder";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/welder.png";
            break;
        case 12:
            document.getElementById("gw2_random_character").innerHTML = "Electrician";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/electrician.png";
            break;
        case 13:
            document.getElementById("gw2_random_character").innerHTML = "Mechanic";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/mechanic.png";
            break;
        case 14:
            document.getElementById("gw2_random_character").innerHTML = "Plumber";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/plumber.png";
            break;
        case 15:
            document.getElementById("gw2_random_character").innerHTML = "Painter";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/painter.png";
            break;
        case 16:
            document.getElementById("gw2_random_character").innerHTML = "Landscaper";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/landscaper.png";
            break;
        case 17:
            document.getElementById("gw2_random_character").innerHTML = "Sanitation Expert";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/sanitationexpert.png";
            break;
        case 18:
            document.getElementById("gw2_random_character").innerHTML = "Roadie-Z";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/roadiez.png";
            break;
        case 19:
            document.getElementById("gw2_random_character").innerHTML = "AC Perry";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/acperry.png";
            break;
        case 20:
            document.getElementById("gw2_random_character").innerHTML = "Scientist";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/scientist.png";
            break;
        case 21:
            document.getElementById("gw2_random_character").innerHTML = "Marine Biologist";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/marinebio.png";
            break;
        case 22:
            document.getElementById("gw2_random_character").innerHTML = "Physicist";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/physicist.png";
            break;
        case 23:
            document.getElementById("gw2_random_character").innerHTML = "Dr. Toxic";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/drtoxic.png";
            break;
        case 24:
            document.getElementById("gw2_random_character").innerHTML = "Astronaut";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/astronaut.png";
            break;
        case 25:
            document.getElementById("gw2_random_character").innerHTML = "Chemist";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/chemist.png";
            break;
        case 26:
            document.getElementById("gw2_random_character").innerHTML = "Archeologist";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/archeologist.png";
            break;
        case 27:
            document.getElementById("gw2_random_character").innerHTML = "Paleontologist";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/paleontologist.png";
            break;
        case 28:
            document.getElementById("gw2_random_character").innerHTML = "Zoologist";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/zoologist.png";
            break;
        case 29:
            document.getElementById("gw2_random_character").innerHTML = "Computer Scientist";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/computerscientist.png";
            break;
        case 30:
            document.getElementById("gw2_random_character").innerHTML = "All-Star";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/allstar.png";
            break;
        case 31:
            document.getElementById("gw2_random_character").innerHTML = "Cricket Star";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/cricketstar.png";
            break;
        case 32:
            document.getElementById("gw2_random_character").innerHTML = "Hockey Star";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/hockeystar.png";
            break;
        case 33:
            document.getElementById("gw2_random_character").innerHTML = "Goalie Star";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/goaliestar.png";
            break;
        case 34:
            document.getElementById("gw2_random_character").innerHTML = "Rugby Star";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/rugby.png";
            break;
        case 35:
            document.getElementById("gw2_random_character").innerHTML = "Baseball Star";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/baseballstar.png";
            break;
        case 36:
            document.getElementById("gw2_random_character").innerHTML = "Wrestling Star";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/wrestling.png";
            break;
        case 37:
            document.getElementById("gw2_random_character").innerHTML = "Golf Star";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/golfstar.png";
            break;
        case 38:
            document.getElementById("gw2_random_character").innerHTML = "Tennis Star";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/tennis.png";
            break;
        case 39:
            document.getElementById("gw2_random_character").innerHTML = "Moto-X Star";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/motoxstar.png";
            break;
        case 40:
            document.getElementById("gw2_random_character").innerHTML = "Imp";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/imp.png";
            break;
        case 41:
            document.getElementById("gw2_random_character").innerHTML = "Lil' Drake";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/drake.png";
            break;
        case 42:
            document.getElementById("gw2_random_character").innerHTML = "Pylon Imp";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/pylon.png";
            break;
        case 43:
            document.getElementById("gw2_random_character").innerHTML = "S.H.R.Imp";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/shrimp.png";
            break;
        case 44:
            document.getElementById("gw2_random_character").innerHTML = "Party Imp";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/partyimp.png";
            break;
        case 45:
            document.getElementById("gw2_random_character").innerHTML = "Z7 Imp";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/z7imp.png";
            break;
        case 46:
            document.getElementById("gw2_random_character").innerHTML = "Scallywag Imp";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/scallywag.png";
            break;
        case 47:
            document.getElementById("gw2_random_character").innerHTML = "Super Brainz";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/superbrainz.png";
            break;
        case 48:
            document.getElementById("gw2_random_character").innerHTML = "Cozmic Brainz";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/cozmic.png";
            break;
        case 49:
            document.getElementById("gw2_random_character").innerHTML = "Electro Brainz";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/electrobrainz.png";
            break;
        case 50:
            document.getElementById("gw2_random_character").innerHTML = "Toxic Brainz";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/toxicbrainz.png";
            break;
        case 51:
            document.getElementById("gw2_random_character").innerHTML = "Party Brainz";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/partybrainz.png";
            break;
        case 52:
            document.getElementById("gw2_random_character").innerHTML = "Breakfast Brainz";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/breakfast.png";
            break;
        case 53:
            document.getElementById("gw2_random_character").innerHTML = "Captain Deadbeard";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/deadbeard.png";
            break;
        case 54:
            document.getElementById("gw2_random_character").innerHTML = "Captain Cannon";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/cannon.png";
            break;
        case 55:
            document.getElementById("gw2_random_character").innerHTML = "Captain Flameface";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/flameface.png";
            break;
        case 56:
            document.getElementById("gw2_random_character").innerHTML = "Captain Sharkbite";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/sharkbite.png";
            break;
        case 57:
            document.getElementById("gw2_random_character").innerHTML = "Captain Partyman";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/partyman.png";
            break;
        case 58:
            document.getElementById("gw2_random_character").innerHTML = "Captain Squawk";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/squawk.png";
            break;
        case 59:
            document.getElementById("gw2_random_character").innerHTML = "Hover Goat-3000";
            document.getElementById("character_image_gw2").src = "../images/randomizer assets/gw2/zombies/hovergoat.png";
            break;
    }
}