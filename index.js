// Show JSON in the UI by making cards

const loadPost = () => { 
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then(resource => resource.json())
    .then(json => displayPost(json))
}

const displayPost = (posts) => { 
    posts.forEach((post) => { 
        const {name, id, email, username, address} = post
        const {street, geo} = address
        const {lat, lng} = geo
        console.log(name, id, email, username, street, lat, lng)
    })
}
