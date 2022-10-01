import apiKey from './apiKey.js';

// In order for this to work, you need a proxy server.
// In a different tab:
// cd cors-anywhere
// npm start
const search = ev => {
    console.log('searching');
    if (ev) { ev.preventDefault(); }
    const term = document.querySelector('#term').value || 'pizza';
    const location = document.querySelector('#location').value || 'Chicago, IL';
    // https://www.yelp.com/developers/documentation/v3/authentication
    const corsAnywhere = 'http://0.0.0.0:8080/';
    const url = 'https://api.yelp.com/v3/businesses/search';
    const params = new URLSearchParams({
        location: location,
        term: term + ' Black Owned'
    })
    const searchUrl = corsAnywhere + url + '?' + params;
    fetch(searchUrl, {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${apiKey}`,
            }
        })
        .then(response => response.json())
        .then(displayBusinesses);
};

const displayBusinesses = data => {
    
    const body = document.querySelector('#results');
    body.innerHTML = `<section id="businesses"></section>`;
    const container = document.querySelector('#businesses');
    data.businesses.map(bus => {
        console.log(bus);
        container.insertAdjacentHTML('beforeend', `
            <section class="card">
                <div>
                    <h2>${bus.name}</h2>
                    <p>${bus.location.display_address}</p>
                    <a href="${bus.url}" target="_blank">website</a>
                </div>
                <div class="img" style="background-image: url('${bus.image_url}');"></div>
            </section>
        `);
    })
};

export default search;
