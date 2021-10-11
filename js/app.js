//Important: Three buttons but one damage function, damage should be modified based off which button is pressed


var mainEle=document.body.querySelector(".gurenyuu")
var secondEle=document.body.querySelector(".gurenyuu2")
var thirdEle=document.body.querySelector(".gurenyuu3")
var fireDragonBonus= -1
var iceDragonBonus= 1
var poisonDragonBonus= 0

var dragonHealth= 10
secondEle.innerHTML="Dragon Health:" + dragonHealth

//I wanted to set something up that could work as a skeleton for a like, whole ass game or something, but idk if this
// function really supports that but I'm too tired to figure out a better way to do this espeically since I'm dumb and
// waited too long to start working on this, I also could just be talking out of my ass but again, too tired to think,
// brain mushy hehehehe if you're reading this have a good day Luke! or night or whaever
function daDamageThing(damage, typeBonus, currentDragonHealth) {
    //secondEle.innerHTML=""
    dragonHealth = currentDragonHealth - (damage + typeBonus)

    secondEle.innerHTML = "Dragon Health:" + dragonHealth
    if (dragonHealth<=0){
        secondEle.innerHTML="Dragon Health:" + 0
        //dragonHealth=0
        thirdEle.innerHTML="AYO YOU DID IT YOU BEAT THIS DRAGON'S ASS, have a cookie!"
    }
}

document.body.querySelector(".pois").addEventListener("click",function() {daDamageThing(4, poisonDragonBonus, dragonHealth)})
document.body.querySelector(".firaga").addEventListener("click", function() {daDamageThing(3, fireDragonBonus, dragonHealth)})
document.body.querySelector(".blizzaga").addEventListener("click", function(){daDamageThing(1, iceDragonBonus, dragonHealth)})




