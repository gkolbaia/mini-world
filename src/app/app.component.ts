import { Component } from '@angular/core';
import BaseObject from './classes/base-object'
import Creature from './classes/creature';
import Buildgins from './classes/buildings';
import Store from './classes/store';
import Person from './classes/person';
import { Warehouse } from './classes/warehouse';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']

})


export class AppComponent {
    title = 'mini-world';

    constructor() {

        const baseObject = new BaseObject('tree', 50000, 60000);
        const giorgi = new Person('giorgi', 5, 6);
        const cat = new Creature('londre', 12, 11);

        const dog = new Creature('buch', 100, 0);
        const marketi = new Store('marketi', 20, 0);
        const storesWarehouse = new Warehouse('sawyobi', 10, 20,marketi)





        marketi.takestaff(giorgi);

        console.log(marketi.staff);
        giorgi.enterBuilding(marketi.createWarehouse(20,30));
        console.log(giorgi.creatureIsIn)
        console.log(giorgi.creatureIsIn)



        }

}

