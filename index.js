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
            <div class="cards space-y-4 p-6 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl shadow-lg w-96 mx-auto hover:translate-y-2 transition-transform duration-300 ease-in-out">
    <div class="border border-emerald-400 bg-emerald-50 text-center rounded-lg p-4 shadow-sm">
        <h1 class="font-bold text-emerald-700 text-lg">The name of the user is: ${name}</h1>
        <h2 class="text-emerald-600">User also goes by the username: ${username}</h2>
        <p class="text-emerald-500">The email address is: ${email}</p>
    </div>

    <ul class="border border-indigo-400 bg-indigo-50 text-left rounded-lg p-4 shadow-sm space-y-1">
        <li class="text-indigo-700">Street: ${street}</li>
        <li class="text-indigo-600">City: ${city}</li>
        <li class="text-indigo-500">Zipcode: ${zipcode}</li>
    </ul>

    <p class="border border-pink-400 bg-pink-50 text-right rounded-lg p-4 shadow-sm text-pink-700">
        The geo is: ${lat} and ${lng}
    </p>
</div>

`;
        cardContainer.append(card);
    });
};