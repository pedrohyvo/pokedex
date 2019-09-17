const pokedexList = require('../../pages/pokedexList.page');

describe('Pokedex page - Visual testing', () => {
    beforeEach(() => pokedexList.open());
    
    it('should save some screenshots', () => {
        browser.saveElement(pokedexList.filterHeader, 'pokedex-filter-header', { ignoreAntialiasing: true, });
    });
    
    it('should compare successful with a baseline', () => {
      expect(browser.checkElement(pokedexList.filterHeader, 'pokedex-filter-header', { ignoreAntialiasing: true, })).toEqual(0);
    });
  });