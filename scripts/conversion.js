
var BulbCount;

/* Converts the specified XP amount to Prize Bulbs*/
function convertToPrizeBulb () {
    var xpCount = document.getElementById("xp_amount").value;
    var result = xpCount / 4000;
    
    document.getElementById("prize_bulbs").value = result;
    BulbCount = result;
}

/* Converts the specified Prize Bulb amount to XP */
function convertToXp () {
    BulbCount = document.getElementById("prize_bulbs").value;
    var result = BulbCount * 4000;

    document.getElementById("xp_amount").value = result;
}

/* Plans to hopefully estimate the amount of Rainbow Stars needed to get Bulb */
function getStars () {
    var bulbsFive = 250;
    var bulbsTen = 450;
    var bulbsTwenty = 800;
    var result;

    if (BulbCount <= 5)
    {
        document.getElementById("stars").value = bulbsFive;
    }
    else if (BulbCount <= 10 && BulbCount > 5)
    {
        document.getElementById("stars").value = bulbsTen;
    }
    else if (BulbCount <= 15 && BulbCount > 10)
    {
        result = bulbsFive + bulbsTen;
        document.getElementById("stars").value = result;
    }
    else if (BulbCount <= 20 && BulbCount > 10)
    {
        document.getElementById("stars").value = bulbsTwenty;
    }
    else if (BulbCount <= 25 && BulbCount > 20)
    {
        result = bulbsFive + bulbsTwenty;
        document.getElementById("stars").value = result;
    }
    else if (BulbCount <= 30 && BulbCount > 25)
    {
        result = bulbsTen + bulbsTwenty;
        document.getElementById("stars").value = result;
    }
    else if (BulbCount <= 35 && BulbCount > 30)
    {
        result = bulbsFive + bulbsTen + bulbsTwenty;
        document.getElementById("stars").value = result;
    }
    else if (BulbCount <= 40 && BulbCount > 35)
    {
        result = bulbsTwenty + bulbsTwenty;
        document.getElementById("stars").value = result;
    }
    else if (BulbCount <= 45 && BulbCount > 40)
    {
        result = bulbsTwenty + bulbsTwenty + bulbsFive;
        document.getElementById("stars").value = result;
    }
    else if (BulbCount <= 50 && BulbCount > 45)
    {
        result = bulbsTwenty + bulbsTwenty + bulbsTen;
        document.getElementById("stars").value = result;
    }
}