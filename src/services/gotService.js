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

    getAllCharacters() {
        return this.getResource('characters');
    }

    getCharacter(id) {
        return this.getResource(`characters/${id}`);
    }

    getHouses() {
        return this.getResource('houses');
    }

    getBooks() {
        return this.getResource('books');
    }

}