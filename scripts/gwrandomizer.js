
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
            break;
        case 1:
            document.getElementById("gw1_random_character").innerHTML = "Fire Pea";
            break;
        case 2:
            document.getElementById("gw1_random_character").innerHTML = "Ice Pea";
            break;
        case 3:
            document.getElementById("gw1_random_character").innerHTML = "Toxic Pea";
            break;
        case 4:
            document.getElementById("gw1_random_character").innerHTML = "Commando Pea";
            break;
        case 5:
            document.getElementById("gw1_random_character").innerHTML = "Agent Pea";
            break;
        case 6:
            document.getElementById("gw1_random_character").innerHTML = "Law Pea";
            break;
        case 7:
            document.getElementById("gw1_random_character").innerHTML = "Berry Pea";
            break;
        case 8:
            document.getElementById("gw1_random_character").innerHTML = "Plasma Pea";
            break;
        case 9:
            document.getElementById("gw1_random_character").innerHTML = "Chomper";
            break;
        case 10:
            document.getElementById("gw1_random_character").innerHTML = "Fire Chomper";
            break;
        case 11:
            document.getElementById("gw1_random_character").innerHTML = "Power Chomper";
            break;
        case 12:
            document.getElementById("gw1_random_character").innerHTML = "Hot-Rod Chomper";
            break;
        case 13:
            document.getElementById("gw1_random_character").innerHTML = "Count Chompula";
            break;
        case 14:
            document.getElementById("gw1_random_character").innerHTML = "Toxic Chomper";
            break;
        case 15:
            document.getElementById("gw1_random_character").innerHTML = "Armor Chomper";
            break;
        case 16:
            document.getElementById("gw1_random_character").innerHTML = "Chester Chomper";
            break;
        case 17:
            document.getElementById("gw1_random_character").innerHTML = "Chomp Thing";
            break;
        case 18:
            document.getElementById("gw1_random_character").innerHTML = "Sunflower";
            break;
        case 19:
            document.getElementById("gw1_random_character").innerHTML = "Fire Flower";
            break;
        case 20:
            document.getElementById("gw1_random_character").innerHTML = "Power Flower";
            break;
        case 21:
            document.getElementById("gw1_random_character").innerHTML = "Shadow Flower";
            break;
        case 22:
            document.getElementById("gw1_random_character").innerHTML = "Mystic Flower";
            break;
        case 23:
            document.getElementById("gw1_random_character").innerHTML = "Metal Petal";
            break;
        case 24:
            document.getElementById("gw1_random_character").innerHTML = "Sun Pharaoh";
            break;
        case 25:
            document.getElementById("gw1_random_character").innerHTML = "Alien Flower";
            break;
        case 26:
            document.getElementById("gw1_random_character").innerHTML = "Cactus";
            break;
        case 27:
            document.getElementById("gw1_random_character").innerHTML = "Fire Cactus";
            break;
        case 28:
            document.getElementById("gw1_random_character").innerHTML = "Ice Cactus";
            break;
        case 29:
            document.getElementById("gw1_random_character").innerHTML = "Power Cactus";
            break;
        case 30:
            document.getElementById("gw1_random_character").innerHTML = "Future Cactus";
            break;
        case 31:
            document.getElementById("gw1_random_character").innerHTML = "Camo Cactus";
            break;
        case 32:
            document.getElementById("gw1_random_character").innerHTML = "Bandit Cactus";
            break;
        case 33:
            document.getElementById("gw1_random_character").innerHTML = "Citrus Cactus";
            break;
        case 34:
            document.getElementById("gw1_random_character").innerHTML = "Jade Cactus";
            break;
    }
}

function randomgw1zombie () {
    var randomZombie = Math.floor(Math.random()*gw1zombies.length);

    switch (randomZombie)
    {
        case 0:
            document.getElementById("gw1_random_character").innerHTML = "Foot Soldier";
            break;
        case 1:
            document.getElementById("gw1_random_character").innerHTML = "Arctic Trooper";
            break;
        case 2:
            document.getElementById("gw1_random_character").innerHTML = "Super Commando";
            break;
        case 3:
            document.getElementById("gw1_random_character").innerHTML = "Tank Commander";
            break;
        case 4:
            document.getElementById("gw1_random_character").innerHTML = "General Supremo";
            break;
        case 5:
            document.getElementById("gw1_random_character").innerHTML = "Camo Ranger";
            break;
        case 6:
            document.getElementById("gw1_random_character").innerHTML = "Sky Trooper";
            break;
        case 7:
            document.getElementById("gw1_random_character").innerHTML = "Centurion";
            break;
        case 8:
            document.getElementById("gw1_random_character").innerHTML = "Engineer";
            break;
        case 9:
            document.getElementById("gw1_random_character").innerHTML = "Welder";
            break;
        case 10:
            document.getElementById("gw1_random_character").innerHTML = "Electrician";
            break;
        case 11:
            document.getElementById("gw1_random_character").innerHTML = "Mechanic";
            break;
        case 11:
            document.getElementById("gw1_random_character").innerHTML = "Plumber";
            break;
        case 12:
            document.getElementById("gw1_random_character").innerHTML = "Painter";
            break;
        case 13:
            document.getElementById("gw1_random_character").innerHTML = "Landscaper";
            break;
        case 14:
            document.getElementById("gw1_random_character").innerHTML = "Sanitation Expert";
            break;
        case 15:
            document.getElementById("gw1_random_character").innerHTML = "Scientist";
            break;
        case 16:
            document.getElementById("gw1_random_character").innerHTML = "Marine Biologist";
            break;
        case 17:
            document.getElementById("gw1_random_character").innerHTML = "Physicicst";
            break;
        case 18:
            document.getElementById("gw1_random_character").innerHTML = "Dr. Toxic";
            break;
        case 19:
            document.getElementById("gw1_random_character").innerHTML = "Astronaut";
            break;
        case 20:
            document.getElementById("gw1_random_character").innerHTML = "Chemist";
            break;
        case 21:
            document.getElementById("gw1_random_character").innerHTML = "Archaeologist";
            break;
        case 22:
            document.getElementById("gw1_random_character").innerHTML = "Dr. Chester";
            break;
        case 23:
            document.getElementById("gw1_random_character").innerHTML = "Paleontologist";
            break;
        case 24:
            document.getElementById("gw1_random_character").innerHTML = "All-Star";
            break;
        case 25:
            document.getElementById("gw1_random_character").innerHTML = "Cricket Star";
            break;
        case 26:
            document.getElementById("gw1_random_character").innerHTML = "Hockey Star";
            break;
        case 27:
            document.getElementById("gw1_random_character").innerHTML = "Goalie Star";
            break;
        case 28:
            document.getElementById("gw1_random_character").innerHTML = "Rugby Star";
            break;
        case 29:
            document.getElementById("gw1_random_character").innerHTML = "Baseball Star";
            break;
        case 30:
            document.getElementById("gw1_random_character").innerHTML = "Wrestling Star";
            break;
        case 31:
            document.getElementById("gw1_random_character").innerHTML = "Golf Star";
            break;
    }
}