export default class GotService {
    constructor() {
        this.proxy = 'https://cors-anywhere.herokuapp.com/';
        this._apiBase = 'https://anapioficeandfire.com/api/';
    }

    getResource = async (url) => {
        const res = await fetch(`${this.proxy}${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}; received ${res.status}`);
        }
        return await res.json();
    }

    getAllCharacters = async () => {
        const characters = await this.getResource(`characters?page=23&pageSize=10`);
        return characters.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const character = await this.getResource(`characters/${id}`);
        return this._transformCharacter(character);
    }

    getBook = async (id) => {
        const book = await this.getResource(`books/${id}`);
        return this._transformBook(book);
    }

    getHouse = async (id) => {
        const house = await this.getResource(`houses/${id}`);
        console.log(house);
        return this._transformHouse(house);
    }

    getAllHouses = async () => {
        const houses = await this.getResource(`houses`);
        return houses.map(this._transformHouse);
    }

    getAllBooks = async () => {
        const books = await this.getResource(`books`);
        return books.map(this._transformBook);
    }

    _transformCharacter(char) {
        let arr = char.url.split('/');
        let [id] = arr.splice(-1);
        return {
            id,
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture 
        } 
    }

    _transformHouse(house) {
        let arr = house.url.split('/');
        let [id] = arr.splice(-1);
        return {
            id,
            name: house.name,
            region: house.region,
            words: house.words,
            coatOfArms: house.coatOfArms
        }
            
    }

    _transformBook(book) {
        let arr = book.url.split('/');
        let [id] = arr.splice(-1);
        return {
            id,
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
            
    }
}