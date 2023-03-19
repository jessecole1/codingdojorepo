// map is used to iterate through an array, takes a callback function
// map and filter are only available on arrays 

const nums = [23,56,19,20,9,20,78,55,32,42,8,12,80]

nums.map((item, idx) => {
    console.log(`${item} is at index ${idx}`);
})













const nbaAthletes = [
    {name:'Kevin Durant', league:'NBA', position: 'Small Forward', active: true},
    {name:'Charles Barkley', league:'NBA', position: 'Power Forward', active: false},
    {name:'Stephen Curry', league:'NBA', position: 'Point Guard', active: true},
    {name:'Shaq', league:'NBA', position: 'Center', active: false},
    {name:'Damian Lillard', league:'NBA', position: 'Point Guard', active: true},
    {name:'Mike James', league:'Euro', position: 'Shooting Guard', active: true},
]