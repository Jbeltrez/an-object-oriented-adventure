// const adventurer = {
//     name: 'Robin', 
//     health: 10, 
//     inventory: ['sword', 'potion', 'artifcat']
// }
class Character {
    constructor(name) {
        this.name = name; 
        this.health = 100; 
        this.inventory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random()* 20) + 1 + mod; 
        console.log(`${this.name} rolled a ${result}.`)

    }
}
function listInventory(adventurer) {
    for (let i = 0; i < adventurer.inventory.length; i++) {
        console.log(adventurer.inventory[i])
    }
    return true
};

class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }

// console.log(listInventory(adventurer))

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            'Frank', 
        type: 'Flea', 
        belongings: ['small hat', 'sunglasses']
        }
    },
    roll(mod = 0) {
        const result = Math.floor(Math.random()* 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }

}