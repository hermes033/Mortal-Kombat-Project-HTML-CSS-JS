// layout hisse
var layout = document.querySelector(".layout")
// hereos hisse
var scorpion = document.querySelector(".scorpion")
var subzero = document.querySelector(".subzero1")
var sonyablade = document.querySelector(".sonyablade")
var luikang = document.querySelector(".luikang1")
// enemy selector hisse
var chooseEnemey = document.querySelector(".choose-enemy")
// enemy hisse
var enemy = document.querySelector(".enemy")
// hero about
var about = document.querySelector(".about")
var about1 = document.querySelector(".about1")
var heroName = document.querySelector(".heroName")
var heroPower = document.querySelector(".heroPower")
var heroHealth = document.querySelector(".heroHealth")
// enemy about
var heroName1 = document.querySelector(".heroName1")
var heroPower1 = document.querySelector(".heroPower1")
var heroHealth1 = document.querySelector(".heroHealth1")
// button
var fight = document.querySelector(".fight")
var beat = document.querySelector(".beat")
// orta ve alt text 
var ortaText = document.querySelector(".text2")
var altText = document.querySelector(".text3")
// war hisse 
war = document.querySelector(".war")
warRight = document.querySelector(".warright")
warLeft = document.querySelector(".warleft")
// area 
var area = document.querySelector(".area")
var hero = false
var untyhero = false
// sol sag hisse herolarin aboutun vermek
var sol = document.querySelector(".sol")
var sag = document.querySelector(".sag")
// sol sag icindeki p
var slp = document.querySelector(".slp")
var op = document.querySelector(".op")
var sgp = document.querySelector(".sgp")
//!--
var slp1 = document.querySelector(".slp1")
var op1 = document.querySelector(".op1")
var sgp1 = document.querySelector(".sgp1")
// karakterler funksiyasi klik olunanda
scorpion.onclick = () => {
    if (hero == false) {
        chooseEnemey.append(subzero, sonyablade, luikang)
        hero = scorpion
        about.style.display = "block"
        heroName.innerText = scorpion.dataset.ad
        heroHealth.innerText = scorpion.dataset.can
        heroPower.innerText = scorpion.dataset.guc
        ortaText.style.display = "block"
    }
    else if (untyhero == false && untyhero != scorpion) {
        enemy.append(scorpion)
        untyhero = scorpion
        heroName1.innerText = scorpion.dataset.ad
        heroHealth1.innerText = scorpion.dataset.can
        heroPower1.innerText = scorpion.dataset.guc
        about1.style.display = "block"
        fight.style.display = "block"
        altText.style.display = "block"
    }
}

subzero.onclick = () => {
    if (hero == false) {
        chooseEnemey.append(scorpion, sonyablade, luikang)
        hero = subzero
        about.style.display = "block"
        heroName.innerText = subzero.dataset.ad
        heroHealth.innerText = subzero.dataset.can
        heroPower.innerText = subzero.dataset.guc
        ortaText.style.display = "block"
    }
    else if (untyhero == false && untyhero != subzero) {
        enemy.append(subzero)
        untyhero = subzero
        heroName1.innerText = subzero.dataset.ad
        heroHealth1.innerText = subzero.dataset.can
        heroPower1.innerText = subzero.dataset.guc
        about1.style.display = "block"
        fight.style.display = "block"
        altText.style.display = "block"
    }
}

sonyablade.onclick = () => {
    if (hero == false) {
        chooseEnemey.append(scorpion, subzero, luikang)
        hero = sonyablade
        about.style.display = "block"
        heroName.innerText = sonyablade.dataset.ad
        heroHealth.innerText = sonyablade.dataset.can
        heroPower.innerText = sonyablade.dataset.guc
        ortaText.style.display = "block"
    }
    else if (untyhero == false && untyhero != sonyablade) {
        enemy.append(sonyablade)
        untyhero = sonyablade
        about1.style.display = "block"
        heroName1.innerText = sonyablade.dataset.ad
        heroHealth1.innerText = sonyablade.dataset.can
        heroPower1.innerText = sonyablade.dataset.guc
        fight.style.display = "block"
        altText.style.display = "block"
    }
}

luikang.onclick = () => {
    if (hero == false) {
        chooseEnemey.append(scorpion, subzero, sonyablade)
        hero = luikang
        about.style.display = "block"
        heroName.innerText = luikang.dataset.ad
        heroHealth.innerText = luikang.dataset.can
        heroPower.innerText = luikang.dataset.guc
        ortaText.style.display = "block"
    }
    else if (untyhero == false && untyhero != luikang) {
        enemy.append(luikang)
        untyhero = luikang
        about1.style.display = "block"
        heroName1.innerText = luikang.dataset.ad
        heroHealth1.innerText = luikang.dataset.can
        heroPower1.innerText = luikang.dataset.guc
        fight.style.display = "block"
        altText.style.display = "block"
    }
}
// fight button ile diger seyfe kecmek
fight.onclick = () => {
    layout.style.display = "none"
    area.style.display = "block"
    warLeft.append(hero)
    warRight.append(untyhero)
    op.innerText = hero.dataset.ad
    slp.innerText = hero.dataset.can
    sgp.innerText = hero.dataset.guc
    op1.innerText = untyhero.dataset.ad
    slp1.innerText = untyhero.dataset.can
    sgp1.innerText = untyhero.dataset.guc
}
var heroDamage = 0
var enemyDamage = 0
var herohlth = 200
var enemyhlth = 200
var gif = document.querySelector(".gif")
//linebar
var line2 = document.querySelector(".line2")
var line4 = document.querySelector(".line4")
// beat button ile can aparmaq
beat.onclick = () => {
    var x = setInterval(function () {
        heroDamage = Math.floor(Math.random() * parseInt(hero.dataset.guc))
        enemyDamage = Math.floor(Math.random() * parseInt(untyhero.dataset.guc))

        herohlth -= enemyDamage
        enemyhlth -= heroDamage
        line2.style.width = `${herohlth}px`
        line4.style.width = `${enemyhlth}px`

        slp.innerText = `${herohlth}`
        slp1.innerText = `${enemyhlth}`

        if (herohlth <= 0) {
            clearInterval(x);
            herohlth = 0
            slp.innerText = `${herohlth}`
            gif.style.display = "none";
            alert(`${untyhero.dataset.ad} WINS!`);
        }
        if (enemyhlth <= 0) {
            enemyhlth = 0
            clearInterval(x);
            slp1.innerText = `${enemyhlth}`
            gif.style.display = "none";
            alert(`${hero.dataset.ad} WINS!`);
        }
    }, 1000);
    gif.style.display = "block"
}


