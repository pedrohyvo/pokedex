const pokedexList = require('../pages/pokedexList.page');
const constants = require('../utils/constants');

describe('Pokedex page', () => {
    
    beforeAll(() => pokedexList.open());

    beforeEach(() => browser.refresh());

    it('should have the right page', () => {
        pokedexList.sectionTitle.waitForDisplayed();
        expect(pokedexList.sectionTitle.getText()).toBe(constants.sectionTitle);
    });

    it('should find your pokemon', () => {
        pokedexList.searchPokemon(constants.pokemonName);
        pokedexList.pokemonsList.waitForDisplayed();
        expect(pokedexList.pokemonNameResult.getText()).toBe(constants.pokemonName);
    });

    it('should not match your search', () => {
        pokedexList.searchPokemon(constants.invalidPokemonName);
        pokedexList.alertError.waitForDisplayed();
        expect(pokedexList.alertError.getText()).toBe(constants.noPokemonMsg);
    });
});