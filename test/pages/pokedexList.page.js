class PokedexListPage {

    get sectionTitle() {
        return browser.$('h1[class*="section-title"]');
    }

    get searchInput() {
        return browser.$("#searchInput");
    }

    get searchButton() {
        return browser.$("#search");
    }

    get pokemonsList() {
        return browser.$$('div[class="pokemon-info"]');
    }

    get pokemonNameResult() {
        return browser.$('div[class="pokemon-info"] > h5');
    }

    get pokemonAbilities() {
        return browser.$$('div[class="pokemon-info"] > div[class="abilities"] > span[class*="pill"]');
    }

    get alertError() {
        return browser.$('div[class*="alert-error"] > h3');
    }

    open() {
        browser.url('pokedex/');
        browser.pause(500);
        return this.ready;
    }

    searchPokemon(value) {
        this.searchInput.setValue(value);
        this.searchButton.waitForDisplayed();
        this.searchButton.click();
    }

}

module.exports = new PokedexListPage();
