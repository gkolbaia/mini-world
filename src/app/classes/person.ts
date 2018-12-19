import Creature from "./creature";
/** WHAT PERSON HAVE:
 * -name
 * -id
 * -adress
 * -getObjectId
 * -getDistance
 * -checkDistance
 * -wakeUp
 * -sleep
 * -move
 * -enterBuilding
 * -leaveBuilding
 */




export default class Person extends Creature {
    private _personProducts: object = {};
    private _personMoney = 1000;
    constructor(name: string, x: number, y: number) {

        super(name, x, y);
    }
    get x() {
        return this._personProducts
    }
    buy(whereTobuy, product, amount) {
        if (whereTobuy.products[product]['price']) {



        } else {
            console.log('there is no ' + product + ' in that store')
        }
    }
}

