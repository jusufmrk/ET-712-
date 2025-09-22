/*
Jusuf Mrkulic 
Homework 3 – Objects and exception handling in JS
*/

class Movie {
    constructor(title, director, year) {
        this.title = title;
        this.director = director;
        this.year = year;
    }

    getDetails() {
        return `${this.title} (Directed by ${this.director}, Released in ${this.year})`;
    }
}

class MovieCollection {
    constructor() {
        this.movies = [];
    }

    addMovie(movie) {
        this.movies.push(movie);
        console.log(`Movie "${movie.title}" added to the collection.`);
    }

    removeMovie(title) {
        try {
            const index = this.movies.findIndex(movie => movie.title === title);
            if (index === -1) {
                throw new Error(`Movie "${title}" not found in the collection.`);
            }
            this.movies.splice(index, 1);
            console.log(`Movie "${title}" removed from the collection.`);
        } catch (error) {
            console.error(error.message);
        }
    }

    showMovies() {
        try {
            if (this.movies.length === 0) {
                throw new Error("No movies in the collection.");
            }
            console.log("Movies in the collection:");
            this.movies.forEach(movie => {
                console.log(movie.getDetails());
            });
        } catch (error) {
            console.error(error.message);
        }
    }
}

// Example usage (you can change or expand this for testing):
const myCollection = new MovieCollection();

const movie1 = new Movie("Inception", "Christopher Nolan", 2010);
const movie2 = new Movie("The Matrix", "The Wachowskis", 1999);

myCollection.addMovie(movie1);
myCollection.addMovie(movie2);

myCollection.showMovies();

myCollection.removeMovie("Inception");
myCollection.showMovies();

myCollection.removeMovie("Avatar");  // Error case
myCollection.showMovies();  // Error case when empty
