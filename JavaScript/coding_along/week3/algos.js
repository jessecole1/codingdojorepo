const nbaAthletes = [
    {name:'Kevin Durant', league:'NBA', position: 'Small Forward', active:true},
    {name:'Charles Barkley', league:'NBA',position: 'Power Forward', active:false},
    {name:'Stephen Curry', league:'NBA',  position: 'Point Guard', active:true },
    {name:'Shaq', league:'NBA',  position: 'Center', active:false },
    {name:'Damian Lillard', league:'NBA',  position: 'Point Guard', active:true },
    {name:'Mike James', league:'Euro',  position: 'Shooting Guard', active:true },
]
// ! map through nbaAthletes and console log every athletes name, position and league they play in


// here I am filtering out all the players that play in the NBA 
// const NBAPlayers = nbaAthletes.filter((athlete) => athlete.league === 'NBA')
// console.log(NBAPlayers);

// ! filter through the nbaAthletes array and return a new array that contains only the players that are active (active status is true)

// ! filter through the nbaAthletes array and return a new array that contains only the players that are point guards (position: 'Point Guard')

const allPlayers = nbaAthletes.map( (n) => {
    return n.name
})
console.log(allPlayers)