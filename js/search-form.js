import '../style.css'
import search from './yelp-search';


console.log(search);
const initForm = () => {
    console.log(search);
    document.querySelector('#search-form').insertAdjacentHTML(
        'beforeEnd', 
        `<form>
            <label for="location">What are you looking for?</label>
            <input id="term" type="text" placeholder="e.g., pizza, theater, dancing, bars, etc." />
            <label for="location">Location:</label>
            <input id="location" type="text" placeholder="Location" /><br>
            <button type="submit">Search</button>
        </form>`
    );
    document.querySelector('form').addEventListener('submit', search);
}

export default initForm;