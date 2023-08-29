const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(`wardrobe height is ${wardrobe.height}`);
console.log(`wardrobe manufacturer is ${wardrobe.manufacturer}`);
console.log(`wardrobe contents are ${wardrobe.contents}, wardrobe depth is ${wardrobe.depth}, wardrobe width is ${wardrobe.width}`);
wardrobe.material = "Cedar";
console.log(`wardrobe material is ${wardrobe.material}`);

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(`The dimensions of the Empire State Building are as follows: 
number of stories is ${empireStateBuilding.stories}, 
height is ${empireStateBuilding.height}, 
number of square feet is ${empireStateBuilding.squareFeet}, 
length from East to West is ${empireStateBuilding.eastWestLength}, 
length from North to South is ${empireStateBuilding.northSouthLength}`);

const eStateAddress ="address"
const eStateConstDate = 'constructionDate'
const eStateCost = 'cost'
const eStateOwner = 'owner'
const eStateArchitect = 'architect'
console.log(empireStateBuilding[eStateAddress]);
console.log(empireStateBuilding[eStateConstDate]);
console.log(empireStateBuilding[eStateCost]);
console.log(empireStateBuilding[eStateOwner]);
console.log(empireStateBuilding[eStateArchitect]);

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
const ptInstructors = nashvilleSoftwareSchool.instructors.partTime
for (let i=0; i<ptInstructors.length; i++) {
    console.log(ptInstructors[i])
}
const ftInstructors = nashvilleSoftwareSchool.instructors.fullTime
for (let i=0; i<ftInstructors.length; i++) {
    console.log(ftInstructors[i])
}
console.log(nashvilleSoftwareSchool.instructors.fullTime[4]);
console.log(nashvilleSoftwareSchool.instructors.partTime[0]);
