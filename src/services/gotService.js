export default class GotService {
    constructor() {
        this.proxy = 'https://cors-anywhere.herokuapp.com/';
        this._apiBase = 'https://anapioficeandfire.com/api/';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}; received ${res.status}`);
        }
        return await res.json();
    }

    async getAllCharacters() {
        const characters = await this.getResource(`characters`);
        return this._transformCharacter(characters);
    }

    async getCharacter(id) {
        const character = await this.getResource(`characters/${id}`);
        return this._transformCharacter(character);
    }

    getHouses() {
        return this.getResource('houses');
    }

    getBooks() {
        return this.getResource('books');
    }

    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture 
        }
            
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons  
        }
            
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
            
    }
}