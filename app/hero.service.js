System.register(['./mock-heroes'], function(exports_1) {
    "use strict";
    var mock_heroes_1;
    var HeroService;
    return {
        setters:[
            function (mock_heroes_1_1) {
                mock_heroes_1 = mock_heroes_1_1;
            }],
        execute: function() {
            ;
            HeroService = (function () {
                function HeroService() {
                }
                HeroService.prototype.getHeroes = function () {
                    return Promise.resolve(mock_heroes_1.HEROES);
                };
                HeroService.prototype.getHeroesSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_heroes_1.HEROES); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                HeroService.prototype.getHero = function (id) {
                    return Promise.resolve(mock_heroes_1.HEROES)
                        .then(function (heroes) { return heroes.filter(function (hero) { return hero.id === id; })[0]; });
                };
                return HeroService;
            }());
            exports_1("HeroService", HeroService);
        }
    }
});
//# sourceMappingURL=hero.service.js.map