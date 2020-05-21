
/* Plants vs. Zombies: Battle for Neighborville */
var bfnplants = ["Peashooter", "Chomper", "Kernel Corn", "Night Cap", "Snapdragon", "Cactus", "Citron", "Acorn", "Sunflower", "Rose"];
var bfnzombies = ["Foot Soldier", "Imp", "Super Brainz", "80's Action Hero", "Electrict Slide", "All-Star", "Captain Deadbeard", "Space Cadet", "Scientist", "Engineer", "Wizard"];
/*
var HasLegendaryUpg = [0, 1];
*/
function randomBfnPlant () {
    var randomPlant = Math.floor(Math.random()*bfnplants.length);

    switch (randomPlant)
    {
        case 0:
            document.getElementById("bfn_random_character").innerHTML = "Peashooter";
            document.getElementById("character_image").src = "../images/randomizer assets/bfn/plants/bfnpeashooter.png";
            break;
        
        case 1:
            document.getElementById("bfn_random_character").innerHTML = "Chomper";
            document.getElementById("character_image").src = "../images/randomizer assets/bfn/plants/bfnchomper.png";
            break;
        
        case 2:
            document.getElementById("bfn_random_character").innerHTML = "Kernel Corn";
            document.getElementById("character_image").src = "../images/randomizer assets/bfn/plants/bfncorn.png";
            var useLegendary = Math.floor(Math.random()*HasLegendaryUpg.length);
            /*
            switch (useLegendary)
            {
                case 0:
                    alert("Use this characgter's Legendary Upgrade");
                    break;
                case 1:
                    break;
            }
            */
            break;

        case 3:
            document.getElementById("bfn_random_character").innerHTML = "Night Cap";
            document.getElementById("character_image").src = "../images/randomizer assets/bfn/plants/bfnnightcap.png";
            break;

        case 4:
            document.getElementById("bfn_random_character").innerHTML = "Snapdragon";
            document.getElementById("character_image").src = "../images/randomizer assets/bfn/plants/bfnsnapdragon.png";
            break;

        case 5:
            document.getElementById("bfn_random_character").innerHTML = "Cactus";
            document.getElementById("character_image").src = "../images/randomizer assets/bfn/plants/bfncactus.png";
            break;

        case 6:
            document.getElementById("bfn_random_character").innerHTML = "Citron";
            document.getElementById("character_image").src = "../images/randomizer assets/bfn/plants/bfncitron.png";
            break;

        case 7:
            document.getElementById("bfn_random_character").innerHTML = "Oak + Acorn";
            document.getElementById("character_image").src = "../images/randomizer assets/bfn/plants/bfnacorn.png";
            break;
            
        case 8:
            document.getElementById("bfn_random_character").innerHTML = "Sunflower";
            document.getElementById("character_image").src = "../images/randomizer assets/bfn/plants/bfnsunflower.png";
            break;

        case 9:
            document.getElementById("bfn_random_character").innerHTML = "Rose";
            document.getElementById("character_image").src = "../images/randomizer assets/bfn/plants/bfnrose.png";
            var useLegendary = Math.floor(Math.random()*HasLegendaryUpg.length);

            /*
            switch (useLegendary)
            {
                case 0:
                    alert("Use this characgter's Legendary Upgrade");
                    break;
                case 1:
                    break;
            }
            */
            break;
    }
}

function randomBfnZombie () {
    var randomZombie = Math.floor(Math.random()*bfnplants.length);
    
    switch (randomZombie)
    {
        case 0:
            document.getElementById("bfn_random_character").innerHTML = "Foot Soldier";
            document.getElementById("character_image").src = "../images/randomizer assets/bfn/zombies/bfn soldier.png";
            break;

        case 1:
            document.getElementById("bfn_random_character").innerHTML = "Imp";
            document.getElementById("character_image").src = "../images/randomizer assets/bfn/zombies/bfn imp.png";
            break;

        case 2:
            document.getElementById("bfn_random_character").innerHTML = "Super Brainz";
            document.getElementById("character_image").src = "../images/randomizer assets/bfn/zombies/bfn super brainz.png";
            break;

        case 3:
            document.getElementById("bfn_random_character").innerHTML = "80's Action Hero";
            document.getElementById("character_image").src = "../images/randomizer assets/bfn/zombies/bfn action hero.png";
            break;

        case 4:
            document.getElementById("bfn_random_character").innerHTML = "Electric Slide";
            document.getElementById("character_image").src = "../images/randomizer assets/bfn/zombies/bfn electric slide.png";
            break;

        case 5:
            document.getElementById("bfn_random_character").innerHTML = "All-Star";
            document.getElementById("character_image").src = "../images/randomizer assets/bfn/zombies/bfn all star.png";
            break;

        case 6:
            document.getElementById("bfn_random_character").innerHTML = "Captain Deadbeard";
            document.getElementById("character_image").src = "../images/randomizer assets/bfn/zombies/bfn deadbeard.png";
            break;

        case 7:
            document.getElementById("bfn_random_character").innerHTML = "Space Cadet";
            document.getElementById("character_image").src = "../images/randomizer assets/bfn/zombies/bfn space cadet.png";
            break;

        case 8:
            document.getElementById("bfn_random_character").innerHTML = "Scientist";
            document.getElementById("character_image").src = "../images/randomizer assets/bfn/zombies/bfn scientist.png";
            var useLegendary = Math.floor(Math.random()*HasLegendaryUpg.length);

            /*
            switch (useLegendary)
            {
                case 0:
                    alert("Use this characgter's Legendary Upgrade");
                    break;
                case 1:
                    break;
            }
            */
            break;

        case 9:
            document.getElementById("bfn_random_character").innerHTML = "Engineer";
            document.getElementById("character_image").src = "../images/randomizer assets/bfn/zombies/bfn engineer.png";
            break;

        case 10:
            document.getElementById("bfn_random_character").innerHTML = "Wizard";
            document.getElementById("character_image").src = "../images/randomizer assets/bfn/zombies/bfn wizard.png";
            break;

    }
}