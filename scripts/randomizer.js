
/* Plants vs. Zombies: Battle for Neighborville */
var bfnplants = ["Peashooter", "Chomper", "Kernel Corn", "Night Cap", "Snapdragon", "Cactus", "Citron", "Acorn", "Sunflower", "Rose"];
var bfnzombies = ["Foot Soldier", "Imp", "Super Brainz", "80's Action Hero", "Electrict Slide", "All-Star", "Captain Deadbeard", "Space Cadet", "Scientist", "Engineer", "Wizard"];

function randomPlant () {
    var randomPlant = Math.floor(Math.random()*bfnplants.length);

    if (randomPlant == 0)
    {
        document.getElementById("bfn_random_character").innerHTML = "Peashooter";
        document.getElementById("character_image").src = "bfnpeashooter.png";
        
    }
    if (randomPlant == 1)
    {
        document.getElementById("bfn_random_character").innerHTML = "Chomper";
    }
    if (randomPlant == 2)
    {
        document.getElementById("bfn_random_character").innerHTML = "Kernel Corn";
    }
    if (randomPlant == 3)
    {
        document.getElementById("bfn_random_character").innerHTML = "Night Cap";
    }
    if (randomPlant == 4)
    {
        document.getElementById("bfn_random_character").innerHTML = "Snapdragon";
    }
    if (randomPlant == 5)
    {
        document.getElementById("bfn_random_character").innerHTML = "Cactus";
    }
    if (randomPlant == 6)
    {
        document.getElementById("bfn_random_character").innerHTML = "Citron";
    }
    if (randomPlant == 7)
    {
        document.getElementById("bfn_random_character").innerHTML = "Acorn";
    }
    if (randomPlant == 8)
    {
        document.getElementById("bfn_random_character").innerHTML = "Sunflower";
    }
    if (randomPlant == 9)
    {
        document.getElementById("bfn_random_character").innerHTML = "Rose";
    }
}

function randomZombie () {
    var randomZombie = Math.floor(Math.random()*bfnplants.length);
    
    if (randomZombie == 0)
    {
        document.getElementById("bfn_random_character").innerHTML = "Foot Soldier";
    }
    if (randomZombie == 1)
    {
        document.getElementById("bfn_random_character").innerHTML = "Imp";
    }
    if (randomZombie == 2)
    {
        document.getElementById("bfn_random_character").innerHTML = "Super Brainz";
    }
    if (randomZombie == 3)
    {
        document.getElementById("bfn_random_character").innerHTML = "80's Action Hero";
    }
    if (randomZombie == 4)
    {
        document.getElementById("bfn_random_character").innerHTML = "Electric Slide";
    }
    if (randomZombie == 5)
    {
        document.getElementById("bfn_random_character").innerHTML = "All-Star";
    }
    if (randomZombie == 6)
    {
        document.getElementById("bfn_random_character").innerHTML = "Captain Deadbeard";
    }
    if (randomZombie == 7)
    {
        document.getElementById("bfn_random_character").innerHTML = "Space Cadet";
    }
    if (randomZombie == 8)
    {
        document.getElementById("bfn_random_character").innerHTML = "Scientist";
    }
    if (randomZombie == 9)
    {
        document.getElementById("bfn_random_character").innerHTML = "Engineer";
    }
    if (randomZombie == 10)
    {
        document.getElementById("bfn_random_character").innerHTML = "Wizard";
    }
}