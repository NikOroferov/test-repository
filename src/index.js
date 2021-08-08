import './sass/main.scss';
 class NewsApiService{
    constructor() {
        
        this.KEY = "8b01b570d2ebdf9fc3f47ddefbdd70fc";
        this.URL = "https://api.themoviedb.org/3/";
        this.page = 1;
        this.type = "search";
        this.media_type = "movie";
        this.query = "Небо";
        this.language = "ru-RU";
        this.adult = false;
    }
    
 async getMoviesRequest() {
     const URL = `${this.URL}${this.type}/${this.media_type}?api_key=${this.KEY}&query=${this.query}&language=${this.language}&page=${this.page}&include_adult=${this.adult}`;
     const response = await axios.get(URL);
     console.log(response.data);
     return response.data;
    };

    resetPage() {
        this.page = 1;
    };
}