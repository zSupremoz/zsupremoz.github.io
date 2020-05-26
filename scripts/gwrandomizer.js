
/* Plants vs. Zombies: Garden Warfare */
var gw1plants = ["Peashooter", "Fire Pea", "Ice Pea", "Toxic Pea", "Commando Pea", "Agent Pea", "Law Pea", "Berry Pea", "Plasma Pea",
                "Chomper", "Fire Chomper", "Hot-Rod Chomper", "Power Chomper", "Count Chompula", "Toxic Chomper", "Armor Chomper",
                "Chester Chomper", "Chomp Thing", "Sunflower", "Fire Flower", "Power Flower", "Shadow Flower", "Mystic Flower",
                "Metal Petal", "Sun Pharaoh", "Alien Flower", "Cactus", "Fire Cactus", "Power Cactus", "Future Cactus",
                "Power Cactus", "Camo Cactus", "Bandit Cactus", "Citrus Cactus", "Jade Cactus"];

var gw1zombies = ["Foot Soldier", "Arctic Trooper", "Super Commando", "Tank Commander", "General Supremo", "Camo Ranger",
                "Sky Trooper", "Centurion", "Engineer", "Welder", "Electrician", "Mechanic", "Plumber", "Painter",
                "Landscaper", "Sanitation Expert", "Scientist", "Marine Biologist", "Physicist", "Dr. Toxic", "Astronaut",
                "Chemist", "Archaeologist", "Dr. Chester", "Paleontologist", "All-Star", "Cricket Star", "Hocky Star",
                "Goalie Star", "Rugby Star", "Baseball Star", "Wrestling Star", "Golf Star"];

function randomgw1plant () {
    var randomPlant = Math.floor(Math.random()*gw1plants.length);

    switch (randomPlant) {
        case 0:
            document.getElementById("gw1_random_character").innerHTML = "Peashooter";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/pea.png";
            break;
        case 1:
            document.getElementById("gw1_random_character").innerHTML = "Fire Pea";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/firepea.png";
            break;
        case 2:
            document.getElementById("gw1_random_character").innerHTML = "Ice Pea";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/icepea.png";
            break;
        case 3:
            document.getElementById("gw1_random_character").innerHTML = "Toxic Pea";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/toxicpea.png";
            break;
        case 4:
            document.getElementById("gw1_random_character").innerHTML = "Commando Pea";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/commandopea.png";
            break;
        case 5:
            document.getElementById("gw1_random_character").innerHTML = "Agent Pea";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/agentpea.png";
            break;
        case 6:
            document.getElementById("gw1_random_character").innerHTML = "Law Pea";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/lawpea.png";
            break;
        case 7:
            document.getElementById("gw1_random_character").innerHTML = "Berry Pea";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw1/berrypea.png"
            break;
        case 8:
            document.getElementById("gw1_random_character").innerHTML = "Plasma Pea";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/plasmapea.png";
            break;
        case 9:
            document.getElementById("gw1_random_character").innerHTML = "Chomper";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/chomper.png";
            break;
        case 10:
            document.getElementById("gw1_random_character").innerHTML = "Fire Chomper";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/firechomper.png";
            break;
        case 11:
            document.getElementById("gw1_random_character").innerHTML = "Power Chomper";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/powerchomper.png";
            break;
        case 12:
            document.getElementById("gw1_random_character").innerHTML = "Hot-Rod Chomper";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/hotrodchomper.png";
            break;
        case 13:
            document.getElementById("gw1_random_character").innerHTML = "Count Chompula";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/countchompula.png";
            break;
        case 14:
            document.getElementById("gw1_random_character").innerHTML = "Toxic Chomper";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/toxicchomper.png";
            break;
        case 15:
            document.getElementById("gw1_random_character").innerHTML = "Armor Chomper";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/armorchomper.png";
            break;
        case 16:
            document.getElementById("gw1_random_character").innerHTML = "Chester Chomper";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw1/chesterchomper.png";
            break;
        case 17:
            document.getElementById("gw1_random_character").innerHTML = "Chomp Thing";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/chompthing.png";
            break;
        case 18:
            document.getElementById("gw1_random_character").innerHTML = "Sunflower";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/sunflower.png";
            break;
        case 19:
            document.getElementById("gw1_random_character").innerHTML = "Fire Flower";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/fireflower.png";
            break;
        case 20:
            document.getElementById("gw1_random_character").innerHTML = "Power Flower";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/powerflower.png";
            break;
        case 21:
            document.getElementById("gw1_random_character").innerHTML = "Shadow Flower";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/shadowflower.png";
            break;
        case 22:
            document.getElementById("gw1_random_character").innerHTML = "Mystic Flower";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/mystic.png";
            break;
        case 23:
            document.getElementById("gw1_random_character").innerHTML = "Metal Petal";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/metalpetal.png";
            break;
        case 24:
            document.getElementById("gw1_random_character").innerHTML = "Sun Pharaoh";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/sunpharaoh.png";
            break;
        case 25:
            document.getElementById("gw1_random_character").innerHTML = "Alien Flower";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/alienflower.png";
            break;
        case 26:
            document.getElementById("gw1_random_character").innerHTML = "Cactus";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/cactus.png";
            break;
        case 27:
            document.getElementById("gw1_random_character").innerHTML = "Fire Cactus";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/firecactus.png";
            break;
        case 28:
            document.getElementById("gw1_random_character").innerHTML = "Ice Cactus";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/icecactus.png";
            break;
        case 29:
            document.getElementById("gw1_random_character").innerHTML = "Power Cactus";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/powercactus.png";
            break;
        case 30:
            document.getElementById("gw1_random_character").innerHTML = "Future Cactus";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/futurecactus.png";
            break;
        case 31:
            document.getElementById("gw1_random_character").innerHTML = "Camo Cactus";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/camocactus.png";
            break;
        case 32:
            document.getElementById("gw1_random_character").innerHTML = "Bandit Cactus";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/banditcactus.png";
            break;
        case 33:
            document.getElementById("gw1_random_character").innerHTML = "Citrus Cactus";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw1/citruscactus.png";
            break;
        case 34:
            document.getElementById("gw1_random_character").innerHTML = "Jade Cactus";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/plants/jadecactus.png";
            break;
    }
}

