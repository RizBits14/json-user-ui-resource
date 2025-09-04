// Show JSON in the UI by making cards

const loadPost = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
        .then(resource => resource.json())
        .then(json => displayPost(json))
}

// Testing
// const displayPost = (posts) => { 
//     posts.forEach((post) => { 
//         const {name, username, email, address} = post
//         const {street, city, zipcode, geo} = address
//         const{lat, lng} = geo
//         console.log(name, username, email, street, city, zipcode, lat, lng)
//     })
// }

const displayPost = (posts) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    posts.forEach((element) => {
        const { name, username, email, address } = element;
        const { street, city, zipcode, geo } = address;
        const { lat, lng } = geo;

        const card = document.createElement('div');
        card.innerHTML = `
            <div class="cards">
                <h1>The name of the user is: ${name}</h1>
                <h2>User also goes by the username: ${username}</h2>
                <p>The email address is: ${email}</p>
                <ul>
                    <li>Street: ${street}</li>
                    <li>City: ${city}</li>
                    <li>Zipcode: ${zipcode}</li>
                </ul>
                <p>The geo is: ${lat} and ${lng}</p>
            </div>`;
        cardContainer.append(card);
    });
};