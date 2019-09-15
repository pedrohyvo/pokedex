class PokedexDetailsPage {

    get title() {
        return browser.$('div[class*="pagination-title"]');
    }

    get detailsRight() {
        return browser.$('div[class="pokedex-pokemon-details-right"]');
    }

    get description() {
        return browser.$('div[class*="pokemon-details-right > div[class*="version-descriptions"]');
    }

    get abilitiesAtrribute() {
        return browser.$('//span[contains(text(),"Overgrow")]');
    }

    get abilityInfoDetail() {
        return browser.$('div[class*="pokemon-ability-info-detail"]');
    }

    get abilityInfoParagraph() {
        return browser.$('div[class*="match"] > p');
    }

    get abilityCloseButton() {
        return browser.$('span[class="button-close"]');
    }

    closeAbilityInfoDetails() {
        this.abilityCloseButton.waitForDisplayed();
        this.abilityCloseButton.click();
    }

    clickOnAbilityAttribute() {
        this.abilitiesAtrribute.waitForDisplayed();
        this.abilitiesAtrribute.click();
    }

}

module.exports = new PokedexDetailsPage();