function randomgw1zombie () {
    var randomZombie = Math.floor(Math.random()*gw1zombies.length);

    switch (randomZombie)
    {
        case 0:
            document.getElementById("gw1_random_character").innerHTML = "Foot Soldier";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/soldier.png";
            break;
        case 1:
            document.getElementById("gw1_random_character").innerHTML = "Arctic Trooper";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/arctictrooper.png";
            break;
        case 2:
            document.getElementById("gw1_random_character").innerHTML = "Super Commando";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/supercommando.png";
            break;
        case 3:
            document.getElementById("gw1_random_character").innerHTML = "Tank Commander";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/tankcommander.png";
            break;
        case 4:
            document.getElementById("gw1_random_character").innerHTML = "General Supremo";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/generalsupremo.png";
            break;
        case 5:
            document.getElementById("gw1_random_character").innerHTML = "Camo Ranger";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/camoranger.png";
            break;
        case 6:
            document.getElementById("gw1_random_character").innerHTML = "Sky Trooper";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/skytrooper.png";
            break;
        case 7:
            document.getElementById("gw1_random_character").innerHTML = "Centurion";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/centurion.png";
            break;
        case 8:
            document.getElementById("gw1_random_character").innerHTML = "Engineer";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/engineer.png";
            break;
        case 9:
            document.getElementById("gw1_random_character").innerHTML = "Welder";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/welder.png";
            break;
        case 10:
            document.getElementById("gw1_random_character").innerHTML = "Electrician";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/electrician.png";
            break;
        case 11:
            document.getElementById("gw1_random_character").innerHTML = "Mechanic";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/mechanic.png";
            break;
        case 11:
            document.getElementById("gw1_random_character").innerHTML = "Plumber";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/plumber.png";
            break;
        case 12:
            document.getElementById("gw1_random_character").innerHTML = "Painter";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/painter.png";
            break;
        case 13:
            document.getElementById("gw1_random_character").innerHTML = "Landscaper";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/landscaper.png";
            break;
        case 14:
            document.getElementById("gw1_random_character").innerHTML = "Sanitation Expert";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/sanitationexpert.png";
            break;
        case 15:
            document.getElementById("gw1_random_character").innerHTML = "Scientist";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/scientist.png";
            break;
        case 16:
            document.getElementById("gw1_random_character").innerHTML = "Marine Biologist";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/marinebio.png";
            break;
        case 17:
            document.getElementById("gw1_random_character").innerHTML = "Physicicst";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/physicist.png";
            break;
        case 18:
            document.getElementById("gw1_random_character").innerHTML = "Dr. Toxic";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/drtoxic.png";
            break;
        case 19:
            document.getElementById("gw1_random_character").innerHTML = "Astronaut";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/astronaut.png";
            break;
        case 20:
            document.getElementById("gw1_random_character").innerHTML = "Chemist";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/chemist.png";
            break;
        case 21:
            document.getElementById("gw1_random_character").innerHTML = "Archeologist";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/archeologist.png";
            break;
        case 22:
            document.getElementById("gw1_random_character").innerHTML = "Dr. Chester";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw1/drchester.png";
            break;
        case 23:
            document.getElementById("gw1_random_character").innerHTML = "Paleontologist";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/paleontologist.png";
            break;
        case 24:
            document.getElementById("gw1_random_character").innerHTML = "All-Star";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/allstar.png";
            break;
        case 25:
            document.getElementById("gw1_random_character").innerHTML = "Cricket Star";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/cricketstar.png";
            break;
        case 26:
            document.getElementById("gw1_random_character").innerHTML = "Hockey Star";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/hockeystar.png";
            break;
        case 27:
            document.getElementById("gw1_random_character").innerHTML = "Goalie Star";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/goaliestar.png";
            break;
        case 28:
            document.getElementById("gw1_random_character").innerHTML = "Rugby Star";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/rugby.png";
            break;
        case 29:
            document.getElementById("gw1_random_character").innerHTML = "Baseball Star";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/baseballstar.png";
            break;
        case 30:
            document.getElementById("gw1_random_character").innerHTML = "Wrestling Star";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/wrestling.png";
            break;
        case 31:
            document.getElementById("gw1_random_character").innerHTML = "Golf Star";
            document.getElementById("character_image_gw1").src = "../images/randomizer assets/gw2/zombies/golfstar.png";
            break;
    }
}