import {Component, OnInit}      from 'angular2/core';
import {RouteParams}            from 'angular2/router';

import {Hero}                   from './hero';
import {HeroService}            from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
    hero : Hero;

    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        // the (+) operator converts the id string we get from the routeParams to a number.
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    goBack() {
        window.history.back();
    }
}