const accesskey = "e525d80f22c1687000675120f2b6e4847213d2678cc9bc38ea7881a98e73c1f4"

const API_URL = "https://api.unsplash.com/search/photos/?page=1&per_page=20";


export default {
    search(searchTerm) {
        const url = `${API_URL}&query=${searchTerm}&client_id=${accesskey}`;

        return fetch(url)
            .then(response => response.json())
            .then(result => {
                return result.results;
            })
    }
}