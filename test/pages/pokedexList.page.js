class PokedexListPage {

    get sectionTitle() {
        return browser.$('h1[class*="section-title"]');
    }

    get filterHeader() {
        return browser.$('div[class="pokedex-filter-header"]');
    }

    get searchInput() {
        return browser.$("#searchInput");
    }

    get searchSuggestion() {
        return browser.$('div[class*="tt-suggestion"]');
    }

    get searchButton() {
        return browser.$("#search");
    }

    get pokemonsList() {
        return browser.$('div[class="pokemon-info"]');
    }

    get pokemonNameResult() {
        return browser.$('div[class="pokemon-info"] > h5');
    }

    get pokemonAbilities() {
        return browser.$('div[class="pokemon-info"] > div[class="abilities"] > span[class*="pill"]');
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
        this.searchInput.waitForDisplayed();
        this.searchInput.setValue(value);
        if(this.searchSuggestion.isDisplayed()) {
            this.searchSuggestion.click();
        }
    }

    clickOnSearchSuggestion() {
        this.searchSuggestion.waitForDisplayed();
        this.searchSuggestion.click();
    }

    search() {
        this.searchButton.waitForDisplayed();
        this.searchButton.click();
    }

}

module.exports = new PokedexListPage();
