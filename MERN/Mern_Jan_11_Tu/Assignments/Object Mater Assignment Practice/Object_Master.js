const pokémon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

// an array of pokémon objects where the id is evenly divisible by 3

const divByThree = pokémon.filter(a => a.id % 3 === 0)
console.log(divByThree);

// an array of pokémon objects that are "fire" type

const fType = pokémon.filter(a => a.types[0] == "fire" || a.types[1] == "fire")
console.log(fType);

// an array of pokémon objects that have more than one type

const multipleTypes = pokémon.filter(a => a.types[0, 1])
console.log(multipleTypes);

// an array with just the names of the pokémon

const pName = pokémon.map(a => a.name);
console.log(pName);

// an array with just the names of pokémon with an id greater than 99

const highIdName = pokémon.filter(a => a.id > 99).map(a => a.name);
console.log(highIdName);

// an array with just the names of the pokémon whose only type is poison

const pType = pokémon.filter(a => a.types.length == 1 && a.types[0] === "poison").map(b => b.name);
console.log(pType);

// an array containing just the first type of all the pokémon whose second type is "flying"

const flyingType = pokémon.filter(a => a.types.length = 2 && a.types[1] === "flying").map(b => b.types[0]);
console.log(flyingType);

// a count of the number of pokémon that are "normal" type

const normalNumber = pokémon.filter(a => a.types[0] == "normal" || a.types[1] == "normal").length;
console.log(normalNumber);


