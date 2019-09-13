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
        pokedexList.search();
        pokedexList.pokemonsList.waitForDisplayed();
        expect(pokedexList.pokemonNameResult.getText()).toBe(constants.pokemonName);
        expect(pokedexList.pokemonAbilities.getText()).toContain(constants.pokemonAbility);
    });

    it('should not match your search', () => {
        pokedexList.searchPokemon(constants.invalidPokemonName);
        pokedexList.searchButton.isDisplayed();
        pokedexList.search();
        pokedexList.alertError.waitForDisplayed();
        expect(pokedexList.alertError.getText()).toBe(constants.noPokemonMsg);
    });
});