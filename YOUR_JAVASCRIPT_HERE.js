const hero = {
    name: "Evelina",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "Bazooka",
        damage: 2,
    }
}

function rest(object) {
    if (object.health == 10) {
        return alert("message");
    } else {
        object.health = 10;
        return object
    }
}

function reset(property) {
    return hero.health = 10

}

function pickUpItem(heroLikeObject, weaponLikeObject) {
    return heroLikeObject.inventory.push(weaponLikeObject)
}

function add(weaponLikeObject) {
    return
}


/// When the dagger is clicked it will add a weapon-like 
///object to the inventory array with `type`: `dagger` and `damage`: 2

function equipWeapon(heroLikeObject) {
    if (heroLikeObject.inventory[0]) {
        heroLikeObject.weapon = heroLikeObject.inventory[0]
    }
    return heroLikeObject
}

function bag() {
    return
}

/// When the bag is clicked it will equip the hero 
/// with the first item in the inventory array