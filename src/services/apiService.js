import { API_URL, API_KEY_3 } from "../config/api";



export default class GetMovies {
    constructor(){
        this.url = API_URL;
        this.key = API_KEY_3;
    }
//     fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.page}`)

    async getService (url){
        const result = await fetch(`${this.url}/discover/movie?api_key=${this.key}${url}`);
        //console.log(url);
        if (!result.ok){
            throw new Error(`'Could not fetch', ${result.status}`)
        }
        return await result.json();
    }
    // getService (url){
    //     return new Promise((resilve, reject) => {
    //         fetch(`${this.url}/discover/movie?api_key=${this.key}${url}`)
    //         .then()
    //         return result.json();

    //     });
    // }

    async getMovieItems(sortBy, page){
        console.log(sortBy);
        const movies = await this.getService(`&sort_by=${sortBy}&page=${page}`)
            .then(response => {
                //console.log(response);
                return response;
            });
 
        return movies;
    };
};



