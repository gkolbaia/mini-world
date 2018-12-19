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
    sad: boolean = true;
    array: any[] = [];
    newElement: any;
    giorgi: Person;
    storeName: Store;
    x: number = null;
    y: number = null;


    constructor() {

        const baseObject = new BaseObject('tree', 50000, 60000);
        this.giorgi = new Person('giorgi', 5, 6);
        const cat = new Creature('londre', 12, 11);
        const irakli = new Person('irakli', 5, 5)

        const dog = new Creature('buch', 100, 0);
        const marketi = new Store('marketi', 20, 0);
        const warehouse = new Warehouse('sawyobi', 10, 20, marketi)

        marketi.takestaff(this.giorgi);
        //console.log(marketi.staff);
        //marketi.removeStaff(giorgi);
        //marketi.takestaff(irakli);
        //console.log(marketi.staff)

        //console.log(giorgi.creatureIsIn)
        marketi.buyingProducts('book1', 2, 3);
        marketi.buyingProducts('book2', 2, 3);



        marketi.getProductsFromWarehouse('book1', 1);
        console.log('warehouse', warehouse.warehouseProducts);
        console.log('store', marketi.products)
        console.log(marketi.checkProduct('book2'))
    }
    // buttonClick(e) {
    //     console.log(e.target);
    //     this.sad = true;

    //     console.log(this.storeName)
    // }
    clickFunction(e) {
        console.log(e.offsetX, e.offsetY);
        if (this.sad) {
            this.storeName = new Store('giorgi', e.offsetX, e.offsetY);
            this.array.push(this.giorgi);
            this.x = e.offsetX;
            this.y = e.offsetY;

            //this.sad = false;
        }
    }
    squareClick(e) {

    }
}

