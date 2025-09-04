// Show JSON in the UI by making cards

const loadPost = () => { 
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then(resource => resource.json())
    .then(json => displayPost(json))
}