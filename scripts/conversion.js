/* Converts the specified XP amount to Prize Bulbs*/
function convertToPrizeBulb () {
    var xpCount = document.getElementById("xp_amount").value;
    var result = xpCount / 5000;
    
    document.getElementById("prize_bulbs").value = result;
}

/* Converts the specified Prize Bulb amount to XP */
function convertToXp () {
    var BulbCount = document.getElementById("prize_bulbs").value;
    var result = BulbCount * 5000;

    document.getElementById("xp_amount").value = result;
}