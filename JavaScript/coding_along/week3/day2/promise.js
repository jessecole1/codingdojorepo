// This is in a .js file, but should be in a react app

function getNbaAthletes(request) {
    return new Promise(resolve, reject) => {
        if(request === 'NBA') {
            resolve([
                (name: 'Kevin Durant', league: 'NBA', position: 'Small Forward', active:true),
                (name: 'Charles Barkley', league: 'NBA', position: 'Power Forward', active:false),
                (name: 'Stephen Curry', league: 'NBA', position: 'Point Guard', active:true),
                (name: 'Shaq', league: 'NBA', position: 'Center', active:false),
                (name: 'Damian Lillard', league: 'NBA', position: 'Point Guard', active:true)
            ])

        } else {
            reject({message:'Sorry we dont understand that request try again', hint: 'Try "NBA" as your request'})
        }
    } 
}

getNbaAthletes('asd')
    .then((data) => {
        console.log(data)
        setState(data)
    })
    .catch((err) => {
        console.log(err)
    })